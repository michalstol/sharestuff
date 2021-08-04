import React, { useState, useEffect, useRef } from 'react';

import SendMethodInterface from '../../interfaces/sendMethod';

import Button from '../Button';
import Input from '../Input';

interface SendMessageInterface {
    sendMethod: ({ newMessage, newFiles }: SendMethodInterface) => void;
}

export default function SendMessageForm({
    sendMethod,
}: SendMessageInterface): React.ReactElement {
    const [newFiles, setFiles] = useState<FileList | []>([]);
    const [newMessage, setMessage] = useState('');
    const ref = useRef<HTMLInputElement>(null);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!newMessage) return;

        sendMethod({ newMessage, newFiles });
        setMessage('');
    };

    useEffect(() => {
        console.log({ newFiles });
    }, [newFiles]);

    return (
        <form className="send-message" onSubmit={submit}>
            <Input
                type="text"
                name="message"
                className="send-message-input"
                value={newMessage}
                setValue={setMessage}
            />
            <Input
                type="file"
                name="file"
                accept="image/*"
                ref={ref}
                setFiles={setFiles}
                multiple
                hidden
            />
            <Button
                type="button"
                onClick={() => {
                    ref?.current?.click();
                }}
            >
                Select Files
            </Button>
            <Button className="send-message-btn" type="submit">
                Send
            </Button>
        </form>
    );
}
