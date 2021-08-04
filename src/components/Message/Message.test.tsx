import { render, screen } from '@testing-library/react';

import Message from '.';

test('render message component', () => {
    const messageText = 'Testing message';

    render(<Message own={true}>{messageText}</Message>);

    expect(screen.getByText(messageText)).toBeInTheDocument();
});
