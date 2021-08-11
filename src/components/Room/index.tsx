import React from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firestore, storage } from '../../firebaseSetup';

import uploadFiles from '../../helpers/uploadFilest';

import RoomFirestoreInterface from '../../interfaces/room';
import SendMethodInterface from '../../interfaces/sendMethod';
import MessageFirestoreInterface from '../../interfaces/message';

import Button from '../Button';
import SendMessageForm from '../SendMessageForm';
import Message from '../Message';

interface RoomInterface extends RoomFirestoreInterface {
    userUid: string;
    quit: () => void;
}

export default function Room({
    id,
    userUid,
    // users,
    // updated,
    quit,
}: RoomInterface): React.ReactElement {
    const storageRef = storage.ref(id);
    const docRef = firestore.collection('rooms').doc(id);
    const messagesRef = docRef.collection('messages');
    // const [messages, loading, error] = useCollectionData(
    const [messages] = useCollectionData(
        // messagesRef.orderBy('createdAt', 'asc').limit(10)
        messagesRef.orderBy('createdAt', 'asc')
    );

    // TODO: handle attached files
    const sendMethod = async ({
        newMessage,
        newFiles,
    }: SendMethodInterface) => {
        const filesData = await uploadFiles(storageRef, newFiles);

        const messageObject: MessageFirestoreInterface = {
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: userUid,
            body: newMessage,
            files: filesData,
        };

        // set an updated field of document
        docRef.update({
            updated: firebase.firestore.FieldValue.serverTimestamp(),
        });

        // create a new message
        await messagesRef.add(messageObject);
    };

    return (
        <section className="room">
            <header className="room__header">
                <span>{id}</span>
                <Button onClick={quit}>Close this chat</Button>
            </header>

            <main className="room__body">
                <ul className="room__messages">
                    {messages?.map(({ createdBy, files, body }, index) => {
                        return (
                            <Message
                                key={index}
                                own={createdBy === userUid}
                                files={files}
                            >
                                {body}
                            </Message>
                        );
                    })}
                </ul>
            </main>

            <footer className="room__footer">
                <SendMessageForm sendMethod={sendMethod} />
            </footer>
        </section>
    );
}
