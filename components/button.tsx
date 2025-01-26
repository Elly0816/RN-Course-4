import { ReactElement } from 'react';
import { Pressable, Text, TextStyle, ViewStyle } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

export default function Button({
  title,
  onPress,
  style,
  textStyle,
  disabled,
}: CustomButtonProps): ReactElement {
  return (
    <Pressable style={style} onPress={onPress} disabled={disabled}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
