import { ReactElement } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export default function Title(): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess My Number</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 90,
    borderWidth: 5,
    borderColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  } as ViewStyle,
  text: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 25,
  } as TextStyle,
});
