import firebase from 'firebase';

import FileFirestoreInterface from '../interfaces/file';

export default async function uploadFiles(
    storageRef: firebase.storage.Reference,
    files: FileList | []
) {
    const promises = [];

    if (!files.length) return [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        promises.push(
            new Promise<FileFirestoreInterface>(resolve => {
                storageRef
                    .child(file.name)
                    .put(file)
                    .then(
                        ({
                            state,
                            metadata: { name, fullPath, contentType },
                        }) => {
                            if (state === 'success') {
                                const fileObject: FileFirestoreInterface = {
                                    name,
                                    fullPath,
                                    contentType,
                                };

                                resolve(fileObject);
                            }
                        }
                    );
            })
        );
    }

    return await Promise.all(promises).then(data => data);
}
