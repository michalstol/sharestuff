import React from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firestore, storage } from '../../firebaseSetup';

import uploadFiles from '../../helpers/uploadFilest';

import RoomFirestoreInterface from '../../interfaces/room';
import SendMethodInterface from '../../interfaces/sendMethod';
import MessageFirestoreInterface, {
    example as messageFirestoreExample,
} from '../../interfaces/message';

import Button from '../Button';
import SendMessageForm from '../SendMessageForm';
import Message from '../Message';

interface RoomInterface extends RoomFirestoreInterface {
    user: firebase.User;
    quit: () => void;
}

export default function Room({
    id,
    user: { uid },
    // users,
    // updated,
    quit,
}: RoomInterface): React.ReactElement {
    const storageRef = storage.ref(id);
    const messagesRef = firestore
        .collection('rooms')
        .doc(id)
        .collection('messages');
    // const [messages, loading, error] = useCollectionData(
    const [messages] = useCollectionData(
        messagesRef.orderBy('createdAt').limit(10)
    );

    // TODO: handle attached files
    const sendMethod = async ({
        newMessage,
        newFiles,
    }: SendMethodInterface) => {
        const filesData = await uploadFiles(storageRef, newFiles);

        const messageObject: MessageFirestoreInterface = {
            ...messageFirestoreExample,
            createdBy: uid,
            body: newMessage,
            files: filesData,
        };

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
                                own={createdBy === uid}
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
