import React from 'react'
import ReactDOM from 'react-dom/client'
import Togicon from './toggleicon/togicon';

const headerDiv = document.getElementById('themeIcon');
const toggIconJSX =  
  <React.StrictMode>
    <Togicon />
  </React.StrictMode>

ReactDOM.createRoot(headerDiv).render(toggIconJSX)


