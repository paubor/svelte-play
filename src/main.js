import App from './App.svelte';
import firebase from 'firebase/app';


var firebaseConfig = {
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// require('dotenv').config();
// console.log(process.env);
const app = new App({
	target: document.body,
	props: {
		firebase,
	}
});

export default app;