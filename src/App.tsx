import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './firebaseSetup';

import RoomFirestoreInterface from './interfaces/room';

import SignIn from './components/SignIn';
import Lobby from './components/Lobby';
import Room from './components/Room';

function App() {
    const [user] = useAuthState(auth);
    const [selectedRoom, setSelectedRoom] = useState<
        RoomFirestoreInterface | undefined
    >(undefined);

    return (
        <div className="">
            {!user && <SignIn />}
            {user && (
                <>
                    {!selectedRoom && (
                        <Lobby user={user} setRoom={setSelectedRoom} />
                    )}
                    {selectedRoom && (
                        <Room
                            {...selectedRoom}
                            user={user}
                            quit={() => {
                                setSelectedRoom(undefined);
                            }}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default App;
