import React from 'react';
import './Results.scss';

function Results({ data, loading }) {
  return (
    <section>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
      )}
    </section>
  );
}

export default Results;
