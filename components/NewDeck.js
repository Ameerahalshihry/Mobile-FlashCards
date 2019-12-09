import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';
import { TextInput, Button } from 'react-native-paper';
import {addDeck,
      getAllDecks, 
      clearLocalNotification,
      setLocalNotification} from '../utils/api'
import DecksList from './DecksList'

export default class NewDeck extends Component {
  state = {
   title: ''
   }
    handleChange = (value) => {
    this.setState({title: value})
    }
    handleSubmit = () => {
    console.log("submit it")
    console.log(this.state)
    const title = this.state.title
    
    addDeck(title)

    // this.props.navigation.navigate('Deck', {deckId: title})
    this.props.navigation.navigate('DecksList')
    this.setState({title: ""})
 
  }
    render() {
        return (
            <View>
                <Text style={styles.paragraph}>What is the title of your new deck? </Text>
                <TextInput 
                     label='Enter Deck Name'
                     mode='outlined'
                      onChangeText={this.handleChange}
                      value={this.state.title} 
                     />
                 <Button style={styles.button} mode="contained" 
                 onPress= {this.handleSubmit}>
                  Create Deck
                 </Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  paragraph: {
    padding: 20,
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontColor:"#706fd3",
  },
  button: {
    marginTop: 10,
  },
})
