import React from 'react';
import ReactDOM from 'react-dom';
import { MetaMaskProvider } from 'metamask-react';
import App from './App';

ReactDOM.render(<MetaMaskProvider>
    <App />
</MetaMaskProvider>, document.getElementById('root'));
