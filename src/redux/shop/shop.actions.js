import ShopActionType from "./shop.types";

// export const updateCollections = (collectionsMap) => ({
//     type: ShopActionType.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// })

export const fetchCollectionsStart = (collectionsMap) => ({
  type: ShopActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {};
};
