import React from 'react';
import firebase from 'firebase';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';

import { firestore } from '../../firebaseSetup';

import RoomFirestoreInterface, {
    example as roomFirestoreExample,
} from '../../interfaces/room';

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
    // const [docs, loading, error] = useCollectionDataOnce(
    const [docs] = useCollectionDataOnce(
        firestore
            .collection('rooms')
            .where('usersUids', 'array-contains', user.uid),
        { idField: 'id' }
    );

    return (
        <ul className="lobby">
            {docs?.map((doc, i) => (
                <li
                    className="lobby__record"
                    key={i}
                    onClick={() => setRoom({ ...roomFirestoreExample, ...doc })}
                >
                    {JSON.stringify(doc.users.map(({ name = '' }) => name))}
                </li>
            ))}
        </ul>
    );
}
