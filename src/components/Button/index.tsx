import React from 'react';
import classes from '../../helpers/classes';

interface ButtonInterface
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export default function Button({
    onClick,
    children,
    className = '',
    ...props
}: ButtonInterface): React.ReactElement {
    return (
        <button
            className={classes(['button', className])}
            {...{ onClick, ...props }}
        >
            {children}
        </button>
    );
}
