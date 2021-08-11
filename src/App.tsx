import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebaseSetup';

import SignIn from './components/SignIn';
import Main from './components/Main';

function App() {
    const [user, loading] = useAuthState(auth);

    if (!!loading) return <>connecting</>;

    return (
        <div className="">
            {!user && <SignIn />}
            {user && <Main userUid={user?.uid} />}
        </div>
    );
}

export default App;
