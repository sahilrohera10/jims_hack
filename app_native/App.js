import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DialPanel from './src/screens/Pay2';
import PaymentGateway from './src/screens/Pay2';

export default function App() {
  return (
    <View style={styles.container}>
      <PaymentGateway/>
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
