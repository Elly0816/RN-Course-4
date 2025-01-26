import HigherOrLower from '@/components/higherOrLower';
import NumberDisplay from '@/components/numberDisplay';
import Title from '@/components/title';
import { ReactElement, useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

type GamePropsType = {
  opponentsGuess: number;
};
export default function Game({ opponentsGuess }: GamePropsType): ReactElement {
  const [computerGuess, setComputerGuess] = useState<number>();

  function higherButtonHandler() {
    return;
  }

  function lowerButtonHandler() {
    return;
  }

  return (
    <View style={styles.container}>
      <Title title="Opponent's Guess" style={styles.title} />
      <NumberDisplay numberGuessed={0} />
      <HigherOrLower
        higherButtonHandler={higherButtonHandler}
        lowerButtonHandler={lowerButtonHandler}
      />
      <FlatList data={null} renderItem={null} />
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
  },
  title: {
    alignItems: 'center',
  },
});
