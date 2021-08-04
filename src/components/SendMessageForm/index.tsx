import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

interface SendMessageInterface {
    sendMethod: (newMessage: string) => void;
}

export default function SendMessageForm({
    sendMethod,
}: SendMessageInterface): React.ReactElement {
    const [message, setMessage] = useState('');

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!message) return;

        sendMethod(message);
        setMessage('');
    };

    return (
        <form className="send-message" onSubmit={submit}>
            <Input
                name="message"
                type="text"
                className="send-message-input"
                value={message}
                setValue={setMessage}
            />
            <Button className="send-message-btn" type="submit">
                Send
            </Button>
        </form>
    );
}
