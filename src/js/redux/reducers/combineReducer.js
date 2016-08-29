import React from 'react';
import { combineReducers } from 'redux';

const reducers = (state= {
  search_result: []
  }, action) => {
  switch(action.type) {
    case "UPDATE": {
      state = {...state, search_result: action.payload}
    }
  }
  return state;
};

export default reducers;
