import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Amplify, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import  {withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={signOut}>Sign Out</button>
        <h2>My App Content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);