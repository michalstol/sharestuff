import React from 'react';
import classes from '../../helpers/classes';

interface ButtonInterface
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export default function Button({
    type = 'button',
    onClick,
    children,
    className = '',
    ...props
}: ButtonInterface): React.ReactElement {
    return (
        <button
            className={classes(['button', className])}
            data-testid={`button-test-${type}`}
            {...{ type, onClick, ...props }}
        >
            {children}
        </button>
    );
}
