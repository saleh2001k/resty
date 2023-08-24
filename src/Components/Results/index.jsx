import React from 'react';
import './Results.scss';
import ReactJson from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results({ data, loading, requestParams, selectedMethod }) {
  return (
    <section>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h3>Request Method: {selectedMethod}</h3>
          <h3>URL: {requestParams.url}</h3>
          <h2>Response Headers:</h2>
          <ReactJson data={data.headers} theme="monikai" />
          <h2>Response Body:</h2>
          <ReactJson data={data.body} theme="monikai" />
        </div>
      )}
    </section>
  );
}

export default Results;
