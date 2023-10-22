import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import StandardScaler
import joblib  # Import joblib for loading the scaler

# Load the trained model
model = load_model('best_model.h5')

# Load the StandardScaler
scaler_filename = "scaler.save"
scaler = joblib.load(scaler_filename)

def preprocess_input_data(input_data):
    # Create a DataFrame from the input data
    input_df = pd.DataFrame([input_data])

    # Calculate 'BMI_Glucose' and 'FamilyHistory'
    input_df['BMI_Glucose'] = input_df['BMI'] * input_df['Glucose']
    input_df['FamilyHistory'] = np.where(input_df['DiabetesPedigreeFunction'] > 0.9, 1, 0)

    # Select relevant features
    input_features = input_df[['Glucose', 'BMI', 'Age', 'BMI_Glucose', 'FamilyHistory']]

    # Scale the input features using the loaded StandardScaler
    input_features = scaler.transform(input_features)

    return input_features

def predict_diabetes(input_data):
    try:
        preprocessed_data = preprocess_input_data(input_data)
        predictions = model.predict(preprocessed_data)
        return predictions
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    # Example usage of the function
    input_data = {
        "Glucose": 170,
        "BMI": 26,
        "Age": 25,
        "BMI_Glucose": 0,
        "DiabetesPedigreeFunction": 0.627,
    }
    preprocessed_data = preprocess_input_data(input_data)
    predictions = predict_diabetes(input_data)
    print("Predictions:")
    print(predictions)
