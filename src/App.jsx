import React, { useReducer, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import History from "./Components/History";

const initialState = {
  data: { body: null, headers: null },
  requestParams: { method: "", url: "" },
  loading: false,
  selectedMethod: "",
  history: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_REQUEST_PARAMS":
      return { ...state, requestParams: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_SELECTED_METHOD":
      return { ...state, selectedMethod: action.payload };
    case "ADD_TO_HISTORY":
      return { ...state, history: [action.payload, ...state.history] };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.requestParams) {
      const callApi = async () => {
        try {
          dispatch({ type: "SET_LOADING", payload: true });
          const response = await axios(state.requestParams);

          dispatch({
            type: "SET_DATA",
            payload: { body: response.data, headers: response.headers },
          });
          dispatch({
            type: "SET_REQUEST_PARAMS",
            payload: state.requestParams,
          });
          dispatch({
            type: "SET_SELECTED_METHOD",
            payload: state.requestParams.method,
          });
          dispatch({ type: "ADD_TO_HISTORY", payload: state.requestParams });
        } catch (error) {
          console.error("Error calling API:", error);
        } finally {
          dispatch({ type: "SET_LOADING", payload: false });
        }
      };

      callApi();
    }
  }, [state.requestParams]);

  return (
    <React.Fragment>
      <Header />
      <Form
        handleApiCall={(requestData) =>
          dispatch({ type: "SET_REQUEST_PARAMS", payload: requestData })
        }
        loading={state.loading}
      />
      <Results
        data={state.data}
        loading={state.loading}
        requestParams={state.requestParams}
        selectedMethod={state.selectedMethod}
      />
      <History history={state.history} dispatch={dispatch} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
