import React from 'react'
import { render } from 'react-dom'
import { AppRegistry } from 'react-native';
import App from './App';
render(<App />, document.getElementById('root'))
AppRegistry.registerComponent('NativebaseKitchenSink', () => App);
