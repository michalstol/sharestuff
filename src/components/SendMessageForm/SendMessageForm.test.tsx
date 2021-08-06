import React, { useState, useCallback } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SendMessageForm from '.';
import SendMethodInterface from '../../interfaces/sendMethod';

const inputMessageId = 'input-test-message';

function Wrapper() {
    const [value, setValue] = useState('');
    const sendMethod = useCallback(
        ({newMessage, newFiles}: SendMethodInterface) => {
            setValue(newMessage);
        },
        [setValue],
    );

    return (
        <>
            <p data-testid="test-message">{value}</p>
            <SendMessageForm sendMethod={sendMethod} />
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

    userEvent.type(screen.getByTestId(inputMessageId), newValue);
    expect(screen.getByTestId(inputMessageId)).toHaveDisplayValue(newValue);

    // userEvent.click(screen.getByTestId('button-test-button'));
    // expect(screen.getByTestId('test-message')).toHaveTextContent(newValue);
});
