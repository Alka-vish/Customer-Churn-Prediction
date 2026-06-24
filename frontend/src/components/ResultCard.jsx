function ResultCard({ result }) {

  if (!result) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px"
      }}
    >
      <h3>Prediction Result</h3>

      <p>
        <strong>Prediction:</strong>{" "}
        {result.prediction}
      </p>

      <p>
        <strong>Probability:</strong>{" "}
        {result.probability}%
      </p>

      <p>
        <strong>Risk Level:</strong>{" "}
        {result.risk_level}
      </p>

      <p>
        <strong>Recommendation:</strong>{" "}
        {result.recommendation}
      </p>
    </div>
  );
}

export default ResultCard;