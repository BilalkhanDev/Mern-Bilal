import React from 'react';
//import {BrowserRouter as Router} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Style.css';

import Quiz from './Quiz';

const root=createRoot(document.getElementById('root'))
root.render(
  <>
  <Quiz/>
  </>
)