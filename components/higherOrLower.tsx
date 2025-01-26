import { ReactElement } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import Button from './button';

type HigherOrLowerProps = {
  higherButtonHandler: () => void;
  lowerButtonHandler: () => void;
};
export default function HigherOrLower({
  higherButtonHandler,
  lowerButtonHandler,
}: HigherOrLowerProps): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Higher Or Lower</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="➖"
          onPress={lowerButtonHandler}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <Button
          title="➕"
          onPress={higherButtonHandler}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff1fee',
    height: 150,
    width: '100%',
    borderRadius: 12,
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  } as ViewStyle,
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  text: {
    fontSize: 25,
  } as TextStyle,
  button: {
    backgroundColor: '#d5ea1a',
    width: 130,
    height: 40,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  } as ViewStyle,
  buttonText: {} as TextStyle,
});
