import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from "./firebase/firebase.utils";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
// import { get } from "http";
// import {selectCollectionsForPreview} from './redux/shop/shop.selectors'

class App extends Component {
  // entender melhor unsubscribeFromAuth
  // *criado apenas para parar de escutar o evento do observable
  unsubscribeFromAuth = null;

  // componentDidMount() {
  //   // const { setCurrentUser, collectionsArray } = this.props;
  //   const { setCurrentUser } = this.props;

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       // onSnapshot pode ser substituido por get(), porém, o get precisa ser chamado todas as vezes, o onSnapshot
  //       // funciona como um observable que sempre irá verificar se um determinado valor foi alterado, no caso, se foi feito o snapshot

  //       userRef.onSnapshot((snapShot) => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         });
  //       });
  //       // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
  //     } else {
  //       setCurrentUser(userAuth);
  //     }
  //   });
  // }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps)(App);
