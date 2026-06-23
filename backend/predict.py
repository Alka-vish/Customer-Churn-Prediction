import joblib
import pandas as pd

model = joblib.load("churn_model.pkl")
encoders = joblib.load("encoders.pkl")

def predict_churn(customer_data):

    data = customer_data.copy()

    for col, encoder in encoders.items():

        if col != "Churn" and col in data:

            data[col] = encoder.transform([data[col]])[0]

    df = pd.DataFrame([data])

    prediction = model.predict(df)[0]

    probability = model.predict_proba(df)[0][1]

    if probability >= 0.75:
        risk = "High"
        recommendation = "Immediate retention action recommended"

    elif probability >= 0.50:
        risk = "Medium"
        recommendation = "Offer discounts or loyalty benefits"

    else:
        risk = "Low"
        recommendation = "Customer likely to stay"

    return {
    "prediction": "Churn" if prediction == 1 else "No Churn",
    "probability": round(probability * 100, 2),
    "risk_level": risk,
    "recommendation": recommendation
}
if __name__ == "__main__":

    sample = {
        "gender": "Female",
        "SeniorCitizen": 0,
        "Partner": "Yes",
        "Dependents": "No",
        "tenure": 12,
        "PhoneService": "Yes",
        "MultipleLines": "No",
        "InternetService": "Fiber optic",
        "OnlineSecurity": "No",
        "OnlineBackup": "Yes",
        "DeviceProtection": "No",
        "TechSupport": "No",
        "StreamingTV": "Yes",
        "StreamingMovies": "Yes",
        "Contract": "Month-to-month",
        "PaperlessBilling": "Yes",
        "PaymentMethod": "Electronic check",
        "MonthlyCharges": 75.5,
        "TotalCharges": 906
    }

    print(predict_churn(sample))