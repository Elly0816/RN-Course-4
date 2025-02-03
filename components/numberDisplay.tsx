import { COLORS } from '@/constants/Colors';
import { ReactElement } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

type NumberDisplayPropsType = {
  numberGuessed: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
};
export default function NumberDisplay({
  numberGuessed,
  style,
  textStyle,
}: NumberDisplayPropsType): ReactElement {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={{ ...styles.text, ...textStyle }}>{numberGuessed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: COLORS.BRIGHTYELLOW,
    width: '80%',
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.BRIGHTYELLOW,
  } as TextStyle,
});
