import { render, screen } from '@testing-library/react';

import Lobby from '.';

test('render lobby component', () => {
    render(<Lobby userUid="userUidExample"></Lobby>);

    expect(screen.getByTestId('lobby-test')).toBeInTheDocument();
});
