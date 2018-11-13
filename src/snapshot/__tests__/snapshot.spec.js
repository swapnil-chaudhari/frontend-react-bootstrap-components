import React from 'react';
import renderShallow from 'render-shallow';
import Snapshot from '../snapshot';
import SnapshotItem from '../snapshot-item';

describe('<Snapshot>', () => {
    describe('when it renders', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <Snapshot>
                    <SnapshotItem tooltip="Revenue" title="Revenue">$1.000.000</SnapshotItem>
                </Snapshot>
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
