import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Card } from 'react-native-paper'
import { withNavigation } from 'react-navigation'

class Deck extends Component {
    render() {
        console.log(this.props.navigation.state.params.deckId)
        console.log(this.props.navigation.state.params.decks)
          const decks = this.props.navigation.state.params.decks
          const deckId = this.props.navigation.state.params.deckId
          const { navigate } = this.props.navigation
        return (
            <Card style={styles.card}>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, textAlign:'center'}}>
               <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#7b68ee',padding:15}}>
                {decks[deckId].title}
                </Text>
               <Text style={{ padding:10, fontSize: 18}}> Number of cards : </Text>
               <Text style={{ padding:10, fontSize: 18}}> {decks[deckId].questions.length} </Text>
            </View>
               <TouchableOpacity style={styles.button} 
               onPress={() => navigate(('AddCard'), {deckId, decks})}>
                  <Text style={styles.btnTitle}> Add Card </Text>
               </TouchableOpacity>
              <TouchableOpacity style={styles.button} 
              onPress={() => navigate(('Quiz'), {deckId, decks})}>
                  <Text style={styles.btnTitle}> Start Quiz </Text>
               </TouchableOpacity>
          </Card>
        )
    }
}
export default  withNavigation(Deck)

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //  alignItems: 'center'
  // },
  button: {
    alignItems: 'center',
    backgroundColor:'#7b68ee',
    padding: 15,
    margin: 10,
    width: 310,
    height:60,
    borderRadius:6
  },
  btnTitle :{
    fontSize: 20,
    textAlign: 'center'
     },
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
  }
})