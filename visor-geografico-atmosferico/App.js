import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const urlPerStation = {
  'vilaflor': 'api/action/package_show?id=7663bcae-d04c-4680-9eca-612c2eedd023',

};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <StatusBar style="auto" />
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
