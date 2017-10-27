import React from "react";
import { StyleSheet, View } from 'react-native-web';
import App from "./js/App";
import './font.css'

export default class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {
    return (
      <View style={styles.mobileFrame}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mobileFrame: {
    width: 327,
    height: 578,
    margin: 30,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden'
  }
})
