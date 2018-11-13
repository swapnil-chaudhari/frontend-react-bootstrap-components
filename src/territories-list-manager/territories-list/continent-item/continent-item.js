import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import Chevron from 'src/icons/chevron';
import CountryItem from '../country-item/country-item';
import './continent-item.scss';


class ContinentItem extends Component {
    static propTypes = {
        onCountrySelect: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        countries: PropTypes.array.isRequired,
        expandAll: PropTypes.bool,
        territoryIdKey: PropTypes.string,
        territoryNameKey: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: true
        };
    }

    componentWillReceiveProps({ expandAll }) {
        const { isCollapsed } = this.state;
        this.setState({ isCollapsed: isCollapsed && !expandAll });
    }

    handleCollapse = () => {
        const { isCollapsed } = this.state;
        this.setState({ isCollapsed: !isCollapsed });
    };

    handleContinentSelect = () => {
        const { onCountrySelect, name } = this.props;

        onCountrySelect(null, null, null, name);
    };

    _handleCountrySelect = (territoryId) => () => {
        const { onCountrySelect } = this.props;

        onCountrySelect(territoryId);
    };

    render() {
        const { name, countries, territoryIdKey, territoryNameKey } = this.props;
        const { isCollapsed } = this.state;
        const isWholeGroupSelected = countries
            .filter(({ isDisabled }) => !isDisabled)
            .every(({ isSelected }) => isSelected);
        const isWholeGroupDisabled = countries.every(({ isDisabled }) => isDisabled);
        const continentClasses = cx('ContinentItem-label', {
            'ContinentItem-label-inverted': !isCollapsed,
            'ContinentItem-fullWidth': true
        });
        const continentContainerClasses = cx({
            checkbox: true,
            'ContinentItem-bordered': !isCollapsed,
            'ContinentItem-container': true
        });

        return (
            <div className="ContinentItem">
                <div className={ continentContainerClasses }>
                    <CountryItem
                        isSelected={ isWholeGroupSelected }
                        territoryName={ `${name} (${countries.length})` }
                        isDisabled={ isWholeGroupDisabled }
                        onHandleSelect={ this.handleContinentSelect }
                    />
                    <span
                        className={ continentClasses }
                        onClick={ this.handleCollapse }
                    >
                        <Chevron />
                    </span>
                </div>
                {
                    isCollapsed ? null : (
                        countries.map(({
                            [territoryIdKey]: id,
                            isSelected,
                            isDisabled,
                            [territoryNameKey]: territoryName
                        }, i) => (
                            <div
                                key={ i }
                                className="checkbox ContinentItem-container ContinentItem-country"
                            >
                                <CountryItem
                                    isSelected={ isSelected }
                                    isDisabled={ isDisabled }
                                    territoryName={ territoryName }
                                    onHandleSelect={ this._handleCountrySelect(id) }
                                />
                            </div>
                        ))
                    )
                }
            </div>
        );
    }
}

export default ContinentItem;
