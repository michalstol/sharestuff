import React from 'react';

interface ButtonInterface
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export default function Button({
    onClick,
    children,
    ...props
}: ButtonInterface): React.ReactElement {
    return (
        <button className="button" {...{ onClick, ...props }}>
            {children}
        </button>
    );
}
