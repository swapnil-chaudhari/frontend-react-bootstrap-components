import PropTypes from 'prop-types';
import React from 'react';
import find from 'lodash.find';
import ContinentItem from './continent-item/continent-item';
import './territories-list.scss';

/**
 * @description group countries by continent
 * @param countries
 * @param carveouts
 * @param selectedCountries
 * @param territoryIdKey
 * @param continentNameKey
 */
export const groupByContinent = (countries, selectedCountries, territoryIdKey, continentNameKey) =>
    countries.reduce((acc, country) => {
        const { [continentNameKey]: continent } = country;

        const countryItem = {
            isSelected: Boolean(find(selectedCountries,
                ({ [territoryIdKey]: id }) => id === country[territoryIdKey]
            )),
            ...country
        };

        if (acc[continent])
            acc[continent].push(countryItem);
        else
            acc[continent] = [countryItem]; // eslint-disable-line no-param-reassign

        return acc;
    }, {});

const TerritoriesList = (
    {
        onCountrySelect,
        territories,
        selectedCountries,
        expandAll,
        theOtherListLabel,
        territoryIdKey,
        territoryNameKey,
        continentNameKey,
        formatMessage,
        messages
    }
) => {

    // if list is empty, show default text
    if (!territories || territories.length === 0)
        return (
            <div className="TerritoriesList-empty">
                <p>
                    { formatMessage(messages.emptyListLabel) }
                </p>
                <p>
                    { formatMessage(messages.emptyListLabelFrom) }
                    <b>{ ` ${theOtherListLabel} ` }</b>
                    { formatMessage(messages.emptyListDescription) }
                </p>
            </div>
        );

    const groups = groupByContinent(
        territories, selectedCountries, territoryIdKey, continentNameKey);

    return (
        <div className="TerritoriesList">
            {
                Object.keys(groups).map((key, i) => (
                    <ContinentItem
                        key={ i }
                        onCountrySelect={ onCountrySelect }
                        name={ key }
                        countries={ groups[key] }
                        expandAll={ expandAll }
                        territoryIdKey={ territoryIdKey }
                        territoryNameKey={ territoryNameKey }
                    />
                ))
            }
        </div>
    );
};

TerritoriesList.propTypes = {
    onCountrySelect: PropTypes.func.isRequired,
    territories: PropTypes.array.isRequired,
    selectedCountries: PropTypes.array.isRequired,
    expandAll: PropTypes.bool,
    theOtherListLabel: PropTypes.string.isRequired,
    formatMessage: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired,
    territoryIdKey: PropTypes.string.isRequired,
    territoryNameKey: PropTypes.string.isRequired,
    continentNameKey: PropTypes.string.isRequired
};


export default TerritoriesList;
