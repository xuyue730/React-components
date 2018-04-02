import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import ThemeSwitch from "./ThemeSwitch";
import "./index.css";
// import App from './App';
import registerServiceWorker from "./registerServiceWorker";

class Index extends Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    console.log(PropTypes);

    return { store };
  }

  render() {
    return (
      <div>
        <ThemeSwitch />
      </div>
    );
  }
}

function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  dispatch({}); // 初始化 state
  return { getState, dispatch, subscribe };
}

const themeReducer = (state, action) => {
  
  if (!state)
    return {
      themeColor: "red"
    };
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
};

const store = createStore(themeReducer);

ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
