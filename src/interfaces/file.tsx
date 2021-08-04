interface ImageInterface {
    contentType?: string | null;
}

export default interface FileFirestoreInterface extends ImageInterface {
    name: string;
    fullPath: string;
}
