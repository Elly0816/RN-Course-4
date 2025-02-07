import { ReactElement } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  Text,
  TextStyle,
  TextInput,
  Dimensions,
  useWindowDimensions,
  Platform,
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
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  function onChangeText(text: string) {
    handleUserInput(text);
  }

  const dynamicContainer = {
    height: windowHeight < 380 ? 150 : 250,
    marginTop: windowHeight < 380 ? 5 : 10,
    padding: windowHeight < 380 ? 5 : 20,
  } as ViewStyle;

  const dynamicTextInput = {
    merginVertical: windowHeight < 380 ? 0 : 8,
  } as TextStyle;

  const dynamicButtonContainer = {
    marginTop: windowHeight < 380 ? 'auto' : 40,
  } as ViewStyle;

  return (
    <View
      style={[
        styles.container,
        {
          height: dynamicContainer.height,
          marginTop: dynamicContainer.marginTop,
          padding: dynamicContainer.padding,
        },
      ]}
    >
      <Text style={styles.text}>Enter a number</Text>
      <TextInput
        maxLength={2}
        inputMode="numeric"
        style={[styles.textInput, dynamicTextInput]}
        placeholder=""
        // value={userNumber >= 0 ? String(userNumber) : ''}
        value={userNumber}
        onChangeText={(text) => {
          onChangeText(text);
        }}
        keyboardType="number-pad"
      />
      <View style={[styles.buttonContainer, dynamicButtonContainer]}>
        <Button
          onPress={() => {
            console.log('Reset was pressed');
            cancelButtonHandler();
          }}
          title="Reset"
          style={styles.button}
        />
        <Button
          onPress={() => {
            console.log('Confirm was pressed');
            confirmButtonHandler();
          }}
          title="Confirm"
          style={styles.button}
        />
      </View>
    </View>
  );
}

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PURPLE,
    ...Platform.select({
      android: {
        elevation: 20,
      },
      ios: {
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 3, height: 2 },
        shadowRadius: 15,
        shadowOpacity: 0.25,
      },
    }),
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    height: deviceHeight < 300 ? 200 : 250,
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
    // marginVertical: 8,
    color: COLORS.YELLOW,
    textAlign: 'center',
  } as TextStyle,
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // marginTop: deviceHeight < 400 ? 20 : 30,
  } as ViewStyle,
  button: {
    minWidth: '45%',
  } as ViewStyle,
});
