import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

const id = 'email-id';
const newValue = 'test@test.test';
const placeholder = 'email placeholder';

function Wrapper() {
    const [value, setValue] = useState('');

    return (
        <>
            <Input
                name="email"
                type="email"
                {...{ id, value, setValue, placeholder }}
            />
        </>
    );
}

test('render email input', () => {
    render(<Wrapper />);

    const input = screen.getByPlaceholderText(placeholder);

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
});

test('fill email input', () => {
    render(<Wrapper />);

    const input = screen.getByPlaceholderText(placeholder);

    userEvent.type(input, newValue);

    expect(screen.getByPlaceholderText(placeholder)).toHaveValue(newValue);
});
