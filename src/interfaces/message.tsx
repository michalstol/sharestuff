import firebase from 'firebase';

import FileFirestoreInterface from './file';

export default interface MessageFirestoreInterface {
    createdBy: string;
    createdAt: firebase.firestore.Timestamp | firebase.firestore.FieldValue;
    body: string;
    files: FileFirestoreInterface[];
}

export const example: MessageFirestoreInterface = {
    createdBy: '',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    body: '',
    files: [],
};
