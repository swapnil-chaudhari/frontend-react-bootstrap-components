import React from 'react';
import renderShallow from 'render-shallow';
import SnapshotItem from '../snapshot-item';

describe('<SnapshotItem>', () => {
    describe('when it renders', () => {
        let component;
        let icon = <svg><text>Icon</text></svg>;

        beforeAll(() => {
            const { output } = renderShallow(
                <SnapshotItem
                    tooltip="Revenue"
                    title="Revenue"
                    lineStyle="solid"
                    lineColor="red"
                    valueColor="green"
                    valueHint={ <p>17%</p> }
                    icon={ icon }
                >
                    $1.000.000
                </SnapshotItem>
            );

            component = output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
