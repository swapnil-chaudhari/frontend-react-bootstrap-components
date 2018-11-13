import React from 'react';
import renderShallow from 'render-shallow';
import {
    SVGArtworkEmpty,
    SVGAttention,
    SVGAudioDisabled,
    SVGAudioEnabled,
    SVGAudioPlayerMute,
    SVGAudioPlayerNext,
    SVGAudioPlayerNextLite,
    SVGAudioPlayerPause,
    SVGAudioPlayerPauseLite,
    SVGAudioPlayerPlay,
    SVGAudioPlayerPrevious,
    SVGAudioPlayerPreviousLite,
    SVGAudioPlayerVolume,
    SVGCalendar,
    SVGCompleteCheckmark,
    SVGChevron,
    SVGCleanVersion,
    SVGCloseButton,
    SVGDigital,
    SVGDigitalAudio,
    SVGFilm,
    SVGInfo,
    SVGLoadingRing,
    SVGPhysical,
    SVGPhysicalAudio,
    SVGStatusComplete,
    SVGStatusInProgress,
    SVGStatusRed,
    SVGStatusSubmitted,
    SVGRightDirectionArrow,
    SVGSuccessCheckmark,
    SVGTrashCan,
    SVGUpload,
    SVGSearch,
    SVGCloseRound,
    SVGThreeRightDirectedArrows,
    SVGLeftPaginationArrow,
    SVGRightPaginationArrow,
    SVGLogo,
    SVGLoadingArrows,
    SVGEdit,
    SVGExternalLink,
    SVGUpAndDownArrows,
    SVGDownloadBox,
    SVGTripleCheckmark,
    SVGUpAndDownCarets,
    SVGTracksEmpty,
    SVGTracksCompleteCheckmark,
    SVGViewMoreNextArrow,
    SVGPlus,
    SVGMan,
    SVGWoman,
    SVGDownDirectionArrow,
    SVGUpDirectionArrow,
    SVGDownloadSymbol,
    SVGThreeDots,
    SVGRefresh,
    SVGServerError,
    SVGNewProduct,
    SVGGoToCatalog,
    SVGAdvertise,
    SVGFilledChevronUp,
    SVGFilledChevronDown,
    SVGTransparentLogo,
    SVGHistory,
    SVGPdf,
    SVGXls,
    SVGRoyaltyShareLogo,
    SVGError404,
    SVGLogoAndName,
    SVGGear,
    SVGSpotify,
    SVGFacebook,
    SVGYoutube,
    SVGTwitter,
    SVGAan,
    SVGPlaylistPlaceholder,
    SVGUploadArrow,
    SVGImportArrow,
    SVGVideo
} from '../svgs';

