from fastapi import FastAPI
from predict import predict_churn
from schemas import CustomerData

app = FastAPI()

@app.post("/predict")
def predict(customer: CustomerData):

    return predict_churn(customer.model_dump())