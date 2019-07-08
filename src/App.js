import React from 'react';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure({
    // the Auth module with your Cognito Federated Identity Pool
    Auth: {
        identityPoolId: 'ap-southeast-2:2809cc54-8622-4c79-af58-3cfa62084ad5',
        region: 'ap-southeast-2'
    }
});

function App() {
    return (
        <div className="App">
          	<h3 className="cust--heading"> Connected app to AWS Server. </h3>
        </div>
    );
}

export default App;
