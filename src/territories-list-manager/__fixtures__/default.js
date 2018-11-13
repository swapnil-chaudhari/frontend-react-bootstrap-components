import noop from 'src/utils/noop';

export default {
    header: 'Territories',
    thisListType: 'thisList',
    theOtherListType: 'otherList',
    onUndoNotificationClose: noop,
    undoNotificationVisible: true,
    totalNumberOfCountries: 3,
    countries: [
        { orchId: 14, continent: 'Asia', territoryName: 'Afghanistan' },
        { orchId: 15, continent: 'Africa', territoryName: 'Zimbabwe' },
        { orchId: 16, continent: 'Asia', territoryName: 'Nepal' }
    ],
    selectedCountries: [
        { orchId: 14, continent: 'Asia', territoryName: 'Afghanistan' },
        { orchId: 15, continent: 'Africa', territoryName: 'Zimbabwe' }
    ],
    movedCountriesNumber: 1,
    onTerritoryMovedUndo: noop,
    onTerritorySearchClose: noop,
    onTerritoryMove: noop,
    onCountrySelect: noop,
    theOtherListLabel: 'Selected Territories',
    forward: true,
    formatMessage: ({ defaultMessage }) => defaultMessage,
    messages: {
        countriesCounterOf: { defaultMessage: 'of', id: 'countriesCounterOf' },
        emptyListLabel: { defaultMessage: 'Select countries or territories', id: 'emptyListLabel' },
        emptyListLabelFrom: { defaultMessage: 'from', id: 'emptyListLabelFrom' },
        emptyListDescription: { defaultMessage: 'to add here', id: 'emptyListDescription' },
        selectAllLabel: { defaultMessage: 'All', id: 'selectAllLabel' },
        selectNoneLabel: { defaultMessage: 'None', id: 'selectNoneLabel' },
        undoDescription: { defaultMessage: 'country or territory moved', id: 'undoDescription' },
        undoLabel: { defaultMessage: 'undo', id: 'undoLabel' },
        moveSelectedLabel: { defaultMessage: 'Move selected', id: 'moveSelectedLabel' },
        moveToLabel: { defaultMessage: 'to', id: 'moveToLabel' },
        searchPlaceholder: {
            defaultMessage: 'Type country or territory...',
            id: 'searchPlaceholder'
        }
    }
};
