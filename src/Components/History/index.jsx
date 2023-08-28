import React from "react";
import "./History.scss";

function History({ history, dispatch }) {
  return (
    <section className="history">
      <h2>API Call History</h2>
      <ul className="history-list">
        {history.map((entry, index) => (
          <li key={index} className="history-item">
            <div className="history-details">
              <span className="history-method">Method: </span>
              <span
                className="method-text"
                style={{ color: getMethodColor(entry.method) }}
              >
                {entry.method}
              </span>
              <br />
              <span className="history-url"> URL: </span>
              <span>{entry.url}</span>
            </div>
            <button
              className="history-re-run-button"
              onClick={() =>
                dispatch({ type: "SET_REQUEST_PARAMS", payload: entry })
              }
            >
              Re-run
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getMethodColor(method) {
  switch (method) {
    case "GET":
      return "green";
    case "POST":
      return "yellow";
    case "PUT":
      return "blue";
    case "DELETE":
      return "red";
    default:
      return "white";
  }
}

export default History;
