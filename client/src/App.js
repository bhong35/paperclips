import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import UserProfile from "./screens/userProfileScreen.jsx";
import FeedScreen from "../src/screens/FeedScreen.jsx";
import ItemDetailScreen from "./screens/ItemDetailScreen";
import UploadItemScreen from "./screens/UploadItemScreen";
import MakeOfferScreen from "./screens/MakeOfferScreen";
import MessagesScreen from "./screens/MessagesScreen";
import UpForTradeScreen from "./screens/UpForTradeScreen";
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <ItemDetailPage /> */}
        {/* <!--<TestingScreen />  */}
        <Switch>
          <Route exact path="/dist/">
            <HomeScreen />
          </Route>
          <Route exact path="/dist/signup">
            <SignupScreen />
          </Route>
          <Route exact path="/dist/feed">
            <FeedScreen />
          </Route>
          <Route exact path="/dist/profile">
            <UserProfile />
          </Route>
          <Route exact path="/dist/ItemDetail/:id">
            <ItemDetailScreen />
          </Route>
          <Route exact path="/dist/makeOffer">
            <MakeOfferScreen />
          </Route>
          <Route exact path="/dist/uploadItem">
            <UploadItemScreen />
          </Route>
          <Route exact path="/dist/messages">
            <MessagesScreen />
          </Route>
          <Route exact path="/dist/trade">
            <UpForTradeScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
