import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

export default class Tile extends Component {
    static propTypes = {
        image: PropTypes.string,
        children: PropTypes.any,
        onClick: PropTypes.func
    };

    componentDidMount() {
        this.fillImage();
    }

    componentDidUpdate() {
        this.fillImage();
    }

    /**
     * fillImage method helps with hack for having tile image be squared.
     */
    fillImage = () => {
        const { image } = this.props;

        if (this._image)
            this._image.style.backgroundImage = `url(${image})`;
    };

    render() {
        const { image, children, onClick } = this.props;

        return (
            <div className="Tile" onClick={ onClick }>
                <div className="row">
                    {
                        image ? (
                            <div
                                className="Tile-image-column col-xs-4"
                            >
                                <div
                                    className="Tile-image-column-inner"
                                    ref={ (c) => (this._image = c) }
                                />
                            </div>
                        ) : null
                    }
                    <div
                        className={
                            cx('Tile-column', {
                                'col-xs-8': image,
                                'col-xs-12': !image
                            })
                        }
                    >
                        { children }
                    </div>
                </div>
            </div>
        );
    }
}
