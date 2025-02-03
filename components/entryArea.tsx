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
import { COLORS } from '@/constants/Colors';

type EntryPropsType = {
  userNumber: string;
  handleUserInput: (input: string) => void;
  confirmButtonHandler: () => void;
  cancelButtonHandler: () => void;
};
export default function Entry({
  userNumber,
  handleUserInput,
  confirmButtonHandler,
  cancelButtonHandler,
}: EntryPropsType): ReactElement {
  function onChangeText(text: string) {
    handleUserInput(text);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter a number</Text>
      <TextInput
        maxLength={2}
        inputMode="numeric"
        style={styles.textInput}
        placeholder=""
        // value={userNumber >= 0 ? String(userNumber) : ''}
        value={userNumber}
        onChangeText={(text) => {
          onChangeText(text);
        }}
        keyboardType="number-pad"
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            console.log('Reset was pressed');
            cancelButtonHandler();
          }}
          title="Reset"
        />
        <Button
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
    backgroundColor: COLORS.PURPLE,
    elevation: 20,
    shadowColor: COLORS.BLACK,
    shadowOffset: { width: 3, height: 2 },
    shadowRadius: 15,
    shadowOpacity: 0.25,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    // height: 250,
  } as ViewStyle,
  text: {
    color: COLORS.YELLOW,
    fontSize: 25,
    fontFamily: 'OpenSansRegular',
  } as TextStyle,
  textInput: {
    borderBottomWidth: 2,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: COLORS.YELLOW,
    width: 60,
    height: 60,
    marginVertical: 8,
    color: COLORS.YELLOW,
    textAlign: 'center',
  } as TextStyle,
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  } as ViewStyle,
});
