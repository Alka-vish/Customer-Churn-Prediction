from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from predict import predict_churn
from schemas import CustomerData

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
def predict(customer: CustomerData):
    return predict_churn(customer.model_dump())