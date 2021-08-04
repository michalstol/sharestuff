import firebase from 'firebase';

import UserFirestoreInterface from './user';

export default interface RoomFirestoreInterface {
    id: string;
    users: UserFirestoreInterface[];
    usersUids: string[];
    updated: firebase.firestore.Timestamp;
}

export const example: RoomFirestoreInterface = {
    id: '',
    users: [],
    usersUids: [],
    updated: JSON.parse('{"seconds":null,"nanoseconds":null}'),
};
