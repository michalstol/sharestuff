import React from 'react';
import { render, screen } from '@testing-library/react';

import classes from './classes';

const defaultClass = 'foo-class';

function Component({ className }: { className: string }) {
    return <div>{classes([defaultClass, className])}</div>;
}

test('check classes helper', () => {
    const extraClasses = 'test-class';

    render(<Component className={extraClasses} />);

    expect(
        screen.getByText([defaultClass, extraClasses].join(' '))
    ).toBeInTheDocument();
});
