import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { auth } from '../../firebaseSetup';

import Input from '../Input';
import Button from '../Button';

export default function SignIn(): React.ReactElement {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const [signInWithEmailAndPassword, user, loading, error] =
    const [signInWithEmailAndPassword, error] =
        useSignInWithEmailAndPassword(auth);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        // TODO: Can't perform a React state update on an unmounted component
        signInWithEmailAndPassword(email, password);
    };

    return (
        <form className="signin" onSubmit={submit}>
            <Input
                name="email"
                type="email"
                value={email}
                setValue={setEmail}
                placeholder="Your email address"
            />
            <Input
                name="password"
                type="password"
                value={password}
                setValue={setPassword}
                placeholder="Your password"
            />

            <Button type="submit">Sign in</Button>

            {error && <p>{error?.message}</p>}
        </form>
    );
}
