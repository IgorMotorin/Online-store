// import './global.css';
import './nouislider.css';
import './bootstrap.min.css';
import './global.css';

// import '../public/_redirects'


import {App} from './components/app';


console.log('Starting  App');

const app: App = new App();


window.addEventListener('error', function(e) {
    console.log('my router total Error !!! ', e);
}, true);