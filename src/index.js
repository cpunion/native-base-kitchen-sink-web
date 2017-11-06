import RN from 'react-native-web'
import Platform from 'react-native-web/dist/apis/Platform'
import Dimensions from 'react-native-web/dist/apis/Dimensions'
import { Linking } from 'react-navigation/lib/PlatformHelpers'

RN.DeviceInfo = {}

const dimensions = {
  window: {
    width: 325,
    height: 576
  }
}

const listeners = {}

Object.assign(Dimensions, {
  get(dimension) {
    return dimensions[dimension]
  },

  set(newDimensions) {
    Object.assign(dimensions, newDimensions)
  },

  emit(type, ...args) {
    if (Array.isArray(listeners[type])) {
      listeners[type].forEach(handler => handler(...args))
    }
  },

  addEventListener(type, handler) {
    listeners[type] = listeners[type] || []
    listeners[type].push(handler)
  },

  removeEventListener(type, handler) {
    if (Array.isArray(listeners[type])) {
      listeners[type] = listeners[type].filter(_handler => _handler !== handler)
    }
  },

  // TODO: update dimensions when orientation or size changed
  _update() {}
})

Linking.getInitialURL = () => {
  return new Promise(resolve => {
    resolve('')
  })
}

Platform.OS = 'ios'

const oldError = console.error.bind(console)

console.error = function(arg, ...args) {
  if (
    typeof arg === 'string' &&
    (arg.startsWith('Warning: React does not recognize the') ||
      arg.startsWith('Warning: Unknown event handler property') ||
      arg.startsWith('Warning: Received `true` for non-boolean attribute `accessible`') ||
      arg.startsWith('Warning: Stateless function components cannot') ||
      arg.startsWith('Warning: Failed prop type: Invalid props.style key `pointerEvents` supplied to `View`.') ||
      arg.match(/Warning: Received `.*` for non-.* attribute `.*`\. If this is expected, cast the value to a .*\./))
  ) {
    return
  }
  oldError(arg, ...args)
}

require('./main')
