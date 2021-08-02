import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

const id = 'test-button';
const label = 'Set value';

function Wrapper() {
    const [value, setValue] = useState(0);

    return (
        <>
            <Button
                data-testid={id}
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                {label} {value + 1}
            </Button>
        </>
    );
}

test('render button', () => {
    render(<Wrapper />);

    const context = screen.getByTestId(id);

    expect(context).toBeInTheDocument();
    expect(context).toHaveTextContent(`${label} 1`);
});

test('change button value', () => {
    render(<Wrapper />);

    const context = screen.getByTestId(id);

    userEvent.click(context);

    expect(screen.getByTestId(id)).toHaveTextContent(`${label} 2`);
});
