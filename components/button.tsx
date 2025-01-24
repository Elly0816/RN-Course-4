import { ReactElement } from 'react';
import { Pressable, Text, TextStyle, ViewStyle } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  title,
  onPress,
  style,
  textStyle,
}: CustomButtonProps): ReactElement {
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
