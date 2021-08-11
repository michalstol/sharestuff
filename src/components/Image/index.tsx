import React from 'react';
import classes from '../../helpers/classes';

interface ImageInterface
    extends React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {}

export default function Image({
    className = '',
    ...props
}: ImageInterface): React.ReactElement {
    return (
        <img
            className={classes(['image', className])}
            data-testid="image-test"
            {...props}
        />
    );
}
