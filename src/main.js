import React from "react";
import { StyleSheet, View, AppRegistry } from 'react-native-web';
import './font.css'

const ReactNative = require('react-native')
const Modal = require('./Modal')

ReactNative.Modal = Modal

require('./App')
