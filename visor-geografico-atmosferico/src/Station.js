import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';

const foo = () => {
  console.log('pressed!');
}

export default function Station({}) {
  return (
    <Pressable onPressIn={foo} style={styles.container}>
      <View style={{width: 50, height: 75, alignItems: 'center'}}>
        <Text>13%</Text>
        <Image style={styles.image} source='https://i.ibb.co/dW5njCD/arrow.png'
            contentFit="cover"/>
        <View style={styles.view}>
          {/* <div style={styles.arrow}><i style={{...styles.arrowRotate}} ></i></div> */}
          <span style={styles.temperatureCircle}></span>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatureCircle: {
    height: 25,
    width: 25,
    backgroundColor: 'orange',
    borderRadius: '50%',
    display: 'inline-block'
  },
  // arrow: {
  //   border: 'solid black',
  //   borderWidth: '0 3px 3px 0',
  //   display: 'inline-block',
  //   padding: '3px',
  // },
  arrowRotate: {
    transform: [{ rotate: '25deg'}],
  },
  image: {
    flex: 1,
    width: '50%',
    transform: [{ rotate: '25deg'}],
    height: '25%',
  },
});
