import Entry from '@/components/entryArea';
import Title from '@/components/title';
import { View, StyleSheet, ViewStyle } from 'react-native';

type HomeScreenProps = {
  userNumber: number | undefined;
  confirmButtonHandler: () => void;
  cancelButtonHandler: () => void;
  handleUserInput: (input: number) => void;
};

export default function Home({
  userNumber,
  confirmButtonHandler,
  cancelButtonHandler,
  handleUserInput,
}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Title title="Guess My Number" />
      <Entry
        userNumber={userNumber as number}
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
