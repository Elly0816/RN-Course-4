import Button from '@/components/button';
import Title from '@/components/title';
import { COLORS } from '@/constants/Colors';
import { screenType } from '@/types';
import { ReactElement } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native';

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
      <Title
        textStyle={styles.titleText}
        style={styles.title}
        title="Game Over!"
      />
      <Image
        style={styles.image}
        source={require('@/assets/images/success.png')}
      />
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
        title="Start New Game"
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
  number: {
    color: COLORS.LIGHTPURPLE,
    fontSize: 30,
    fontFamily: 'OpenSansBold',
  } as TextStyle,
  button: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.BRIGHTYELLOW,
    paddingHorizontal: 30,
    // elevation: 20,
  } as ViewStyle,
  text: {
    color: COLORS.BLACK,
  } as TextStyle,
  mainText: {
    // color: '#ffffff',
    color: COLORS.WHITE,
    fontFamily: 'OpenSansRegular',
    fontSize: 20,
  } as TextStyle,
  title: {
    width: '100%',
  } as ViewStyle,
  titleText: {
    fontFamily: 'OpenSansBold',
  } as TextStyle,
  image: {
    resizeMode: 'stretch',
    height: 220,
    aspectRatio: 1,
    borderRadius: 200,
    borderColor: COLORS.BLACK,
    borderWidth: 2,
  } as ImageStyle,
});
