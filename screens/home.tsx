import Entry from '@/components/entryArea';
import Title from '@/components/title';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

type HomeScreenProps = {
  userNumber: number | undefined | string;
  confirmButtonHandler: () => void;
  cancelButtonHandler: () => void;
  handleUserInput: (input: string) => void;
};

function isAndroid() {
  return Platform.OS === 'android' ? true : false;
}

export default function Home({
  userNumber,
  confirmButtonHandler,
  cancelButtonHandler,
  handleUserInput,
}: HomeScreenProps) {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  const marginTop = windowHeight < 380 ? 5 : 10;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <KeyboardAvoidingView
        // keyboardVerticalOffset={25}
        behavior={isAndroid() ? undefined : 'padding'}
        style={styles.screen}
      >
        <View style={[styles.container, { marginTop: marginTop }]}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  } as ViewStyle,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    // marginTop: deviceHeight < 200 ? 0 : 10,
  } as ViewStyle,
  title: {} as ViewStyle,
  titleText: { fontFamily: 'OpenSansBold' } as TextStyle,
});
