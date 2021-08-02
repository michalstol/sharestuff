import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebaseSetup';

import SignIn from './components/SignIn';

function App() {
    const [user] = useAuthState(auth);

    return <div className="">{!user && <SignIn />}</div>;
}

export default App;
