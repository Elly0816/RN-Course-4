import { COLORS } from '@/constants/Colors';
import { ReactElement } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Platform,
} from 'react-native';

type ListItemPropsType = {
  guess: number;
  index: number;
};
export default function ListItem({
  guess,
  index,
}: ListItemPropsType): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}># {index + 1}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.YELLOW,
    borderWidth: 3,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

    ...Platform.select({
      android: {
        elevation: 8,
      },
      ios: {
        shadowOffset: { height: 8, width: 0 },
        shadowColor: COLORS.BLACK,
        shadowRadius: 3,
        shadowOpacity: 0.25,
      },
    }),
  } as ViewStyle,
  text: {
    fontWeight: 'condensedBold',
    fontSize: 20,
    color: COLORS.BLACK,
  } as TextStyle,
});
