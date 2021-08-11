import React from 'react';
import { useDownloadURL } from 'react-firebase-hooks/storage';

import { storage } from '../../firebaseSetup';
import classes from '../../helpers/classes';
import FileFirestoreInterface from '../../interfaces/file';

import Image from '../Image';

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
                !!contentType ? `file--${contentType.replace('/', '-')}` : '',
            ])}
            data-testid={`file-test-${name.replace(/\s/g, '-')}`}
        >
            {!!contentType &&
                contentType.indexOf('image') !== -1 &&
                downloadUrl && (
                    <Image src={downloadUrl} alt={name} width="200" />
                )}
        </li>
    );
}
