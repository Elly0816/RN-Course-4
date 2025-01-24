import Entry from '@/components/entryArea';
import Title from '@/components/title';
import { View, StatusBar, StyleSheet, ViewStyle } from 'react-native';

type HomePropsType = {
  userNumber: number;
  confirmButtonHandler: () => void;
  cancelButtonHandler: () => void;
  handleUserInput: (input: number) => void;
};
export default function Home({
  userNumber,
  confirmButtonHandler,
  cancelButtonHandler,
  handleUserInput,
}: HomePropsType) {
  return (
    <View style={styles.container}>
      <Title />
      <Entry
        userGuess={userNumber as number}
        confirmButtonHandler={confirmButtonHandler}
        handleUserInput={handleUserInput}
        cancelButtonHandler={cancelButtonHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaaaaa',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  } as ViewStyle,
});
