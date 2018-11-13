import React from 'react';
import LoadingStateWrapper from '../loading-state-wrapper';
import renderShallow from 'render-shallow';


describe('<LoadingStateWrapper>', () => {
    describe('when isLoading is true', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <LoadingStateWrapper isLoading={ true }>
                    <div>Hello World</div>
                </LoadingStateWrapper>
            ).output;
        });

        test('renders the <LoadingIndicator>', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when isLoading is false', () => {
        let component;
        beforeAll(() => {
            component = renderShallow(
                <LoadingStateWrapper isLoading={ false }>
                    <div>Hello World</div>
                </LoadingStateWrapper>
            ).output;
        });

        test('renders the child component', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
