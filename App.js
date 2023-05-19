import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Header} from '@rneui/themed';
import homeScreen from './screens/homeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <homeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6eadf",
  },
});
