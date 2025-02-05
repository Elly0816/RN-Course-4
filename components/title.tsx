import { COLORS } from '@/constants/Colors';
import { ReactElement } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type titlePropsType = {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};
export default function Title({
  title,
  style,
  textStyle,
}: titlePropsType): ReactElement {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 70,
    borderWidth: 5,
    borderColor: COLORS.WHITE,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  text: {
    // fontWeight: 'bold',
    color: COLORS.WHITE,
    fontSize: 25,
    maxWidth: '80%',
  } as TextStyle,
});
