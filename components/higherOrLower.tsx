import { ReactElement } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from './button';
import { COLORS } from '@/constants/Colors';

type HigherOrLowerProps = {
  higherButtonHandler: () => void;
  lowerButtonHandler: () => void;
  disabled: boolean;
};
export default function HigherOrLower({
  higherButtonHandler,
  lowerButtonHandler,
  disabled,
}: HigherOrLowerProps): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Higher Or Lower</Text>
      <View style={styles.buttonContainer}>
        <Button
          // title="➖"
          onPress={lowerButtonHandler}
          style={styles.button}
          textStyle={styles.buttonText}
          disabled={disabled}
          rippleColor="#cc2cbb"
        >
          <Ionicons
            name="remove"
            size={24}
            style={styles.icon}
            color={COLORS.WHITE}
          />
        </Button>
        <Button
          // title="➕"
          onPress={higherButtonHandler}
          style={styles.button}
          textStyle={styles.buttonText}
          disabled={disabled}
          rippleColor="#cc2cbb"
        >
          <Ionicons
            name="add"
            size={24}
            style={styles.icon}
            color={COLORS.WHITE}
          />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PURPLE,
    height: 150,
    width: '100%',
    borderRadius: 12,
    justifyContent: 'space-around',
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
    color: COLORS.YELLOW,
  } as TextStyle,
  button: {
    backgroundColor: COLORS.LIGHTPURPLE,
    width: 130,
    height: 40,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  } as ViewStyle,
  buttonText: {} as TextStyle,
  icon: { fontWeight: 'bold' } as TextStyle,
});
