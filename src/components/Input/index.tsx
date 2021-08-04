import React, { forwardRef } from 'react';

import classes from '../../helpers/classes';

interface InputInterface
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    setFiles?: React.Dispatch<React.SetStateAction<FileList | []>>;
}

function Input(
    { className = '', setValue, setFiles, ...props }: InputInterface,
    ref: React.LegacyRef<HTMLInputElement>
): React.ReactElement {
    const change = ({
        currentTarget: { value, files },
    }: React.FormEvent<HTMLInputElement>) => {
        if (!!setValue) setValue(value);
        if (!!setFiles && !!files) setFiles(files);
    };

    return (
        <input
            className={classes(['input', className])}
            onChange={change}
            {...{ ref, ...props }}
        />
    );
}

export default forwardRef(Input);
