import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = '@AsyncStorage:flashCards'

// export function _setData () {
// return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data) )
//  .then( ()=>{
//  console.log("set data was saved successfully")
//  } )
//  .catch( (error )=>{
//  console.log("error setting data")
//  } )
// }

export const getAllDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
     .then((res) => {
            const data = JSON.parse(res)
            return data
     })
   .catch((error) => {
   console.log(error)
});
}

export const addDeck = ( title ) => {
   return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title : title,
      questions: []
    }
  }))
}

export function addCardToDeck( deckTitle, obj) {
  return getAllDecks()
     .then((decks) => {
      decks[deckTitle].questions.push(obj)
      AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify( decks ))
     }
   )
}
