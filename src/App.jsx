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
  const [selectedMethod, setSelectedMethod] = useState(""); 
  const [request, setRequest] = useState(null); 

  useEffect(() => {
    if (request) {
      const callApi = async () => {
        try {
          setLoading(true);
          const response = await axios(request);

          setData({ body: response.data, headers: response.headers });
          setRequestParams(request);
          setSelectedMethod(request.method);
        } catch (error) {
          console.error("Error calling API:", error);
        } finally {
          setLoading(false);
        }
      };

      callApi();
    }
  }, [request]);

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={setRequest} loading={loading} />
      <Results data={data} loading={loading} requestParams={requestParams} selectedMethod={selectedMethod} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
