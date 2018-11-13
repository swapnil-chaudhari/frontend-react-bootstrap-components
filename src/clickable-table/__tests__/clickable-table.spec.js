import React from 'react';
import renderShallow from 'render-shallow';
import ClickableTable from '../clickable-table';
import { findAllWithType } from 'react-shallow-testutils';

describe('ClickableTable', () => {
    const header = ['PROJECT NAME', 'PROJECT CODE'];
    const rows = [{ id: 1, cols: ['Bruce', 'Wayne'] }, { id: 2, cols: ['Clark', 'Kent'] }];
    const onRowClick = jest.fn();
    const tableClassName = 'ClickableTable table table-striped';
    const rowClassName = 'ClickableTable-row';
    const props = {
        header,
        rows,
        onRowClick,
        tableClassName,
        rowClassName
    };

    describe('when header and rows are included', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<ClickableTable { ...props } />).output;
        });

        test('renders HTML clickable-table', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when row is clicked', () => {
        const event = { preventDefault: () => {} };
        let component;

        beforeAll(() => {
            component = renderShallow(<ClickableTable { ...props } />).output;
            const [, firstRow] = findAllWithType(component, 'tr');
            firstRow.props.onClick(event);
        });

        test('calls onRowClick with the clicked row id', () => {
            expect(onRowClick).toHaveBeenCalledWith(
                1, event
            );
        });
    });

    describe('when cellRenderer was specified', () => {
        const propsWithCellRenderer = {
            ...props,
            cellRenderer: (col, i) => i === 1 ? <b>{ col }</b> : col
        };
        let columns;
        let component;

        beforeAll(() => {
            component = renderShallow(<ClickableTable { ...propsWithCellRenderer } />).output;
            columns = findAllWithType(component, 'td');
        });

        test('should render last columns in each row with <b> wrapper', () => {
            expect(columns[1]).toEqual(<td key="1" className={ undefined }><b>Wayne</b></td>);
            expect(columns[3]).toEqual(<td key="1" className={ undefined }><b>Kent</b></td>);
        });
    });

    describe('when classNames was specified', () => {
        let component;
        beforeAll(() => {
            component = renderShallow(
                <ClickableTable
                    { ...props }
                    headerClassName="header"
                    headerCellClassName="header-cell"
                    cellClassName="cell"
                />
            ).output;
        });

        test('renders HTML clickable-table', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when footer is included', () => {
        const customProps = {
            ...props,
            footer: ['FOOTER']
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ClickableTable { ...customProps } />).output;
        });

        test('renders footer of clickable-table', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when tableHeader is included', () => {
        const customProps = {
            ...props,
            tableHeading: 'HEADING'
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ClickableTable { ...customProps } />).output;
        });

        test('renders tableHeading of clickable-table', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('when rowRenderer is passed', () => {
        const TestComponent = (componentPops) => (<span>{ componentPops.value }</span>);
        const customProps = {
            ...props,
            rows: ['test', 'test2'],
            rowRenderer: (items) =>
                items.map(
                    row => (<tr key={ row }><td><TestComponent value={ row } /></td></tr>)
                )
        };
        let component;

        beforeAll(() => {
            component = renderShallow(<ClickableTable { ...customProps } />).output;
        });

        test('renders table body of clickable-table', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
