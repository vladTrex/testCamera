/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Camera from 'react-native-openalpr';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.camera = null;
    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
      },
      plate: 'Scan a plate',
    };
  }

  onPlateRecognized = ({ plate, confidence }) => {
    if (confidence > 90) {
      this.setState({
        plate,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={this.state.camera.aspect}
            captureQuality={Camera.constants.CaptureQuality.medium}
            country="us"
            onPlateRecognized={this.onPlateRecognized}
            plateOutlineColor="#ff0000"
            showPlateOutline
            torchMode={Camera.constants.TorchMode.off}
            touchToFocus
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.state.plate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textContainer: {
    position: 'absolute',
    top: 100,
    left: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  preview: {
    width: '100%',
    height: 400,
  },
});
