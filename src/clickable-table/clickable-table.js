import PropTypes from 'prop-types';
import React, { Component, createElement } from 'react';
import './clickable-table.scss';

const defaultRenderer = (row, rowClassName, cellClassName, tagType) => (
    <tr className={ rowClassName }>
        {
            row.map(col =>
                createElement(
                    tagType,
                    { className: cellClassName, key: col },
                    col
                )
            )
        }
    </tr>
);

const defaultRowRenderer = (rows, rowClassName, cellClassName, cellRenderer, onRowClick) =>
    rows.map((row) =>
        <tr
            key={ row.id }
            className={ rowClassName }
            onClick={ onRowClick(row.id) }
        >
            {
                row.cols.map((col, i) =>
                    <td
                        key={ i }
                        className={ cellClassName }
                    >
                        { cellRenderer(col, i, row) }
                    </td>
                )
            }
        </tr>
    );

class ClickableTable extends Component {
    static propTypes = {
        header: PropTypes.array,
        tableHeading: PropTypes.string,
        headerClassName: PropTypes.string,
        headerCellClassName: PropTypes.string,
        footer: PropTypes.array,
        footerRenderer: PropTypes.func,
        headerRenderer: PropTypes.func,
        footerClassName: PropTypes.string,
        footerCellClassName: PropTypes.string,
        rows: PropTypes.array,
        cellRenderer: PropTypes.func,
        rowRenderer: PropTypes.func,
        onRowClick: PropTypes.func,
        tableClassName: PropTypes.string,
        cellClassName: PropTypes.string,
        rowClassName: PropTypes.string,
    };

    static defaultProps = {
        tableHeading: null,
        header: null,
        footer: null,
        cellRenderer: (col) => col,
        footerRenderer: defaultRenderer,
        headerRenderer: defaultRenderer,
        rowRenderer: defaultRowRenderer,
    };

    handleRowClick = (id) => (event) => {
        this.props.onRowClick(id, event);
    };

    render() {
        const {
            header,
            headerClassName,
            headerCellClassName,
            headerRenderer,
            rows,
            rowClassName,
            cellRenderer,
            cellClassName,
            tableHeading,
            tableClassName,
            footer,
            footerClassName,
            footerCellClassName,
            footerRenderer,
            rowRenderer
        } = this.props;

        return (
            <table className={ tableClassName }>
                {
                    header && (
                        <thead>
                            {
                                tableHeading && (
                                    <tr className={ headerClassName }>
                                        <th
                                            colSpan={ header.length }
                                            className={ headerCellClassName }
                                        >
                                            { tableHeading }
                                        </th>
                                    </tr>
                                )
                            }
                            { headerRenderer(header, headerClassName, headerCellClassName, 'th') }
                        </thead>
                    )
                }
                <tbody>
                    {
                        rowRenderer(
                            rows,
                            rowClassName,
                            cellClassName,
                            cellRenderer,
                            this.handleRowClick
                        )
                    }
                </tbody>

                {
                    footer && (
                        <tfoot>
                            { footerRenderer(footer, footerClassName, footerCellClassName, 'td') }
                        </tfoot>
                    )
                }
            </table>
        );
    }
}

export default ClickableTable;
