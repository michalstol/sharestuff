import React from 'react';

interface LobbyRecordInterface {
    onClick: () => void;
    children: React.ReactNode;
}

export default function LobbyRecord({onClick, children}: LobbyRecordInterface): React.ReactElement {
    return <li className="lobby-record" data-testid="lobby-record-test" onClick={onClick}>{children}</li>;
}