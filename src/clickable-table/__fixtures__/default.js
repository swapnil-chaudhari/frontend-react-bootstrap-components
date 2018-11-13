import noop from 'src/utils/noop';

export default {
    header: ['FIRST NAME', 'LAST NAME'],
    rows: [{ id: 1, cols: ['Jeff', 'Boyardee'] }, { id: 2, cols: ['Grungus', 'Benihana'] }],
    cellRenderer: (col) => col,
    onRowClick: noop,
    tableClassName: 'ClickableTable table table-striped',
    headerClassName: 'ClickableTable-header',
    headerCellClassName: 'ClickableTable-header-cell',
    rowClassName: 'ClickableTable-row',
    cellClassName: 'ClickableTable-cell'
};
