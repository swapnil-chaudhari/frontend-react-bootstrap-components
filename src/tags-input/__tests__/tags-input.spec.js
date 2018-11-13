import React from 'react';
import renderShallow from 'render-shallow';
import TagsInput from '../tags-input';
import noop from 'src/utils/noop';

describe('<TagsInput>', () => {
    describe('when it is rendered with required props', () => {
        const props = {
            onChange: noop,
            value: []
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<TagsInput { ...props } />).output;
        });

        test('has expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it is rendered with quality assurance id', () => {
        const props = {
            onChange: noop,
            value: [],
            qaid: 'TagsInput-QA-wrapper'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<TagsInput { ...props } />).output;
        });

        test('has expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it is disabled', () => {
        const props = {
            disabled: true,
            onChange: noop,
            value: []
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<TagsInput { ...props } />).output;
        });

        test('has expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
