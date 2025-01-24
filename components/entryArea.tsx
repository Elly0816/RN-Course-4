import { ReactElement } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  Text,
  TextStyle,
  TextInput,
} from 'react-native';
import Button from './button';

type EntryPropsType = {
  userGuess: number;
  handleUserInput: (input: number) => void;
  confirmButtonHandler: () => void;
  cancelButtonHandler: () => void;
};
export default function Entry({
  userGuess,
  handleUserInput,
  confirmButtonHandler,
  cancelButtonHandler,
}: EntryPropsType): ReactElement {
  function onChangeText(text: string) {
    const number = parseInt(text);
    if (!isNaN(number)) {
      handleUserInput(number);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter a number</Text>
      <TextInput
        inputMode="numeric"
        style={styles.textInput}
        placeholder=""
        value={userGuess?.toString()}
        onChangeText={(text) => {
          onChangeText(text);
        }}
        keyboardType="number-pad"
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            console.log('Cancel was pressed');
            cancelButtonHandler();
          }}
          title="Cancel"
          style={{ ...styles.cancelButton, ...styles.button }}
          textStyle={styles.buttonText}
        />
        <Button
          textStyle={styles.buttonText}
          style={{ ...styles.confirmButton, ...styles.button }}
          onPress={() => {
            console.log('Confirm was pressed');
            confirmButtonHandler();
          }}
          title="Confirm"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9911ff',
    width: '100%',
    // marginBottom: 500,
    // marginTop: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    // flex: 5,
    height: 250,
  } as ViewStyle,
  text: {
    color: '#ffff22',
    fontSize: 25,
    fontWeight: 'bold',
  } as TextStyle,
  textInput: {
    borderBottomWidth: 5,
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: '#000000',
    width: 60,
    textAlign: 'center',
  } as TextStyle,
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  } as ViewStyle,
  cancelButton: {
    backgroundColor: '#ff2233',
  } as ViewStyle,
  confirmButton: {
    backgroundColor: '#22ff33',
  } as ViewStyle,
  button: {
    width: 130,
    height: 40,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  } as ViewStyle,
  buttonText: {
    fontWeight: 'bold',
    color: '#000000',
  } as TextStyle,
});
