import React from 'react';

import classes from '../../helpers/classes';

interface InputInterface {
    id?: string | undefined;
    name: string;
    type: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
    className?: string;
}

export default function Input({
    id,
    name,
    type,
    value,
    setValue,
    placeholder = '',
    className = '',
}: InputInterface): React.ReactElement {
    const change = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
        setValue(currentTarget.value);
    };

    return (
        <input
            className={classes(['input', className])}
            onChange={change}
            {...{ id, name, type, value, placeholder }}
        />
    );
}
