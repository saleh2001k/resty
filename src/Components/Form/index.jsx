// import React, { useState, useEffect } from "react";
// import "./Form.scss";

// const Form = ({ handleApiCall, loading }) => {
//   const [formData, setFormData] = useState({ method: "GET", url: "", body: "" });
//   const [urlError, setUrlError] = useState(false);

//   useEffect(() => {
//     setUrlError(false);
//   }, [formData.url]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isValidUrl(formData.url)) {
//       handleApiCall(formData);
//     } else {
//       setUrlError(true);
//     }
//   };

//   const handleMethodClick = (method) => {
//     setFormData({ ...formData, method });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const isValidUrl = (url) => {
//     const urlPattern = /^https?:\/\/\S+/;
//     return urlPattern.test(url);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span>URL: </span>
//           <input
//             name="url"
//             type="text"
//             value={formData.url}
//             onChange={handleInputChange}
//             disabled={loading}
//           />
//         </label>
//         {urlError && (
//           <div className="error">Invalid URL. Please enter a valid URL.</div>
//         )}
//         <div className="methods">
//           <button
//             type="button"
//             onClick={() => handleMethodClick("GET")}
//             className={`method-button ${
//               formData.method === "GET" ? "active" : ""
//             }`}
//             disabled={loading}
//           >
//             GET
//           </button>
//           <button
//             type="button"
//             onClick={() => handleMethodClick("POST")}
//             className={`method-button ${
//               formData.method === "POST" ? "active" : ""
//             }`}
//             disabled={loading}
//           >
//             POST
//           </button>
//           <button
//             type="button"
//             onClick={() => handleMethodClick("PUT")}
//             className={`method-button ${
//               formData.method === "PUT" ? "active" : ""
//             }`}
//             disabled={loading}
//           >
//             PUT
//           </button>
//           <button
//             type="button"
//             onClick={() => handleMethodClick("DELETE")}
//             className={`method-button ${
//               formData.method === "DELETE" ? "active" : ""
//             }`}
//             disabled={loading}
//           >
//             DELETE
//           </button>
//         </div>
//         {(formData.method === "POST" || formData.method === "PUT") && (
//           <label>
//             <span>Request Body: </span>
//             <textarea
//               name="body"
//               value={formData.body}
//               onChange={handleInputChange}
//               disabled={loading}
//             ></textarea>
//           </label>
//         )}
//         <button type="submit" disabled={loading}>
//           {loading ? "Loading..." : "GO!"}
//         </button>
//       </form>
//     </>
//   );
// };

// export default Form;



import React, { useState } from "react";
import "./Form.scss";

const Form = ({ handleApiCall, loading }) => {
  const [formData, setFormData] = useState({ method: "GET", url: "", body: "" });
  const [urlError, setUrlError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidUrl(formData.url)) {
      handleApiCall(formData);
    } else {
      setUrlError(true);
    }
  };

  const handleMethodClick = (method) => {
    setFormData({ ...formData, method });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidUrl = (url) => {
    const urlPattern = /^https?:\/\/\S+/;
    return urlPattern.test(url);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            value={formData.url}
            onChange={handleInputChange}
            disabled={loading}
          />
        </label>
        {urlError && (
          <div className="error">Invalid URL. Please enter a valid URL.</div>
        )}
        <div className="methods">
          <button
            type="button"
            onClick={() => handleMethodClick("GET")}
            className={`method-button ${formData.method === "GET" ? "active" : ""}`}
            disabled={loading}
            style={{ backgroundColor: formData.method === "GET" ? "red" : "" }}
          >
            GET
          </button>
          <button
            type="button"
            onClick={() => handleMethodClick("POST")}
            className={`method-button ${
              formData.method === "POST" ? "active" : ""
            }`}
            disabled={loading}
            style={{ backgroundColor: formData.method === "POST" ? "red" : "" }}
          >
            POST
          </button>
          <button
            type="button"
            onClick={() => handleMethodClick("PUT")}
            className={`method-button ${
              formData.method === "PUT" ? "active" : ""
            }`}
            disabled={loading}
            style={{ backgroundColor: formData.method === "PUT" ? "red" : "" }}
          >
            PUT
          </button>
          <button
            type="button"
            onClick={() => handleMethodClick("DELETE")}
            className={`method-button ${
              formData.method === "DELETE" ? "active" : ""
            }`}
            disabled={loading}
            style={{ backgroundColor: formData.method === "DELETE" ? "red" : "" }}
          >
            DELETE
          </button>
        </div>
        {(formData.method === "POST" || formData.method === "PUT") && (
          <label>
            <span>Request Body: </span>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              disabled={loading}
            ></textarea>
          </label>
        )}
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "GO!"}
        </button>
      </form>
    </>
  );
};

export default Form;
