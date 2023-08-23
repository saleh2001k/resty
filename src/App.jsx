import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({ method: "", url: "" });
  const [loading, setLoading] = useState(false);

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

      setData(response.data);
      setRequestParams(formData);
    } catch (error) {
      console.error("Error calling API:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} loading={loading} />
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
