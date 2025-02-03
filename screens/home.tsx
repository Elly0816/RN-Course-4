import Entry from '@/components/entryArea';
import Title from '@/components/title';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type HomeScreenProps = {
  userNumber: number | undefined | string;
  confirmButtonHandler: () => void;
  cancelButtonHandler: () => void;
  handleUserInput: (input: string) => void;
};

export default function Home({
  userNumber,
  confirmButtonHandler,
  cancelButtonHandler,
  handleUserInput,
}: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Title
        textStyle={styles.titleText}
        title="Guess My Number"
        style={styles.title}
      />
      <Entry
        userNumber={userNumber as string}
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  } as ViewStyle,
  title: {
    width: '100%',
  } as ViewStyle,
  titleText: { fontFamily: 'OpenSansBold' } as TextStyle,
});
