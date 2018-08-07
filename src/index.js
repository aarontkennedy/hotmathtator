// eslint-disable-next-line
import $ from 'jquery';
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faTimes, faDivide, faDice} from '@fortawesome/free-solid-svg-icons';
library.add(faPlus, faMinus, faTimes, faDivide, faDice);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
