import Button from '@/components/button';
import Title from '@/components/title';
import { screenType } from '@/types';
import { ReactElement } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

type EndGamePropsType = {
  numberOfGuesses: number;
  setScreen: React.Dispatch<React.SetStateAction<screenType>>;
  guessedNumber: number;
  setComputerGuesses: React.Dispatch<React.SetStateAction<number[]>>;
};
export default function EndGame({
  numberOfGuesses,
  setScreen,
  guessedNumber,
  setComputerGuesses,
}: EndGamePropsType): ReactElement {
  return (
    <View style={styles.container}>
      <Title title="Game Over!" />
      {/* <Image source={require('')} /> */}
      <Text style={styles.mainText}>
        Your phone needed <Text style={styles.number}>{numberOfGuesses}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.number}>{guessedNumber}</Text>.
      </Text>
      <Button
        onPress={() => {
          setScreen('home');
          setComputerGuesses([]);
        }}
        title="Go Home"
        style={styles.button}
        textStyle={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  } as ViewStyle,
  number: { color: '#ffaa22', fontSize: 30, fontWeight: 'bold' } as TextStyle,
  button: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#ff33f2',
  } as ViewStyle,
  text: {
    color: '#ffffff',
  } as TextStyle,
  mainText: {
    // color: '#ffffff',
    fontSize: 18,
  } as TextStyle,
});
