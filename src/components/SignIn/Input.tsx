import React from 'react';

interface InputInterface {
    id?: string | undefined;
    name: string;
    type: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
}

export default function Input({
    id,
    name,
    type,
    value,
    setValue,
    placeholder = '',
}: InputInterface): React.ReactElement {
    const change = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
        setValue(currentTarget.value);
    };

    return (
        <input
            className="input"
            {...{ id, name, type, value, placeholder }}
            onChange={change}
        />
    );
}
