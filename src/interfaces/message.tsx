import firebase from 'firebase';

import FileInterface from './file';

export default interface MessageFirestoreInterface {
    createdBy: string;
    createdAt: firebase.firestore.Timestamp | firebase.firestore.FieldValue;
    body: string;
    files: FileInterface[];
}

export const example: MessageFirestoreInterface = {
    createdBy: '',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    body: '',
    files: [],
};
