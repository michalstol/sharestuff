interface ImageInterface {
    type: 'image/jpeg' | 'image/png' | 'image/gif';
}

export default interface FileInterface extends ImageInterface {
    origin: string;
    thumbnail: string;
}
