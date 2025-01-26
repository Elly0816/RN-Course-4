import { ReactElement } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

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
      <Text style={styles.text}>
        {index + 1}
        {')'}
      </Text>
      <Text style={styles.text}>{guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#aadd31',
    borderWidth: 3,
    padding: 15,
    paddingRight: 120,
    // marginHorizontal: 100,
    borderRadius: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  } as ViewStyle,
  text: {
    fontWeight: 'condensedBold',
    fontSize: 20,
    color: '#222222',
  } as TextStyle,
});
