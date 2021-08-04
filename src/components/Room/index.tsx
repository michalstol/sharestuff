import React from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { firestore } from '../../firebaseSetup';

import RoomFirestoreInterface from '../../interfaces/room';
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
    const messagesRef = firestore
        .collection('rooms')
        .doc(id)
        .collection('messages');
    // const [messages, loading, error] = useCollectionData(
    const [messages] = useCollectionData(
        messagesRef.orderBy('createdAt').limit(10)
    );

    // TODO: handle attached files
    const sendMethod = async (newMessage: string) => {
        const messageObject: MessageFirestoreInterface = {
            ...messageFirestoreExample,
            createdBy: uid,
            body: newMessage,
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
                    {messages?.map(({ body, createdBy }, index) => {
                        return (
                            <Message key={index} own={createdBy === uid}>
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
