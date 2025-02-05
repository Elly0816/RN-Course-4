import { COLORS } from '@/constants/Colors';
import { ReactElement } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Dimensions,
} from 'react-native';

type NumberDisplayPropsType = {
  numberGuessed: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

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
    // width: '80%',
    // height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: deviceWidth < 380 ? 12 : 24,
    marginHorizontal: deviceWidth < 380 ? 12 : 24,
    marginVertical: deviceHeight < 380 ? 12 : 24,
  } as ViewStyle,
  text: {
    fontSize: deviceWidth < 380 ? 30 : 46,
    fontWeight: 'bold',
    color: COLORS.BRIGHTYELLOW,
  } as TextStyle,
});
