import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // Import applyMiddleware
import {thunk} from 'redux-thunk'; // Import thunk middleware
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { reducers } from './reducers'; // Import your root reducer
import App from './App';
import './index.css';



// Create the Redux store with thunk middleware
const store = createStore(reducers, applyMiddleware(thunk)); // Apply middleware

// Create a theme instance
const theme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`, //
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
  },
  
});

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <Provider store={store}> 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);