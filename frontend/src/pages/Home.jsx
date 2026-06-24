import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px"
      }}
    >
      <h1>
        Customer Churn Prediction Platform
      </h1>

      <p>
        Predict customer attrition risk
        using Machine Learning
      </p>

      <Link to="/predict">
        <button>
          Start Prediction
        </button>
      </Link>
    </div>
  );
}

export default Home;