import React from 'react';

import classes from '../../helpers/classes';
import FileFirestoreInterface from '../../interfaces/file';
import File from '../File';

interface MessageInterface {
    own: boolean;
    files: FileFirestoreInterface[];
    children: React.ReactNode;
}

export default function Message({
    own,
    files,
    children,
}: MessageInterface): React.ReactElement {
    return (
        <li
            className={classes([
                'room__msg',
                `room__msg--${own ? 'sent' : 'recived'}`,
            ])}
        >
            <p>{children}</p>

            {!!files.length && (
                <ul className="room__msg-files">
                    {files.map((file, index) => (
                        <File key={index} {...file} />
                    ))}
                </ul>
            )}
        </li>
    );
}
