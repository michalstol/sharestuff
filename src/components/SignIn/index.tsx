import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { auth } from '../../firebaseSetup';

import Input from './Input';

export default function SignIn(): React.ReactElement {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password);
    };

    return (
        <form onSubmit={submit}>
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
        </form>
    );
}
