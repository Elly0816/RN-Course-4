import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  StyleSheet,
  ViewStyle,
  ImageBackground,
  ImageStyle,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ReactElement, useEffect, useState } from 'react';
import Home from '@/screens/home';
import { Stack } from 'expo-router';
import Game from '@/screens/game';
import EndGame from '@/screens/endgame';
import { screenType } from '@/types';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@/constants/Colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Index(): ReactElement {
  const [enteredNumber, setEnteredNumber] = useState<string>();
  const [numberToGuess, setNumberToGuess] = useState<number>();
  const [screen, setScreen] = useState<screenType>('home');
  const [computerGuesses, setComputerGuesses] = useState<number[]>([]);

  const [loaded, error] = useFonts({
    OpenSansRegular: require('@/assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('@/assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null as any;
  }

  function handleUserInput(input: string): void {
    setEnteredNumber(input);
  }

  function confirmButtonHandler(): void {
    console.log(String(enteredNumber));
    if (enteredNumber) {
      if (parseInt(enteredNumber) > 0 && parseInt(enteredNumber) < 100) {
        setNumberToGuess(parseInt(enteredNumber));
        setEnteredNumber(undefined);
        setScreen('game');
      } else {
        Alert.alert('Invalid Input', 'Pick a number from 1 to 99', [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: () => {
              setEnteredNumber(undefined);
            },
          },
        ]);
      }
    }
  }

  function cancelButtonHandler(): void {
    setNumberToGuess(undefined);
    setEnteredNumber(undefined);
  }

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={[COLORS.PURPLE, COLORS.YELLOW]}
        style={styles.safeArea}
      >
        <ImageBackground
          style={styles.safeArea}
          imageStyle={styles.image}
          resizeMode="cover"
          source={require('../assets/images/background.png')}
        >
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
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  } as ViewStyle,
  image: {
    opacity: 0.15,
  } as ImageStyle,
});
