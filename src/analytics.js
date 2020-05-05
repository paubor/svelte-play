import firebase from 'firebase/app';
import 'firebase/analytics';


var firebaseConfig = {
	apiKey: "AIzaSyDzcnMGfcmc27CcOsbeoYGZaP--2RlkAlA",
	authDomain: "poller-ff3d8.firebaseapp.com",
	databaseURL: "https://poller-ff3d8.firebaseio.com",
	projectId: "poller-ff3d8",
	storageBucket: "poller-ff3d8.appspot.com",
	messagingSenderId: "302183505367",
	appId: "1:302183505367:web:bc4c8268b5f60a75367f92",
	measurementId: "G-53H1YY8JF1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  pollCreated(poll){
    firebase.analytics().logEvent('poll_created', poll);
  },
  answerAdded(){
    firebase.analytics().logEvent('answer_added');
  }
}