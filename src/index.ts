// import './global.css';
import './bootstrap.min.css';
import './global.css';


import {App} from './components/app';


console.log('Starting  App');

const app: App = new App();


window.addEventListener('error', function(e) {
    console.log('my router total Error !!! ', e);
}, true);