import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TERRITORIES_KEYS } from './constants';
import ListHeader from './list-header/list-header';
import cx from 'classnames';
import UndoLink from './undo-link/undo-link';
import MoveCountryButton from './move-country-button/move-country-button';
import TerritoriesList from './territories-list/territories-list';
import './territories-list-manager.scss';

class TerritoriesListManager extends Component {
    static propTypes = {
        header: PropTypes.string.isRequired,
        thisListType: PropTypes.string.isRequired,
        theOtherListType: PropTypes.string.isRequired,
        onUndoNotificationClose: PropTypes.func,
        undoNotificationVisible: PropTypes.bool,
        totalNumberOfCountries: PropTypes.number.isRequired,
        countries: PropTypes.array.isRequired,
        selectedCountries: PropTypes.array.isRequired,
        movedCountriesNumber: PropTypes.number,
        onTerritoryMovedUndo: PropTypes.func,
        onTerritorySearchClose: PropTypes.func,
        onTerritoryMove: PropTypes.func.isRequired,
        onCountrySelect: PropTypes.func.isRequired,
        theOtherListLabel: PropTypes.string.isRequired,
        forward: PropTypes.bool.isRequired,
        formatMessage: PropTypes.func.isRequired,
        messages: PropTypes.shape({
            countriesCounterOf: PropTypes.object,
            emptyListLabel: PropTypes.object,
            emptyListLabelFrom: PropTypes.object,
            emptyListDescription: PropTypes.object,
            searchPlaceholder: PropTypes.object,
            selectAllLabel: PropTypes.object,
            selectNoneLabel: PropTypes.object,
            undoDescription: PropTypes.object,
            undoLabel: PropTypes.object,
            moveSelectedLabel: PropTypes.object,
            moveToLabel: PropTypes.object
        }).isRequired,
        territoryIdKey: PropTypes.string,
        territoryNameKey: PropTypes.string,
        continentNameKey: PropTypes.string
    };

    static defaultProps = {
        territoryIdKey: TERRITORIES_KEYS.ID,
        territoryNameKey: TERRITORIES_KEYS.NAME,
        continentNameKey: TERRITORIES_KEYS.CONTINENT
    }

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            searchedCountries: null,
        };
    }

    componentWillMount() {
        this.setState({ searchedCountries: this.props.countries });
    }

    componentWillReceiveProps(nextProps) {
        const { countries } = nextProps;
        const { searchQuery } = this.state;

        if (searchQuery.length === 0)
            this.setState({ searchedCountries: countries });
        else
            this.setState({ searchedCountries: this.findTerritory(countries, searchQuery) });
    }

    componentWillUpdate(nextProps, nextState) {
        const { searchQuery } = this.state;
        const { searchQuery: nextQuery } = nextState;
        if (searchQuery && !nextQuery)
            this.setState({ searchedCountries: this.props.countries });
    }

    getUndoLinkStatus = () => {
        const { undoNotificationVisible, movedCountriesNumber } = this.props;
        return undoNotificationVisible && movedCountriesNumber > 0;
    };

    handleTerritorySearch = text => {
        const searchedCountries = this.findTerritory(this.props.countries, text);
        this.setState({ searchQuery: text, searchedCountries });
    };

    handleTerritorySearchClose = () => {
        const { onTerritorySearchClose } = this.props;
        this.setState({ searchQuery: '' });
        if (onTerritorySearchClose)
            onTerritorySearchClose();
    };

    /**
     * @description Used to find by text territory when search by territories triggered
     * @param territories
     * @param text {string}
     * @return {array}
     */
    findTerritory = (territories, text) => territories.filter(
        (territory) => {
            const { territoryNameKey, continentNameKey } = this.props;
            const { [territoryNameKey]: territoryName, [continentNameKey]: continent } = territory;
            const regEx = new RegExp(text.toLowerCase());
            return regEx.test(territoryName.toLowerCase()) ||
                regEx.test(continent.toLowerCase());
        }
    );

    render() {
        const {
            thisListType,
            theOtherListType,
            header,
            onUndoNotificationClose,
            totalNumberOfCountries,
            movedCountriesNumber,
            selectedCountries,
            onTerritoryMovedUndo,
            onTerritoryMove,
            onCountrySelect,
            countries,
            theOtherListLabel,
            forward,
            territoryIdKey,
            territoryNameKey,
            continentNameKey,
            formatMessage,
            messages
        } = this.props;
        const selectedCountriesNumber = selectedCountries.length;
        const { searchQuery, searchedCountries } = this.state;
        const buttonClasses = cx({
            'TerritoriesListManager-move-button': true,
            'Opm-border-radius': true,
            hide: selectedCountriesNumber <= 0
        });
        const undoLinkClasses = cx({
            'TerritoriesListManager-undo-message': true,
            'Opm-thin-grey-border': true,
            hide: !this.getUndoLinkStatus()
        });

        return (
            <div className="TerritoriesListManager col-xs-6" id={ thisListType }>
                <div className="TerritoriesListManager-list Opm-thin-grey-border Opm-border-radius">
                    <ListHeader
                        header={ header }
                        selectedCountriesNumber={ countries.length }
                        totalCountriesNumber={ totalNumberOfCountries }
                        onTerritorySelect={ onCountrySelect }
                        onCountrySearch={ this.handleTerritorySearch }
                        onCountrySearchClose={ this.handleTerritorySearchClose }
                        searchQuery={ searchQuery }
                        formatMessage={ formatMessage }
                        messages={ messages }
                    />
                    <div className="TerritoriesListManager-territories-list">
                        <TerritoriesList
                            onCountrySelect={ onCountrySelect }
                            territories={ searchedCountries }
                            selectedCountries={ selectedCountries }
                            expandAll={ searchQuery.length !== 0 }
                            theOtherListLabel={ theOtherListLabel }
                            territoryIdKey={ territoryIdKey }
                            territoryNameKey={ territoryNameKey }
                            continentNameKey={ continentNameKey }
                            formatMessage={ formatMessage }
                            messages={ messages }
                        />
                    </div>
                </div>
                <div className={ undoLinkClasses }>
                    <UndoLink
                        handleUndoChanges={ onTerritoryMovedUndo }
                        handleNotificationClose={ onUndoNotificationClose }
                        movedCountriesNumber={ movedCountriesNumber }
                        formatMessage={ formatMessage }
                        messages={ messages }
                    />
                </div>
                <div className={ buttonClasses }>
                    <MoveCountryButton
                        thisListType={ thisListType }
                        theOtherListType={ theOtherListType }
                        selectedCountriesNumber={ selectedCountriesNumber }
                        onCountryMove={ onTerritoryMove }
                        forward={ forward }
                        theOtherListLabel={ theOtherListLabel }
                        formatMessage={ formatMessage }
                        messages={ messages }
                    />
                </div>
            </div>
        );
    }
}

export default TerritoriesListManager;
