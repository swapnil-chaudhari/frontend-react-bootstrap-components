import React from 'react';
import CharacterLimitIndicator from '../character-limit-indicator';
import Promise from 'bluebird';
import randomize from 'randomatic';
import renderShallow from 'render-shallow';

describe('CharacterLimitIndicator', () => {
    const _getRequiredProps = () => ({
        children: <div></div>,
        limit: 1234,
        formatMessage: (message, { limit }) => `${message} ${limit}`,
        formatNumber: (number) => number,
        message: { id: 'some.id', defaultMessage: 'some default message' },
    });
    const _generateRandomValue = length => {
        const randomValue = randomize('*', length).split('');
        // newlines within the string (not at the beginning or end) count as two characters
        // because they will be replaced with \r\n
        randomValue.splice(1, 2, '\n');
        return randomValue.join('');
    };

    describe('when it renders with required props and required context', () => {
        const props = _getRequiredProps();
        let component;

        beforeAll(() => {
            component = renderShallow(<CharacterLimitIndicator { ...props } />).output;
        });

        test('renders expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it receives focus', () => {
        const props = _getRequiredProps();
        let component;

        beforeAll((done) => {
            const { rerender, output } = renderShallow(
                <CharacterLimitIndicator { ...props } />);
            output.props.onFocus();

            return new Promise(res => {
                component = rerender();
                done();
                res();
            });
        });

        test('renders expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it loses focus', () => {
        const props = _getRequiredProps();
        let component;

        beforeAll((done) => {
            const { rerender, output } = renderShallow(
                <CharacterLimitIndicator { ...props } />);
            output.props.onFocus();

            return new Promise(res => {
                output.props.onBlur();
                res();
            }).then(() =>
                new Promise(res => {
                    component = rerender();
                    done();
                    res();
                })
            );
        });

        test('renders expected markup', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when it renders with a value to apply a limit to', () => {
        describe('and the value does not exceed the limit', () => {
            const requiredProps = _getRequiredProps();
            const props = {
                ...requiredProps,
                value: _generateRandomValue(requiredProps.limit)
            };

            let component;

            beforeAll(() => {
                component = renderShallow(<CharacterLimitIndicator { ...props } />).output;
            });

            test('renders expected markup', () => {
                expect(component).toMatchSnapshot();
            });
        });

        describe('and the value exceeds the limit', () => {
            const requiredProps = _getRequiredProps();
            const props = {
                ...requiredProps,
                value: _generateRandomValue(requiredProps.limit + 1)
            };

            let component;

            beforeAll(() => {
                component = renderShallow(<CharacterLimitIndicator { ...props } />).output;
            });

            test('renders expected markup', () => {
                expect(component).toMatchSnapshot();
            });
        });
    });
});
