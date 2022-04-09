import React from "react";
import reactDom from "react-dom";
import App from "./App";

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

function Index() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
}

reactDom.render(<Index />, document.getElementById('root'));
