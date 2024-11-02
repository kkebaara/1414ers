// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB9W45rzGplFrXYeUyAjJK7-OG9b853PtU',
	authDomain: 'ers-d2e61.firebaseapp.com',
	projectId: 'ers-d2e61',
	storageBucket: 'ers-d2e61.firebasestorage.app',
	messagingSenderId: '92510206837',
	appId: '1:92510206837:web:0ba59c74d745f198ff713c',
	measurementId: 'G-QL54WPYR6K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
