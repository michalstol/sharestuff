import React, { useState } from 'react';
import firebase from 'firebase';

import { firestore } from '../../firebaseSetup';

import Input from '../Input';

interface LobbyInterface {
    userUid: string;
    children?: React.ReactNode;
}

export default function Lobby({
    userUid,
    children,
}: LobbyInterface): React.ReactElement {
    const [newUserUid, setNewUserUid] = useState<string>('');

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!newUserUid) return;

        firestore.collection('rooms').add({
            updated: firebase.firestore.FieldValue.serverTimestamp(),
            usersUids: [userUid, newUserUid],
            users: [],
        });

        setNewUserUid('');
    };

    return (
        <div className="lobby" data-testid="lobby-test">
            <ul className="lobby__list">{children}</ul>
            <hr />

            <form className="lobby__form" onSubmit={submit}>
                <Input
                    type="text"
                    value={newUserUid}
                    setValue={setNewUserUid}
                />
            </form>
        </div>
    );
}
