import React, { Component } from "react";
import { AsyncStorage, StatusBar, StyleSheet, Text, View } from "react-native";
import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// import Drawer from "./routes/Drawer";
import Index from "./routes/Index";

import wingApp from "./redux/reducers";
const store = createStore(wingApp, undefined, compose(applyMiddleware(thunk)));

// console.log(store.getState());
//
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// //
// // store.dispatch(addComment());
// //
// unsubscribe();

// const store = createStore(
//   reducer,
//   undefined,
//   compose(applyMiddleware(thunk), autoRehydrate())
// );
//
// persistStore(store, { storage: AsyncStorage });
// // persistStore(store, { storage: AsyncStorage }).purge();

export default class wing extends Component {
	render() {
		// console.disableYellowBox = true;
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<StatusBar showHiddenTransition="fade" />
					<Index />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: "#FFFFFF"
	}
});

// import { createStore } from "redux";
// import wingApp from "./redux/request/reducer";
//
// let store = createStore(wingApp, window.STATE_FROM_SERVER);
