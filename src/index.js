import React from 'react';
import {createRoot} from 'react-dom/client';
import '@progress/kendo-theme-default/dist/all.css';
import App from './components/App';

const container = document.getElementById('root');
const root=createRoot(container);
root.render(<App/>);