describe('<SVGDefinitions> svgs', () => {
    describe('<SVGArtworkEmpty>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGArtworkEmpty />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-artwork-empty');
        });
    });

    describe('<SVGAttention>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAttention />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-attention');
        });
    });

    describe('<SVGAudioDisabled>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioDisabled />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-disabled');
        });
    });

    describe('<SVGAudioEnabled>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioEnabled />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-enabled');
        });
    });

    describe('<SVGAudioPlayerMute>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioPlayerMute />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-player-mute');
        });
    });

    describe('<SVGAudioPlayerNext>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioPlayerNext />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-player-next');
        });
    });

    describe('<SVGAudioPlayerNextLite>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioPlayerNextLite />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-player-next-lite');
        });
    });

    describe('<SVGAudioPlayerPause>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioPlayerPause />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-player-pause');
        });
    });

    describe('<SVGAudioPlayerPauseLite>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioPlayerPauseLite />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-player-pause-lite');
        });
    });

    describe('<SVGAudioPlayerPlay>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioPlayerPlay />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-player-play');
        });
    });

    describe('<SVGAudioPlayerPrevious>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioPlayerPrevious />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-player-previous');
        });
    });

    describe('<SVGAudioPlayerPreviousLite>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioPlayerPreviousLite />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-player-previous-lite');
        });
    });

    describe('<SVGAudioPlayerVolume>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAudioPlayerVolume />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-audio-player-volume');
        });
    });

    describe('<SVGCompleteCheckmark>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGCompleteCheckmark />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-complete-checkmark');
        });
    });

    describe('<SVGDigital>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGDigital />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-digital');
        });

    });

    describe('<SVGDigitalAudio>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGDigitalAudio />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-digital-audio');
        });

    });

    describe('<SVGPhysical>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGPhysical />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-physical');
        });

    });

    describe('<SVGPhysicalAudio>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGPhysicalAudio />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-physical-audio');
        });

    });

    describe('<SVGFilm>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGFilm />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-film');
        });

    });

    describe('<SVGInfo>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGInfo />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-info');
        });

    });

    describe('<SVGStatusRed>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGStatusRed />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-status-red');
        });

    });

    describe('<SVGStatusComplete>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGStatusComplete />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-status-complete');
        });

    });

    describe('<SVGStatusInProgress>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGStatusInProgress />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-status-in-progress');
        });

    });

    describe('<SVGStatusSubmitted>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGStatusSubmitted />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-status-submitted');
        });

    });

    describe('<SVGCloseButton>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGCloseButton />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-close');
        });

    });

    describe('<SVGUpload>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGUpload />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-upload');
        });

    });

    describe('<SVGLoadingRing>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGLoadingRing />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-loading-ring');
        });

    });

    describe('<SVGChevron>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGChevron />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-chevron');
        });

    });

    describe('<SVGCalendar>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGCalendar />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-calendar');
        });

    });

    describe('<SVGRightDirectionArrow>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGRightDirectionArrow />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-right-direction-arrow');
        });
    });

    describe('<SVGSuccessCheckmark>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGSuccessCheckmark />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-success-checkmark');
        });
    });

    describe('<SVGTrashCan>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGTrashCan />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-trash-can');
        });
    });

    describe('<SVGSearch>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGSearch />).output;

        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-search');
        });
    });

    describe('<SVGThreeRightDirectedArrows>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGThreeRightDirectedArrows />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icons-three-right-directed-arrows');
        });
    });

    describe('<SVGCloseRound>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGCloseRound />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-close-round');
        });
    });

    describe('<SVGLeftPaginationArrow>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGLeftPaginationArrow />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-left-pagination-arrow');
        });
    });

    describe('<SVGRightPaginationArrow>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGRightPaginationArrow />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-right-pagination-arrow');
        });
    });

    describe('<SVGLogo>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGLogo />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-logo');
        });
    });

    describe('<SVGLoadingArrows>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGLoadingArrows />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-loading-arrows');
        });
    });

    describe('<SVGEdit>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGEdit />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-edit');
        });
    });

    describe('<SVGCleanVersion>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGCleanVersion />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-clean-version');
        });
    });

    describe('<SVGExternalLink>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGExternalLink />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-external-link');
        });

    });

    describe('<SVGUpAndDownArrows>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGUpAndDownArrows />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-up-and-down-arrows');
        });

    });

    describe('<SVGDownloadBox>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGDownloadBox />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-download-box');
        });
    });

    describe('<SVGTripleCheckmark>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGTripleCheckmark />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-triple-checkmark');
        });
    });

    describe('<SVGUpAndDownCarets>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGUpAndDownCarets />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('up-and-down-carets');
        });
    });

    describe('<SVGTracksEmpty>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGTracksEmpty />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-tracks-empty');
        });
    });

    describe('<SVGTracksCompleteCheckmark>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGTracksCompleteCheckmark />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-tracks-complete-checkmark');
        });
    });

    describe('<SVGViewMoreNextArrow>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGViewMoreNextArrow />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-view-more-next-arrow');
        });
    });

    describe('<SVGPlus>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGPlus />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-plus');
        });
    });

    describe('<SVGMan>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGMan />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-man');
        });
    });

    describe('<SVGWoman>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGWoman />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-woman');
        });
    });

    describe('<SVGDownDirectionArrow', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGDownDirectionArrow />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-down-direction-arrow');
        });
    });

    describe('<SVGUpDirectionArrow', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGUpDirectionArrow />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-up-direction-arrow');
        });
    });

    describe('<SVGDownloadSymbol>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGDownloadSymbol />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('set the correct ID', () => {
            expect(component.props.id).toEqual('icon-download-symbol');
        });
    });

    describe('<SVGThreeDotsMore>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGThreeDots />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-three-dots');
        });
    });

    describe('<SVGRefresh>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGRefresh />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-refresh');
        });
    });

    describe('<SVGServerError>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGServerError />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-server-error');
        });
    });

    describe('<SVGNewProduct>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGNewProduct />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-new-product');
        });
    });

    describe('<SVGGoToCatalog>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGGoToCatalog />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-go-to-catalog');
        });
    });

    describe('<SVGAdvertise>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAdvertise />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-advertise');
        });
    });

    describe('<SVGFilledChevronDown>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGFilledChevronDown />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-filled-chevron-down');
        });
    });

    describe('<SVGFilledChevronUp>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGFilledChevronUp />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-filled-chevron-up');
        });
    });

    describe('<SVGTransparentLogo>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGTransparentLogo />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-transparent-logo');
        });
    });

    describe('<SVGHistory>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGHistory />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-history');
        });
    });

    describe('<SVGPdf>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGPdf />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-pdf');
        });
    });

    describe('<SVGXls>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGXls />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-xls');
        });
    });

    describe('<SVGRoyaltyShareLogo>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGRoyaltyShareLogo />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-royalty-share-logo');
        });
    });

    describe('<SVGError404>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGError404 />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-error-404');
        });
    });

    describe('<SVGLogoAndName>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGLogoAndName />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-logo-and-name');
        });
    });

    describe('<SVGGear>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGGear />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-gear');
        });
    });

    describe('<SVGSpotify>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGSpotify />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-spotify');
        });
    });

    describe('<SVGTwitter>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGTwitter />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-twitter');
        });
    });

    describe('<SVGYoutube>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGYoutube />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-youtube');
        });
    });

    describe('<SVGFacebook>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGFacebook />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-facebook');
        });
    });

    describe('<SVGAan>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGAan />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-aan');
        });
    });

    describe('<SVGPlaylistPlaceholder>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGPlaylistPlaceholder />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-playlist-placeholder');
        });
    });

    describe('<SVGUploadArrow>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGUploadArrow />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-upload-arrow');
        });
    });

    describe('<SVGImportArrow>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGImportArrow />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-import-arrow');
        });
    });

    describe('<SVGVideo>', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(<SVGVideo />).output;
        });

        test('renders a symbol', () => {
            expect(component.type).toEqual('symbol');
        });

        test('sets the correct ID', () => {
            expect(component.props.id).toEqual('icon-video');
        });
    });
});
