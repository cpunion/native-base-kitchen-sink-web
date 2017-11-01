import Platform from 'react-native-web/dist/apis/Platform'
import { Linking } from 'react-navigation/lib/PlatformHelpers'

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
