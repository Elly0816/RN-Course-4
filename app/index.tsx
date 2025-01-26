import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { Stack } from 'expo-router';
import { useState } from 'react';
import Home from '@/screens/home';
import { Stack } from 'expo-router';
import Game from '@/screens/game';
import EndGame from '@/screens/endgame';
import { screenType } from '@/types';

export default function Index() {
  const [enteredNumber, setEnteredNumber] = useState<number | undefined>(
    undefined
  );
  const [numberToGuess, setNumberToGuess] = useState<number>();
  const [screen, setScreen] = useState<screenType>('home');
  const [computerGuesses, setComputerGuesses] = useState<number[]>([]);

  function handleUserInput(input: number): void {
    if (typeof input === 'string') return;

    setEnteredNumber(input);
  }

  function confirmButtonHandler(): void {
    if (enteredNumber) {
      if (enteredNumber > 0 && enteredNumber < 100) {
        setNumberToGuess(enteredNumber);
        setEnteredNumber(undefined);
        setScreen('game');
      } else {
        Alert.alert('Make sure your number is between 1 and 99 inclusive');
      }
    }
  }

  function cancelButtonHandler(): void {
    setNumberToGuess(undefined);
    setEnteredNumber(undefined);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Stack.Screen options={{ headerShown: false }} />
        {screen === 'home' ? (
          <Home
            cancelButtonHandler={cancelButtonHandler}
            confirmButtonHandler={confirmButtonHandler}
            handleUserInput={handleUserInput}
            userNumber={enteredNumber}
          />
        ) : screen === 'game' ? (
          <Game
            playersNumber={numberToGuess as number}
            setScreen={setScreen}
            computerGuesses={computerGuesses}
            setComputerGuesses={setComputerGuesses}
          />
        ) : (
          <EndGame
            guessedNumber={numberToGuess as number}
            numberOfGuesses={computerGuesses.length}
            setScreen={setScreen}
            setComputerGuesses={setComputerGuesses}
          />
        )}
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  } as ViewStyle,
  // container: {
  //   flex: 1,
  //   backgroundColor: '#aaaaaa',
  //   alignItems: 'center',
  //   justifyContent: 'space-evenly',
  //   padding: 20,
  // } as ViewStyle,
});
