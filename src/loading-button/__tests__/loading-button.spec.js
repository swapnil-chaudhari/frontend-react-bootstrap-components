import React from 'react';
import renderShallow from 'render-shallow';
import LoadingButton from '../loading-button';

describe('<LoadingButton>', () => {
    test('renders the inner content when not loading', () => {
        const component = renderShallow(<LoadingButton
            active={ false }
        >
            Inner
        </LoadingButton>).output;

        expect(component).toMatchSnapshot();
    });

    test('hides the inner content and shows the loading icon when loading', () => {
        const component = renderShallow(<LoadingButton
            active={ false } loading={ true }
        >
            Inner
        </LoadingButton>).output;

        expect(component).toMatchSnapshot();
    });
});
