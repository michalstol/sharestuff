import React from 'react';
import firebase from 'firebase';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';

import { firestore } from '../../firebaseSetup';

import RoomFirestoreInterface, {
    example as roomFirestoreExample,
} from '../../interfaces/room';

import LobbyRecord from './../LobbyRecord';

interface LobbyInterface {
    user: firebase.User;
    setRoom: React.Dispatch<
        React.SetStateAction<RoomFirestoreInterface | undefined>
    >;
}

export default function Lobby({
    user,
    setRoom,
}: LobbyInterface): React.ReactElement {
    const {uid: userUid} = user;
    // const [docs, loading, error] = useCollectionDataOnce(
    const [docs] = useCollectionDataOnce<RoomFirestoreInterface>(
        firestore
            .collection('rooms')
            .where('usersUids', 'array-contains', userUid),
        { idField: 'id' }
    );

    return (
        <ul className="lobby">
            {docs?.map((doc, i) => (
                <LobbyRecord
                    key={i}
                    onClick={() => setRoom({ ...roomFirestoreExample, ...doc })}
                >
                    {doc.users.find(({uid}) => uid !== userUid)?.name || ''}
                </LobbyRecord>
            ))}
        </ul>
    );
}
