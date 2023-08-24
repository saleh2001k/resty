import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";

function App() {
  const [data, setData] = useState({ body: null, headers: null });
  const [requestParams, setRequestParams] = useState({ method: "", url: "" });
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(""); // New state for selected method

  const callApi = async (formData) => {
    try {
      setLoading(true);
      const response = await axios({
        method: formData.method,
        url: formData.url,
        data:
          formData.method === "POST" || formData.method === "PUT"
            ? formData.body
            : null,
      });

      setData({ body: response.data, headers: response.headers });
      setRequestParams(formData);
      setSelectedMethod(formData.method);
    } catch (error) {
      console.error("Error calling API:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} loading={loading} />
      <Results data={data} loading={loading} requestParams={requestParams} selectedMethod={selectedMethod} /> {/* Pass selectedMethod */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
