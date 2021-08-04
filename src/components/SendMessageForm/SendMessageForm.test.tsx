import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SendMessageForm from '.';

function Wrapper() {
    const [value, setValue] = useState('');

    return (
        <>
            <p>message: {value}</p>
            <SendMessageForm sendMethod={setValue} />
        </>
    );
}

test('render send message form component', () => {
    render(<Wrapper />);

    expect(screen.getByText('Send')).toBeInTheDocument();
});

test('send message form component', () => {
    const newValue = 'some message';

    render(<Wrapper />);

    userEvent.type(screen.getByDisplayValue(''), newValue);
    expect(screen.getByDisplayValue(newValue)).toBeInTheDocument();

    userEvent.click(screen.getByText('Send'));
    expect(screen.getByText('message: ' + newValue)).toBeInTheDocument();
});
