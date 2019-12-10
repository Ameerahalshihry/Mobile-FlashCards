import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import { addCardToDeck } from '../utils/api'
import { TextInput, Button, Card } from 'react-native-paper'

export default class AddCard extends Component {
  state = {
    question:'',
    answer: ''
  }

   submit = () => {
    let obj = {
      question:this.state.question,
      answer: this.state.answer
      }
    const decks = this.props.navigation.state.params.decks
    const deckId = this.props.navigation.state.params.deckId
    addCardToDeck(deckId, obj)
    this.props.navigation.navigate('Deck')
    this.setState({question:'',answer: ''})
   }

    render() {
        return (
            <Card style={styles.card}>
                <Text style={styles.paragraph}> Please enter the question </Text>
                  <TextInput 
                    style={styles.input}
                     label='Enter Question'
                     mode='outlined'
                      onChangeText={( question ) => this.setState({ question })}
                      value={this.state.question} 
                     />
                  <Text style={styles.paragraph}> Please enter the answer </Text>
                  <TextInput 
                  style={styles.input}
                    label='Enter the correct Answer'
                     mode='outlined'
                     onChangeText={( answer ) => this.setState({ answer })}
                      value={this.state.answer} 
                     />
              
                <Button style={styles.button} mode="contained" 
                 onPress= {this.submit}>
                 Add Card
                 </Button>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
 card:{
    flex: 1,
    borderWidth:0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width:350,
    borderRadius:8,
    shadowColor:'rgba(80, 0, 255, .4)',
    shadowOffset: {
	     width: 0,
	     height: 12,
    },
   shadowOpacity: 0.58,
   shadowRadius: 16.00,
   elevation: 12,
  },
   paragraph: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#706fd3",
  },
  button: {
   width: 330,
    height: 50,
    margin:20,
    textAlign:'center',
    padding: 8,
  },
  input: {
    width: 340,
    height: 55,
    margin:15,
    padding: 8,
  }
})




