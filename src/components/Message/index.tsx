import React from 'react';

import classes from '../../helpers/classes';

interface MessageInterface {
    own: boolean;
    children: React.ReactNode;
}

export default function Message({
    own,
    children,
}: MessageInterface): React.ReactElement {
    return (
        <li
            className={classes([
                'room__msg',
                `room__msg--${own ? 'sent' : 'recived'}`,
            ])}
        >
            {children}
        </li>
    );
}
