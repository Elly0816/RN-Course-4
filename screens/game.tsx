import HigherOrLower from '@/components/higherOrLower';
import ListItem from '@/components/listItem';
import NumberDisplay from '@/components/numberDisplay';
import Title from '@/components/title';
import { screenType } from '@/types';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { StyleSheet, FlatList, View, Alert, ViewStyle } from 'react-native';

type GamePropsType = {
  playersNumber: number;
  setScreen: React.Dispatch<React.SetStateAction<screenType>>;
  computerGuesses: number[];
  setComputerGuesses: React.Dispatch<React.SetStateAction<number[]>>;
};
export default function Game({
  playersNumber,
  setScreen,
  computerGuesses,
  setComputerGuesses,
}: GamePropsType): ReactElement {
  const [computerGuess, setComputerGuess] = useState<number>();
  const [maxLimit, setMaxLimit] = useState<number>(99);
  const [minLimit, setMinLimit] = useState<number>(1);
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    randomGuess();
    listRef.current?.scrollToEnd();
  }, [maxLimit, minLimit]);

  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (computerGuess === playersNumber) {
      setDisable(true);
      timer = setTimeout(() => {
        setScreen('gameOver');
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [computerGuess, playersNumber]);

  function guessText(number: number): string {
    if (number === 1) {
      return `1 guess`;
    }
    return `${number} guesses`;
  }

  function randomGuess(): void {
    const range = maxLimit - minLimit;
    const guess = Math.round(Math.random() * range) + minLimit;
    setComputerGuess(guess);
  }

  function higherButtonHandler(): void {
    if (playersNumber < (computerGuess as number)) {
      Alert.alert("Don't cheat");
      return;
    }
    setMinLimit((computerGuess as number) + 1);
    setComputerGuesses((guesses) => [
      ...(guesses as number[]),
      computerGuess as number,
    ]);

    return;
  }

  function lowerButtonHandler(): void {
    if (playersNumber > (computerGuess as number)) {
      Alert.alert("Don't cheat");
      return;
    }
    setMaxLimit((computerGuess as number) - 1);
    setComputerGuesses((guesses) => [
      ...(guesses as number[]),
      computerGuess as number,
    ]);
    return;
  }

  return (
    <View style={styles.container}>
      <Title title="Opponent's Guess" style={styles.title} />
      <NumberDisplay numberGuessed={computerGuess as number} />
      <HigherOrLower
        higherButtonHandler={higherButtonHandler}
        lowerButtonHandler={lowerButtonHandler}
        disabled={disable}
      />

      <View style={styles.list}>
        <FlatList
          ref={listRef}
          data={computerGuesses}
          renderItem={({ item, index }) => (
            <ListItem guess={item} key={index} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
    width: '100%',
  } as ViewStyle,
  title: {
    alignItems: 'center',
  } as ViewStyle,
  list: {
    height: 250,
    width: '80%',
  } as ViewStyle,
});
