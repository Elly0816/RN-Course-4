import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View, ViewStyle } from 'react-native';
import Title from '@/components/title';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import Entry from '@/components/entryArea';
import { useState } from 'react';
import Home from './home';

export default function Index() {
  const [userNumber, setUserNumber] = useState<number>();
  const [numberToGuess, setNumberToGuess] = useState<number>();

  function handleUserInput(input: number): void {
    if (typeof input === 'string') return;

    setUserNumber(Number(input));
  }

  function confirmButtonHandler(): void {
    if (userNumber) {
      if (userNumber > 0 && userNumber < 100) {
        setNumberToGuess(userNumber);
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
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safeArea}>
        <Home
          cancelButtonHandler={cancelButtonHandler}
          confirmButtonHandler={confirmButtonHandler}
          handleUserInput={handleUserInput}
          userNumber={userNumber as number}
        />
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
