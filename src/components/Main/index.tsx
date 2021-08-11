import React, { useState, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firestore } from '../../firebaseSetup';

import RoomFirestoreInterface from '../../interfaces/room';

import Lobby from '../Lobby';
import LobbyRecord from '../LobbyRecord';
import Room from '../Room';

interface MainInterface {
    userUid: string;
}

export default function Main({ userUid }: MainInterface): React.ReactElement {
    const [selectedRoom, setSelectedRoom] =
        useState<RoomFirestoreInterface | null>(null);
    const [lobbies, loading, error] = useCollectionData<RoomFirestoreInterface>(
        firestore
            .collection('rooms')
            .where('usersUids', 'array-contains', userUid)
            .orderBy('updated', 'asc'),
        { idField: 'id' }
    );

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="main-app">
            {!selectedRoom && (
                <Lobby userUid={userUid}>
                    {lobbies?.map((lobby, i) => (
                        <LobbyRecord
                            key={i}
                            onClick={() => setSelectedRoom(lobby)}
                        >
                            {lobby.users.find(({ uid }) => uid !== userUid)
                                ?.name || ''}
                        </LobbyRecord>
                    ))}
                </Lobby>
            )}
            {selectedRoom && (
                <Room
                    userUid={userUid}
                    quit={() => setSelectedRoom(null)}
                    {...selectedRoom}
                />
            )}
        </div>
    );
}
