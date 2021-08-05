import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import File from '.';
import FileFirestoreInterface from '../../interfaces/file';

const data: FileFirestoreInterface = {
    name: 'file name',
    fullPath: 'test/sample-6.jpg',
    contentType: 'image/jpeg',
};

test('render file component', () => {
    render(<File {...data}  />);

    expect(screen.getByAltText(data.name)).toBeInTheDocument();
});
