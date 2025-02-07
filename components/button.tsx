import { COLORS } from '@/constants/Colors';
import { ReactElement } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Platform,
} from 'react-native';

type CustomButtonPropsProto = {
  title?: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  rippleColor?: string;
  children?: ReactElement;
};

type titleNoChild = CustomButtonPropsProto & {
  title: string;
  children?: never;
};

type childNoTitle = CustomButtonPropsProto & {
  children: ReactElement;
  title?: never;
};

type CustomButtonProps = titleNoChild | childNoTitle;

export default function Button({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  rippleColor,
  children,
}: CustomButtonProps): ReactElement {
  let toRender: string | ReactElement = title
    ? title
    : children
    ? children
    : '';

  return (
    <View style={[styles.outerContainer]}>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          style,
          pressed && {
            opacity: 0.5,
            backgroundColor: rippleColor ? rippleColor : '',
          },
        ]}
        android_ripple={{ color: rippleColor ? rippleColor : COLORS.RIPPLE }}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.text, textStyle]}>{toRender}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 25,
    margin: 4,
    overflow: 'hidden',
    elevation: 8,
  } as ViewStyle,
  container: {
    // borderRadius: 25,
    backgroundColor: COLORS.LIGHTPURPLE,
    width: '100%',
    // minWidth: '50%',
    height: 40,
    padding: 10,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.BLACK,
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  } as ViewStyle,
  text: { color: COLORS.WHITE, fontWeight: 'bold' } as TextStyle,
});
