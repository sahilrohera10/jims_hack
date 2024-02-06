import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pay3 from './src/screens/pay3';
import SuccessfulScreen from './src/screens/sucessfullScreen';
import AnalyticsScreen from './src/screens/analyticsScreen';
import DialPanel from './src/screens/Pay2';
import PaymentGateway from './src/screens/Pay2';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>hello</Text> */}
      <StatusBar style="auto" />
      {/* <Pay3 /> */}
          {/* <SuccessfulScreen /> */}
          <AnalyticsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
