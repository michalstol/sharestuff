import { render, screen } from '@testing-library/react';

import Image from '.';

const imageAlt = 'foo text';
const imageUrl =
    'https://images.unsplash.com/photo-1628613779039-7a71e2df81d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=10';

test('render image component', () => {
    render(<Image src={imageUrl} alt={imageAlt} />);
    const image = screen.getByTestId('image-test');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', imageUrl);
    expect(image).toHaveAttribute('alt', imageAlt);
});
