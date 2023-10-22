import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import StandardScaler
import joblib
import requests
from pprint import pprint
import json
from flask import Flask
from flask import Flask, request
from terra.base_client import Terra
from datetime import datetime


API_KEY = "lCpaVPTN_SxWy6bw5_A3bp_C5W2EphE0"
DEV_ID = "vinit-testing-vTbaNOdYk1"


def find_glucose(user_id, start_date, end_date):
    url = f"https://api.tryterra.co/v2/body?user_id={user_id}&start_date={start_date}&end_date={end_date}&to_webhook=false&with_samples=false"
    headers = {
        "accept": "application/json",
        "dev-id": f"{DEV_ID}",
        "x-api-key": f"{API_KEY}"
    }

    response = requests.get(url, headers=headers).json()
    if (len(response['data']) != 0):
        total_glucose = 0
        for x in range(0, len(response['data'])):
            avg_glucose_str = response['data'][x]['glucose_data']['day_avg_blood_glucose_mg_per_dL']
            avg_glucose = float(avg_glucose_str)
            total_glucose += avg_glucose

        avg_glucose_month = total_glucose / len(response['data'])
        return avg_glucose_month
    else:
        return 99.4509633717823


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
    input_df['FamilyHistory'] = np.where(
        input_df['DiabetesPedigreeFunction'] > 0.9, 1, 0)

    # Select relevant features
    input_features = input_df[['Glucose', 'BMI',
                               'Age', 'BMI_Glucose', 'FamilyHistory']]

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

    user_id = "data-glucose"
    start_date = "2023-04-02"
    end_date = "2023-04-15"
    glucoseLevel = find_glucose(user_id, start_date, end_date)
    input_data = {
        "Glucose": glucoseLevel,
        "BMI": 26,
        "Age": 25,
        "BMI_Glucose": 0,
        "DiabetesPedigreeFunction": 0.627,
    }
    preprocessed_data = preprocess_input_data(input_data)
    predictions = predict_diabetes(input_data)
    print("Predictions:")
    print(predictions)
