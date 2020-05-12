import {createSelector} from 'reselect'

// when shop.data was stored as an array 
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShop = state => state.shop

export const selectCollections = createSelector(
    selectShop,
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //Busca todas as chaves de collections, retorna um array de strings, dou um mapa nesse array de strings e peço o retorno
    //como o valor de collections e key em um array
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    // when shop.data was stored as an array    
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    collections => collections[collectionUrlParam]
)