import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import DecksList from './components/DecksList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons'
import { setLocalNotification } from './utils/helper'

const Tabs = createAppContainer(
  createBottomTabNavigator({
    DecksList: {
      screen: DecksList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-list-box" size={30} color={tintColor} />
        ),
      },
    },
    AddDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle" size={30} color={tintColor} />
        ),
      },
    },
  },{
  tabBarOptions:{
    activeTintColor: '#7b68ee',
  }
  })
);
export const MainNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Tabs,
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        headerTintColor: '#000',
      },
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: '#000',
      },
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: '#000',
      },
    },
  })
);

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  }
})
