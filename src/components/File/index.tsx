import React from 'react';
import firebase from 'firebase';
import { useDownloadURL } from 'react-firebase-hooks/storage';

import { storage } from '../../firebaseSetup';
import classes from '../../helpers/classes';
import FileFirestoreInterface from '../../interfaces/file';

const imageTypes = ['image/jpeg', 'image/png', 'image/gif'];

export default function File({
    name,
    fullPath,
    contentType,
}: FileFirestoreInterface): React.ReactElement {
    // const [downloadUrl, loading, error] = useDownloadURL(storage.ref(fullPath));
    const [downloadUrl] = useDownloadURL(storage.ref(fullPath));

    return (
        <li
            className={classes([
                'file',
                !!contentType
                    ? `file--${contentType.replace('/', '-')}`
                    : '',
            ])}
            data-testid={`file-test-${name.replace(/\s/g, '-')}`}
        >
            {!!contentType &&
                imageTypes.indexOf(contentType) !== -1 &&
                downloadUrl && <img src={downloadUrl} alt={name} width="200" />}
        </li>
    );
}
