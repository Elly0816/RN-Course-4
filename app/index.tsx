import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { Stack } from 'expo-router';
import { useState } from 'react';
import Home from '@/screens/home';
import { Stack } from 'expo-router';
import Game from '@/screens/game';

export default function Index() {
  const [userNumber, setUserNumber] = useState<number>();
  const [numberToGuess, setNumberToGuess] = useState<number>();
  const [screen, setScreen] = useState<'home' | 'game'>('home');
  const [computerGuesses, setComputerGuesses] = useState<string[]>([]);

  function handleUserInput(input: number): void {
    if (typeof input === 'string') return;

    setUserNumber(Number(input));
  }

  function confirmButtonHandler(): void {
    if (userNumber) {
      if (userNumber > 0 && userNumber < 100) {
        setNumberToGuess(userNumber);
        setScreen('game');
      } else {
        Alert.alert('Make sure your number is between 1 and 99 inclusive');
      }
    }
  }

  function cancelButtonHandler(): void {
    setNumberToGuess(undefined);
    setUserNumber(undefined);
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
            userNumber={userNumber}
          />
        ) : (
          <Game opponentsGuess={numberToGuess as number} />
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
