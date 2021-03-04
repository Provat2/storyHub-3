import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStory from './screens/WriteStory'
import ReadStory from './screens/ReadStory'

export default class  App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header centerComponent={{ text: 'Story Hub', style: { color: 'white', fontSize: 30   } }}/>
          <AppContainer/>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow'
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    WriteScreen: {screen: WriteStory},
    ReadScreen: {screen: ReadStory}
  },
  {
    defaultNavigationOptions: ({navigation})=> ({
      tabBarIcon: ({})=>{
        const routeName = navigation.state.routeName;
        console.log(routeName)
          if (routeName === "WriteScreen"){
            return( <Image source={require("./assets/write.png")} style={{
              width: 20,
              height: 20
            }}/>);
          }
          else if(routeName === "ReadScreen"){
            return( <Image source={require('./assets/read.png')} style={{ width: 20, height: 20}}/> );
        }
      }
    })  
  }
)

const AppContainer = createAppContainer(TabNavigator);