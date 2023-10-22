import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split, StratifiedKFold
from sklearn.preprocessing import StandardScaler  # Use StandardScaler
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score
from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import TomekLinks
from sklearn.feature_selection import SelectKBest, chi2
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, BatchNormalization, Dropout
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint, ReduceLROnPlateau
import matplotlib.pyplot as plt

# Load the dataset
data = pd.read_csv('diabetesDataset.csv')

# Feature engineering: Emphasizing key features, including genetics
data['BMI_Glucose'] = data['BMI'] * data['Glucose']

# Create a binary feature for family history of diabetes (proxy for genetics)
data['FamilyHistory'] = np.where(data['DiabetesPedigreeFunction'] > 0.9, 1, 0)

# Define key features (X) and target (y)
X = data[['Glucose', 'BMI', 'Age', 'BMI_Glucose', 'FamilyHistory']]
y = data['Outcome']

# Handle class imbalance using a combination of SMOTE and Tomek links
oversampler = SMOTE(sampling_strategy=0.7, random_state=42)
undersampler = TomekLinks()
X_resampled, y_resampled = oversampler.fit_resample(X, y)
X_resampled, y_resampled = undersampler.fit_resample(X_resampled, y_resampled)

# Feature selection using chi-squared test
X_resampled = SelectKBest(chi2, k=5).fit_transform(X_resampled, y_resampled)

# Standardize features using StandardScaler
scaler = StandardScaler()  # Use StandardScaler for preprocessing
X_resampled = scaler.fit_transform(X_resampled)

import joblib

scaler_filename = "scaler.save"
joblib.dump(scaler, scaler_filename)

# Define a function to create a model
def create_model(optimizer='adam', dropout_rate=0.5, neurons_layer1=256, neurons_layer2=128, neurons_layer3=64, weight_regularizer=0.01):
    model = Sequential()
    model.add(Dense(neurons_layer1, input_shape=(X_resampled.shape[1],), activation='relu', kernel_regularizer=tf.keras.regularizers.l2(weight_regularizer)))
    model.add(BatchNormalization())
    model.add(Dropout(dropout_rate))
    model.add(Dense(neurons_layer2, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(weight_regularizer)))
    model.add(BatchNormalization())
    model.add(Dropout(dropout_rate))
    model.add(Dense(neurons_layer3, activation='relu', kernel_regularizer=tf.keras.regularizers.l2(weight_regularizer)))
    model.add(BatchNormalization())
    model.add(Dropout(dropout_rate))
    model.add(Dense(1, activation='sigmoid'))

    model.compile(optimizer=optimizer, loss='binary_crossentropy', metrics=['accuracy'])
    return model

# K-fold Cross-Validation
kf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
accuracies = []
f1_scores = []
roc_auc_scores = []

for train_index, val_index in kf.split(X_resampled, y_resampled):
    X_train, X_val = X_resampled[train_index], X_resampled[val_index]
    y_train, y_val = y_resampled[train_index], y_resampled[val_index]

    # Create the model
    model = create_model()

    # Model training
    history = model.fit(X_train, y_train, validation_data=(X_val, y_val), epochs=200, batch_size=64, 
                        callbacks=[EarlyStopping(monitor='val_loss', patience=20, restore_best_weights=True),
                                   ModelCheckpoint('best_model.h5', monitor='val_loss', save_best_only=True),
                                   ReduceLROnPlateau(monitor='val_loss', factor=0.2, patience=5, min_lr=0.00001)])

    # Model evaluation
    y_pred = (model.predict(X_val) > 0.5).astype(int)
    accuracy = accuracy_score(y_val, y_pred)
    f1 = f1_score(y_val, y_pred)
    roc_auc = roc_auc_score(y_val, y_pred)
    accuracies.append(accuracy)
    f1_scores.append(f1)
    roc_auc_scores.append(roc_auc)

# Calculate average accuracy, F1 score, and ROC AUC over all folds
average_accuracy = np.mean(accuracies)
average_f1 = np.mean(f1_scores)
average_roc_auc = np.mean(roc_auc_scores)






if __name__ == '__main__':
    # Example usage of the trained model
    example_input_data = {
        'Glucose': 40,
        'BMI': 26.6,
        'Age': 70,
        'BMI_Glucose': 2261.0,
        'FamilyHistory': 0  # You can set this based on the family history of the example person
    }

    # Preprocess the example input data
    example_input = pd.DataFrame([example_input_data])
    example_input['BMI_Glucose'] = example_input['BMI'] * example_input['Glucose']
    example_input = example_input[['Glucose', 'BMI', 'Age', 'BMI_Glucose', 'FamilyHistory']]
    example_input = scaler.transform(example_input)  # Scale the input data using the same scaler

    # Make predictions using the model
    example_prediction = model.predict(example_input)

    print(f'Example Prediction: {example_prediction[0, 0]:.4f}')