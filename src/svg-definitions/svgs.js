/* eslint-disable max-len */
import React from 'react';

export const ICON_IDS = {
    AAN: 'icon-aan',
    ADVERTISE: 'icon-advertise',
    APPLE_MUSIC: 'icon-apple-music',
    ARTWORK_EMPTY: 'icon-artwork-empty',
    ATTENTION: 'icon-attention',
    AUDIO_DISABLED: 'icon-audio-disabled',
    AUDIO_ENABLED: 'icon-audio-enabled',
    AUDIO_PLAYER_MUTE: 'icon-audio-player-mute',
    AUDIO_PLAYER_NEXT: 'icon-audio-player-next',
    AUDIO_PLAYER_NEXT_LITE: 'icon-audio-player-next-lite',
    AUDIO_PLAYER_PAUSE: 'icon-audio-player-pause',
    AUDIO_PLAYER_PAUSE_LITE: 'icon-audio-player-pause-lite',
    AUDIO_PLAYER_PLAY: 'icon-audio-player-play',
    AUDIO_PLAYER_PREVIOUS: 'icon-audio-player-previous',
    AUDIO_PLAYER_PREVIOUS_LITE: 'icon-audio-player-previous-lite',
    AUDIO_PLAYER_VOLUME: 'icon-audio-player-volume',
    CALENDAR: 'icon-calendar',
    CAMERA: 'icon-camera',
    CHEVRON: 'icon-chevron',
    CLEAN_VERSION: 'icon-clean-version',
    CLOSE: 'icon-close',
    CLOSE_ROUND: 'icon-close-round',
    COMPLETE_CHECKMARK: 'icon-complete-checkmark',
    DIGITAL: 'icon-digital',
    DIGITAL_AUDIO: 'icon-digital-audio',
    DOWN_DIRECTION_ARROW: 'icon-down-direction-arrow',
    DOWNLOAD_BOX: 'icon-download-box',
    DOWNLOAD_SYMBOL: 'icon-download-symbol',
    EDIT: 'icon-edit',
    ERROR_404: 'icon-error-404',
    EXPLICIT: 'icon-explicit',
    EXTERNAL_LINK: 'icon-external-link',
    FACEBOOK: 'icon-facebook',
    FILLED_CHEVRON_DOWN: 'icon-filled-chevron-down',
    FILLED_CHEVRON_UP: 'icon-filled-chevron-up',
    FILM: 'icon-film',
    GEAR: 'icon-gear',
    GO_TO_CATALOG: 'icon-go-to-catalog',
    HISTORY: 'icon-history',
    IMPORT_ARROW: 'icon-import-arrow',
    INFO: 'icon-info',
    INSTAGRAM: 'icon-instagram',
    LEFT_PAGINATION_ARROW: 'icon-left-pagination-arrow',
    LOADING_ARROWS: 'icon-loading-arrows',
    LOADING_RING: 'icon-loading-ring',
    LOGO: 'icon-logo',
    LOGO_AND_NAME: 'icon-logo-and-name',
    MAINTENANCE: 'icon-maintenance',
    MAN: 'icon-man',
    NEW_PRODUCT: 'icon-new-product',
    PDF: 'icon-pdf',
    PHYSICAL: 'icon-physical',
    PHYSICAL_AUDIO: 'icon-physical-audio',
    PLAY: 'icon-play',
    PLAYLIST_PLACEHOLDER: 'icon-playlist-placeholder',
    PLUS: 'icon-plus',
    REFRESH: 'icon-refresh',
    RIGHT_DIRECTION_ARROW: 'icon-right-direction-arrow',
    RIGHT_PAGINATION_ARROW: 'icon-right-pagination-arrow',
    ROYALTY_SHARE_LOGO: 'icon-royalty-share-logo',
    SEARCH: 'icon-search',
    SERVER_ERROR: 'icon-server-error',
    SPOTIFY: 'icon-spotify',
    STATUS_COMPLETE: 'icon-status-complete',
    STATUS_IN_PROGRESS: 'icon-status-in-progress',
    STATUS_RED: 'icon-status-red',
    STATUS_SUBMITTED: 'icon-status-submitted',
    STOP: 'icon-stop',
    SUCCESS_CHECKMARK: 'icon-success-checkmark',
    THREE_DOTS: 'icon-three-dots',
    THREE_RIGHT_DIRECTED_ARROW: 'icons-three-right-directed-arrows',
    TRACKS_COMPLETE_CHECKMARK: 'icon-tracks-complete-checkmark',
    TRACKS_EMPTY: 'icon-tracks-empty',
    TRANSPARENT_LOGO: 'icon-transparent-logo',
    TRASH_CAN: 'icon-trash-can',
    TRIPLE_CHECKMARK: 'icon-triple-checkmark',
    TWITTER: 'icon-twitter',
    UP_AND_DOWN_ARROWS: 'icon-up-and-down-arrows',
    UP_AND_DOWN_CARETS: 'up-and-down-carets',
    UP_DIRECTION_ARROW: 'icon-up-direction-arrow',
    UPLOAD: 'icon-upload',
    UPLOAD_ARROW: 'icon-upload-arrow',
    VIDEO_ERROR: 'icon-video-error',
    VIDEO: 'icon-video',
    VIEW_MORE_NEXT_ARROW: 'icon-view-more-next-arrow',
    WOMAN: 'icon-woman',
    XLS: 'icon-xls',
    YOUTUBE: 'icon-youtube',
};

export const SVGAttention = () => <symbol id={ ICON_IDS.ATTENTION } viewBox="0 0 16 16"><path d="M7.48456658,3.36090834 C7.77384601,2.88522748 8.23615354,2.87419856 8.53214008,3.36090834 L13.8851518,12.1632114 C14.1744312,12.6388923 13.9533381,13.0245078 13.4044521,13.0245078 L2.61225451,13.0245078 C2.05749201,13.0245078 1.83556836,12.6499212 2.13155489,12.1632114 L7.48456658,3.36090834 Z M8,12 C8.55228475,12 9,11.5522847 9,11 C9,10.4477153 8.55228475,10 8,10 C7.44771525,10 7,10.4477153 7,11 C7,11.5522847 7.44771525,12 8,12 Z M7,6 L7,9 L9,9 L9,6 L7,6 Z" /></symbol>;

export const SVGAudioDisabled = () => (
    <symbol id={ ICON_IDS.AUDIO_DISABLED } viewBox="0 0 16 16">
        <path d="M16,13l-3-2.06L10.35,9.12h0L6.06,6.17,5,5.44,0,2V3L5,6.44v4.83A2,2,0,1,0,6,13V7.12L9.61,9.6A2,2,0,0,0,9,11a2,2,0,0,0,3.82.82L16,14Z" />
        <polygon points="12 4.31 12 9.25 13 9.94 13 4 13 0 5 2.5 5 4.44 7.06 5.86 12 4.31" />
    </symbol>
);

export const SVGAudioEnabled = () => (
    <symbol id={ ICON_IDS.AUDIO_ENABLED } viewBox="0 0 16 16">
        <path d="M12,4.31,6,6.19V13a2,2,0,1,1-1-1.73V2.5L13,0V11a2,2,0,1,1-1-1.73Z" />
    </symbol>
);

export const SVGAudioPlayerMute = () => (
    <symbol id={ ICON_IDS.AUDIO_PLAYER_MUTE } viewBox="0 0 26 21">
        <path fillRule="evenodd" d="M21.518 9.754l3.827-3.826-1.53-1.53-3.827 3.826-3.826-3.827-1.53 1.531 3.825 3.826-3.826 3.826 1.53 1.53 3.827-3.825 3.826 3.826 1.53-1.53-3.826-3.827zM12.768 0v20.02l-7.403-5.663L0 13.885v-7.75l5.365-.472L12.767 0z" />
    </symbol>
);

export const SVGAudioPlayerNext = () => (
    <symbol id={ ICON_IDS.AUDIO_PLAYER_NEXT } viewBox="0 0 30 30">
        <circle cx="15" cy="15" r="15" id="audio-player-next-circle" />
        <path id="audio-player-next-path" d="M18 10.5h3v9h-3v-9zM9 21V9l7.5 6L9 21z" />
    </symbol>
);

export const SVGAudioPlayerNextLite = () => (
    <symbol id={ ICON_IDS.AUDIO_PLAYER_NEXT_LITE } viewBox="0 0 12 12">
        <path id="audio-player-next-lite-path" fillRule="evenodd" d="M9 1.5h3v9H9v-9zM0 12V0l7.5 6L0 12z" />
    </symbol>
);

export const SVGAudioPlayerPause = () => (
    <symbol id={ ICON_IDS.AUDIO_PLAYER_PAUSE } viewBox="0 0 30 30">
        <g fill="none" fillRule="evenodd">
            <circle cx="15" cy="15" r="15" fill="#FF893E" />
            <path fill="#FFF" d="M9 8h4.286v14H9V8zm7.714 0H21v14h-4.286V8z" />
        </g>
    </symbol>
);

export const SVGAudioPlayerPauseLite = () => (
    <symbol id={ ICON_IDS.AUDIO_PLAYER_PAUSE_LITE } viewBox="0 0 12 14">
        <path id="audio-player-pause-lite-path" fillRule="evenodd" d="M0 0h4.286v14H0V0zm7.714 0H12v14H7.714V0z" />
    </symbol>
);

export const SVGAudioPlayerPlay = () => (
    <symbol id={ ICON_IDS.AUDIO_PLAYER_PLAY } viewBox="0 0 30 30">
        <g fill="none" fillRule="evenodd">
            <circle cx="15" cy="15" r="15" id="audio-player-play-circle" />
            <g transform="translate(5 5)">
                <path d="M0 0h16v16H0z" />
                <path id="audio-player-play-triangle" transform="matrix(-1 0 0 1 23.75 0)" d="M16.25 2.5v15L7.5 10z" />
            </g>
        </g>
    </symbol>
);

export const SVGAudioPlayerPrevious = () => (
    <symbol id={ ICON_IDS.AUDIO_PLAYER_PREVIOUS } viewBox="0 0 30 30">
        <g fill="none" fillRule="evenodd">
            <circle cx="15" cy="15" r="15" id="audio-player-previous-circle" />
            <path id="audio-player-previous-path" d="M9 10.5h3v9H9v-9zM21 9v12l-7.5-6L21 9z" />
        </g>
    </symbol>
);

export const SVGAudioPlayerPreviousLite = () => (
    <symbol id={ ICON_IDS.AUDIO_PLAYER_PREVIOUS_LITE } viewBox="0 0 12 12">
        <path id="audio-player-previous-lite-path" fillRule="evenodd" d="M0 1.5h3v9H0v-9zM12 0v12L4.5 6 12 0z" />
    </symbol>
);

export const SVGAudioPlayerVolume = () => (
    <symbol id={ ICON_IDS.AUDIO_PLAYER_VOLUME } viewBox="0 0 23 20">
        <path fillRule="nonzero" d="M12.754 0v20L5.36 14.342 0 13.871V6.129l5.36-.471L12.754 0zm3.574 3.524A9.585 9.585 0 0 1 18.834 10a9.585 9.585 0 0 1-2.506 6.476l-1.663-1.513c1.191-1.29 1.91-3.052 1.91-4.963 0-1.91-.719-3.648-1.91-4.963l1.663-1.513zM19.107.993A13.354 13.354 0 0 1 22.58 10c0 3.474-1.315 6.625-3.474 9.007l-1.663-1.513A11.076 11.076 0 0 0 20.347 10c0-2.878-1.116-5.509-2.903-7.494L19.107.993z" />
    </symbol>
);

export const SVGCalendar = () => <symbol id={ ICON_IDS.CALENDAR } viewBox="0 0 17 17"><path d="M15.64 2.79c-.244-.24-.533-.36-.866-.36h-1.23v-.912c0-.417-.152-.775-.453-1.072C12.79.15 12.428 0 12.005 0h-.616c-.423 0-.785.15-1.087.446-.3.297-.45.655-.45 1.072v.91H6.155v-.91c0-.417-.15-.775-.452-1.072C5.402.15 5.04 0 4.617 0H4c-.422 0-.784.15-1.086.446-.3.297-.452.655-.452 1.072v.91h-1.23c-.334 0-.623.12-.867.36-.243.24-.365.526-.365.855v12.143c0 .328.122.613.365.854.244.24.533.36.866.36h13.544c.333 0 .622-.12.865-.36s.365-.526.365-.854V3.643c0-.33-.122-.614-.366-.854zM4 15.785H1.23v-2.733H4v2.733zm0-3.34H1.23V9.41H4v3.036zm0-3.642H1.23V6.07H4v2.734zm-.215-4.34c-.06-.06-.09-.132-.09-.214V1.518c0-.082.03-.153.09-.213s.133-.09.216-.09h.617c.083 0 .155.03.216.09.06.06.092.13.092.213V4.25c0 .082-.03.153-.092.213-.06.06-.133.09-.216.09H4c-.082 0-.154-.03-.215-.09zm3.91 11.322H4.617v-2.733h3.078v2.733zm0-3.34H4.617V9.41h3.078v3.036zm0-3.642H4.617V6.07h3.078v2.734zm3.693 6.982H8.31v-2.733h3.078v2.733zm0-3.34H8.31V9.41h3.078v3.036zm0-3.642H8.31V6.07h3.078v2.734zm-.216-4.34c-.06-.06-.09-.132-.09-.214V1.518c0-.082.03-.153.09-.213s.133-.09.216-.09h.616c.083 0 .155.03.216.09.06.06.09.13.09.213V4.25c0 .082-.03.153-.09.213s-.133.09-.216.09h-.616c-.083 0-.156-.03-.216-.09zm3.602 11.322h-2.77v-2.733h2.77v2.733zm0-3.34h-2.77V9.41h2.77v3.036zm0-3.642h-2.77V6.07h2.77v2.734z" fill="#BAB7B6" fillRule="evenodd" /></symbol>;

export const SVGCompleteCheckmark = () =>
    <symbol id={ ICON_IDS.COMPLETE_CHECKMARK } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(-260.000000, -90.000000)">
                <g transform="translate(102.000000, 64.000000)">
                    <polygon points="161 34.5 162.5 33 164.5 35 169.5 30 171 31.5 164.5 38" />
                </g>
                <g transform="translate(100.000000, 64.000000)" />
            </g>
        </g>
    </symbol>;

export const SVGChevron = () =>
    <symbol viewBox="0 0 13 8" id={ ICON_IDS.CHEVRON }>
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(-195.000000, -84.000000)">
                <path d="M195.134,85.325 L200.97,91.16 C201.037,91.25 201.15,91.295 201.239,91.295 C201.352,91.295 201.464,91.25 201.531,91.16 L207.367,85.325 C207.457,85.235 207.502,85.145 207.502,85.033 C207.502,84.943 207.457,84.831 207.367,84.741 L206.739,84.135 C206.671,84.045 206.559,84 206.469,84 C206.357,84 206.245,84.045 206.178,84.135 L201.239,89.051 L196.324,84.135 C196.234,84.045 196.144,84 196.032,84 C195.92,84 195.83,84.045 195.74,84.135 L195.134,84.741 C195.044,84.831 195,84.943 195,85.033 C195,85.145 195.044,85.235 195.134,85.325" />
            </g>
        </g>
    </symbol>;

export const SVGInfo = () => <symbol id={ ICON_IDS.INFO } viewBox="0 0 10 10"><g fill="none" fillRule="evenodd"><rect fill="#A8A8A8" width="10" height="10" rx="72" /><path d="M5.078 1.157c.243 0 .45.085.62.256.17.17.256.377.256.62 0 .245-.085.454-.256.624-.17.17-.377.256-.62.256-.242 0-.45-.085-.62-.256-.17-.17-.256-.377-.256-.62 0-.24.088-.446.263-.62.176-.174.38-.26.613-.26zm.776 2.135V6.83c0 .168.01.272.028.31.02.04.054.068.103.09.05.02.16.03.333.03h.258v.924H3.618V7.26h.254c.166 0 .272-.01.318-.026.046-.018.08-.047.103-.09.022-.04.034-.123.034-.248V4.613h-.71v-.9c.253-.013.495-.04.726-.082.232-.04.438-.09.62-.147.118-.038.264-.102.436-.19h.454z" fill="#FFF" /></g></symbol>;

export const SVGCloseButton = () => <symbol id={ ICON_IDS.CLOSE } viewBox="0 0 15 16"><path d="M7.425 6.51L1.762.848C1.382.468.744.463.354.854c-.394.393-.394 1.02-.006 1.408L6.01 7.925.348 13.587c-.38.38-.385 1.018.006 1.41.393.392 1.02.392 1.408.004l5.663-5.66L13.087 15c.38.38 1.018.386 1.41-.004.392-.394.392-1.02.004-1.41l-5.66-5.66L14.5 2.26c.38-.38.386-1.018-.004-1.408-.394-.394-1.02-.394-1.41-.006L7.427 6.51z" fillRule="evenodd" /></symbol>;

export const SVGDigital = () => <symbol id={ ICON_IDS.DIGITAL } viewBox="0 0 58 69"><g fillRule="evenodd"><path d="M25.277 34.5h3.65l-1.825-5.517" /><path d="M52.778 0H18.544c-.066 0-.12.03-.183.037-.062.01-.12.02-.18.038-.244.066-.472.172-.646.348L.42 17.67c-.175.175-.28.402-.346.65-.017.063-.028.12-.037.183-.008.064-.037.118-.037.184v43.126c0 .793.64 1.437 1.426 1.437h33.037c.41 0 .802-.18 1.073-.492.815-.937 1.977-1.636 3.36-2.024.616-.172 1.044-.74 1.044-1.383v-12.4l13.184-3.322c.636-.164 1.08-.74 1.08-1.4V1.438C54.205.643 53.567 0 52.78 0zm-35.66 4.908v10.905c0 .793-.64 1.437-1.427 1.437H4.87L17.117 4.908zm-.02 37.015c-.112.67-.674 1.173-1.35 1.202h-.057c-.652 0-1.226-.446-1.383-1.09l-1.47-5.92-1.468 5.923c-.167.662-.857 1.113-1.442 1.09-.676-.03-1.24-.532-1.352-1.202l-2.853-17.25c-.128-.785.4-1.526 1.175-1.656.76-.135 1.51.397 1.64 1.182l1.724 10.433 1.19-4.795c.316-1.28 2.45-1.28 2.77 0l1.19 4.795 1.722-10.433c.132-.785.885-1.317 1.64-1.182.78.13 1.307.87 1.176 1.653l-2.853 17.25zm16.16 1.13c-.15.05-.3.072-.45.072-.596 0-1.152-.382-1.355-.983l-1.575-4.767h-5.55l-1.58 4.767c-.25.753-1.058 1.16-1.805.908-.747-.253-1.15-1.066-.9-1.82l5.704-17.25c.39-1.173 2.32-1.173 2.708 0l5.705 17.25c.25.757-.154 1.57-.9 1.823zm15.17-18.16l-5.706 17.25c-.197.585-.742.982-1.355.982-.614 0-1.158-.397-1.355-.983l-5.706-17.25c-.248-.753.157-1.567.9-1.82.752-.247 1.556.158 1.807.908l4.35 13.16 4.352-13.16c.254-.753 1.064-1.152 1.805-.908.75.253 1.156 1.067.908 1.82z" /><path d="M56.51 46.302c-.348-.273-.8-.368-1.224-.262l-11.41 2.875c-.638.16-1.083.74-1.083 1.398v13.095c-.442-.095-.916-.158-1.426-.158-2.48 0-4.28 1.21-4.28 2.875S38.887 69 41.367 69c2.48 0 4.28-1.21 4.28-2.875V51.437l8.558-2.157v11.256c-.442-.098-.916-.16-1.427-.16-2.48 0-4.28 1.21-4.28 2.874 0 1.665 1.8 2.875 4.28 2.875 2.48 0 4.28-1.21 4.28-2.875V47.437c0-.442-.203-.862-.548-1.135z" /></g></symbol>;

export const SVGDigitalAudio = () =>
    <symbol id={ ICON_IDS.DIGITAL_AUDIO } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M13,0.5 L13,11.5 L12.9862678,11.5 C12.8619067,12.6249876 11.9081384,13.5 10.75,13.5 C9.50735931,13.5 8.5,12.4926407 8.5,11.25 C8.5,10.0073593 9.50735931,9 10.75,9 C10.8345023,9 10.9179165,9.00465833 11,9.01373219 L11,3.97777785 L6,5.42222224 L6,13.5 L5.98626781,13.5 C5.86190673,14.6249876 4.90813841,15.5 3.75,15.5 C2.50735931,15.5 1.5,14.4926407 1.5,13.25 C1.5,12.0073593 2.50735931,11 3.75,11 C3.83450227,11 3.91791654,11.0046583 4,11.0137322 L4,3 L13,0.5 Z" fill="#6D6565" />
        </g>
    </symbol>;

export const SVGExplicit = () => <symbol id={ ICON_IDS.EXPLICIT } viewBox="0 0 54 15"><rect stroke="#D4645A" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="54" height="15" fill="white" strokeWidth="2" /><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-141.000000, -144.000000)"><g transform="translate(77.000000, 86.000000)"><g transform="translate(64.000000, 58.000000)"><path d="M5.76,3.86 L10.9,3.86 L10.9,4.94 L7.01,4.94 L7.01,6.81 L10.61,6.81 L10.61,7.83 L7.01,7.83 L7.01,9.92 L10.97,9.92 L10.97,11 L5.76,11 L5.76,3.86 Z M11.44,3.86 L12.93,3.86 L14.55,6.38 L16.24,3.86 L17.64,3.86 L15.28,7.3 L17.81,11 L16.29,11 L14.51,8.27 L12.7,11 L11.27,11 L13.8,7.3 L11.44,3.86 Z M18.54,3.86 L21.69,3.86 C22.1966692,3.86 22.6099984,3.9333326 22.93,4.08 C23.2500016,4.2266674 23.4966658,4.4099989 23.67,4.63 C23.8433342,4.8500011 23.9616663,5.0899987 24.025,5.35 C24.0883336,5.6100013 24.12,5.8499989 24.12,6.07 C24.12,6.2900011 24.0883336,6.52833205 24.025,6.785 C23.9616663,7.04166795 23.8433342,7.2799989 23.67,7.5 C23.4966658,7.7200011 23.2500016,7.90166595 22.93,8.045 C22.6099984,8.18833405 22.1966692,8.26 21.69,8.26 L19.79,8.26 L19.79,11 L18.54,11 L18.54,3.86 Z M19.79,7.24 L21.62,7.24 C21.7600007,7.24 21.9033326,7.2200002 22.05,7.18 C22.1966674,7.1399998 22.331666,7.07500045 22.455,6.985 C22.5783339,6.89499955 22.6783329,6.77500075 22.755,6.625 C22.831667,6.47499925 22.87,6.2866678 22.87,6.06 C22.87,5.8266655 22.836667,5.6333341 22.77,5.48 C22.703333,5.3266659 22.6133339,5.20500045 22.5,5.115 C22.3866661,5.02499955 22.2566674,4.9633335 22.11,4.93 C21.9633326,4.8966665 21.8066675,4.88 21.64,4.88 L19.79,4.88 L19.79,7.24 Z M25.21,3.86 L26.46,3.86 L26.46,9.92 L30.09,9.92 L30.09,11 L25.21,11 L25.21,3.86 Z M30.95,3.86 L32.2,3.86 L32.2,11 L30.95,11 L30.95,3.86 Z M38.55,6.13 C38.4966664,5.9233323 38.4233338,5.7333342 38.33,5.56 C38.2366662,5.3866658 38.1166674,5.2366673 37.97,5.11 C37.8233326,4.9833327 37.6516677,4.88500035 37.455,4.815 C37.2583323,4.74499965 37.0300013,4.71 36.77,4.71 C36.3899981,4.71 36.0616681,4.7866659 35.785,4.94 C35.5083319,5.0933341 35.2833342,5.29833205 35.11,5.555 C34.9366658,5.81166795 34.8083337,6.1033317 34.725,6.43 C34.6416663,6.7566683 34.6,7.0899983 34.6,7.43 C34.6,7.7700017 34.6416663,8.1033317 34.725,8.43 C34.8083337,8.7566683 34.9366658,9.04833205 35.11,9.305 C35.2833342,9.56166795 35.5083319,9.7666659 35.785,9.92 C36.0616681,10.0733341 36.3899981,10.15 36.77,10.15 C37.0500014,10.15 37.2966656,10.1016671 37.51,10.005 C37.7233344,9.90833285 37.9066659,9.77500085 38.06,9.605 C38.2133341,9.43499915 38.3333329,9.2366678 38.42,9.01 C38.5066671,8.7833322 38.5633332,8.5400013 38.59,8.28 L39.81,8.28 C39.7833332,8.7066688 39.6916674,9.0966649 39.535,9.45 C39.3783325,9.8033351 39.166668,10.108332 38.9,10.365 C38.633332,10.6216679 38.3200018,10.8199993 37.96,10.96 C37.5999982,11.1000007 37.2033355,11.17 36.77,11.17 C36.236664,11.17 35.7583354,11.0716676 35.335,10.875 C34.9116645,10.6783323 34.5533348,10.4100017 34.26,10.07 C33.9666652,9.7299983 33.7416675,9.3333356 33.585,8.88 C33.4283326,8.4266644 33.35,7.9433359 33.35,7.43 C33.35,6.9233308 33.4283326,6.4433356 33.585,5.99 C33.7416675,5.5366644 33.9666652,5.1400017 34.26,4.8 C34.5533348,4.4599983 34.9116645,4.190001 35.335,3.99 C35.7583354,3.789999 36.236664,3.69 36.77,3.69 C37.170002,3.69 37.5466649,3.74499945 37.9,3.855 C38.2533351,3.96500055 38.5649986,4.12499895 38.835,4.335 C39.1050014,4.54500105 39.3233325,4.7999985 39.49,5.1 C39.6566675,5.4000015 39.7599998,5.7433314 39.8,6.13 L38.55,6.13 Z M40.95,3.86 L42.2,3.86 L42.2,11 L40.95,11 L40.95,3.86 Z M43.05,3.86 L48.83,3.86 L48.83,4.94 L46.56,4.94 L46.56,11 L45.31,11 L45.31,4.94 L43.05,4.94 L43.05,3.86 Z" fill="#D4645A" /></g></g></g></g></symbol>;

export const SVGCleanVersion = () =>
    <symbol id={ ICON_IDS.CLEAN_VERSION } viewBox="0 0 42 15">
        <rect x="0" y="0" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" width="42" height="15" strokeWidth="2" fill="#ffffff" stroke="#4a4a4a" />
        <g transform="translate(2.4406788,0.13559322)">
            <path stroke="#4a4a4a" strokeWidth="0.40000001" fill="#4a4a4a" d="m 8.8421423,4.5158031 0,1.0049549 Q 8.3608963,5.0725387 7.8135969,4.8507881 7.2710156,4.6290374 6.6576628,4.6290374 q -1.2078332,0 -1.8494945,0.7407415 -0.6416614,0.7360233 -0.6416614,2.1325804 0,1.391839 0.6416614,2.1325805 0.6416613,0.7360232 1.8494945,0.7360232 0.6133528,0 1.1559341,-0.221751 0.5472994,-0.2217501 1.0285454,-0.6699695 l 0,0.9955185 q -0.5001184,0.339703 -1.0615721,0.509555 -0.5567356,0.169851 -1.1795246,0.169851 -1.5994353,0 -2.5194645,-0.976646 -0.9200292,-0.9813644 -0.9200292,-2.6751617 0,-1.6985154 0.9200292,-2.6751617 0.9200292,-0.9813645 2.5194645,-0.9813645 0.6322252,0 1.1889608,0.1698516 0.5614537,0.1651334 1.0521359,0.5001184 z" />
            <path stroke="#4a4a4a" strokeWidth="0.40000001" fill="#4a4a4a" d="m 10.323625,3.9732218 0.953056,0 0,6.2420442 3.430057,0 0,0.802077 -4.383113,0 0,-7.0441212 z" />
            <path stroke="#4a4a4a" strokeWidth="0.40000001" fill="#4a4a4a" d="m 15.702257,3.9732218 4.453885,0 0,0.8020767 -3.500829,0 0,2.0853994 3.354568,0 0,0.8020768 -3.354568,0 0,2.5524913 3.585755,0 0,0.802077 -4.538811,0 0,-7.0441212 z" />
            <path stroke="#4a4a4a" strokeWidth="0.40000001" fill="#4a4a4a" d="m 24.171243,4.9121233 -1.292759,3.5055471 2.590236,0 -1.297477,-3.5055471 z m -0.537863,-0.9389015 1.080444,0 2.684598,7.0441212 -0.990801,0 -0.641661,-1.8070321 -3.17528,0 -0.641662,1.8070321 -1.004955,0 2.689317,-7.0441212 z" />
            <path stroke="#4a4a4a" strokeWidth="0.40000001" fill="#4a4a4a" d="m 28.422251,3.9732218 1.283322,0 3.123382,5.8929048 0,-5.8929048 0.924747,0 0,7.0441212 -1.283323,0 -3.123381,-5.8929052 0,5.8929052 -0.924747,0 0,-7.0441212 z" />
        </g>
    </symbol>;

export const SVGFilm = () => <symbol id={ ICON_IDS.FILM } viewBox="0 0 69 69"><path d="M0 1.166v66.668C0 68.514.486 69 1.166 69h66.668c.68 0 1.166-.486 1.166-1.166V1.166C69 .486 68.514 0 67.834 0H1.166C.486 0 0 .486 0 1.166zm22.546 3.402h6.415c.68 0 1.167.486 1.167 1.166v6.414c0 .68-.486 1.166-1.166 1.166h-6.414c-.68 0-1.166-.486-1.166-1.166V5.734c0-.68.486-1.166 1.166-1.166zm20.02 28.28c.875.875.875 2.43 0 3.304l-12.73 12.73c-1.46 1.46-3.985.39-3.985-1.65V21.768c0-2.14 2.527-3.11 3.985-1.653l12.73 12.73zM11.468 64.432H5.054c-.68 0-1.167-.486-1.167-1.166v-6.414c0-.68.486-1.166 1.167-1.166h6.414c.68 0 1.166.486 1.166 1.166v6.414c0 .68-.486 1.166-1.166 1.166zm0-51.118H5.054c-.68 0-1.167-.486-1.167-1.166V5.734c0-.68.486-1.166 1.167-1.166h6.414c.68 0 1.166.486 1.166 1.166v6.414c0 .583-.486 1.166-1.166 1.166zM28.96 64.432h-6.414c-.68 0-1.166-.486-1.166-1.166v-6.414c0-.68.486-1.166 1.166-1.166h6.415c.68 0 1.167.486 1.167 1.166v6.414c0 .68-.486 1.166-1.166 1.166zm17.494 0H40.04c-.68 0-1.167-.486-1.167-1.166v-6.414c0-.68.486-1.166 1.166-1.166h6.414c.68 0 1.166.486 1.166 1.166v6.414c0 .68-.486 1.166-1.166 1.166zm0-51.118H40.04c-.68 0-1.167-.486-1.167-1.166V5.734c0-.68.486-1.166 1.166-1.166h6.414c.68 0 1.166.486 1.166 1.166v6.414c0 .583-.486 1.166-1.166 1.166zm17.492 51.118h-6.414c-.68 0-1.166-.486-1.166-1.166v-6.414c0-.68.486-1.166 1.166-1.166h6.414c.68 0 1.167.486 1.167 1.166v6.414c0 .68-.486 1.166-1.167 1.166zm0-51.118h-6.414c-.68 0-1.166-.486-1.166-1.166V5.734c0-.68.486-1.166 1.166-1.166h6.414c.68 0 1.167.486 1.167 1.166v6.414c0 .583-.486 1.166-1.167 1.166z" fillRule="evenodd" /></symbol>;

export const SVGPhysical = () => <symbol id={ ICON_IDS.PHYSICAL } viewBox="0 0 69 69"><g fillRule="evenodd"><path d="M25.743 25.74c4.808-4.807 12.617-4.824 17.452-.057L55.35 10.24C42.785-.577 23.81-.03 11.89 11.89-.03 23.81-.574 42.786 10.24 55.348l15.445-12.155c-4.768-4.834-4.75-12.644.058-17.452zM58.76 13.65L43.317 25.805c4.766 4.835 4.75 12.644-.058 17.452-4.81 4.807-12.617 4.824-17.452.057L13.652 58.758c12.562 10.816 31.538 10.27 43.458-1.65 11.92-11.92 12.465-30.896 1.65-43.458z" /><path d="M42.74 26.26c-4.55-4.55-11.928-4.55-16.478 0-4.55 4.55-4.55 11.93 0 16.477 4.55 4.55 11.927 4.55 16.478.002 4.55-4.552 4.55-11.93 0-16.48zM29.765 39.235c-2.616-2.615-2.616-6.857 0-9.473 2.615-2.616 6.856-2.615 9.473 0 2.614 2.616 2.614 6.857 0 9.474-2.617 2.615-6.858 2.615-9.473 0z" /><path d="M10.52 58.48c-13.225-13.223-13.225-34.74 0-47.963 13.223-13.223 34.74-13.223 47.962 0 13.224 13.224 13.224 34.74 0 47.965-13.223 13.223-34.74 13.223-47.963-.002zm47.443-47.444C45.025-1.9 23.975-1.9 11.038 11.036-1.9 23.973-1.9 45.023 11.038 57.96c12.937 12.938 33.99 12.938 46.925.002 12.937-12.937 12.937-33.988 0-46.926z" /></g></symbol>;

export const SVGPhysicalAudio = () =>
    <symbol id={ ICON_IDS.PHYSICAL_AUDIO } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 Z M8,11.5 C9.93299662,11.5 11.5,9.93299662 11.5,8 C11.5,6.06700338 9.93299662,4.5 8,4.5 C6.06700338,4.5 4.5,6.06700338 4.5,8 C4.5,9.93299662 6.06700338,11.5 8,11.5 Z M8,9.5 C7.17157288,9.5 6.5,8.82842712 6.5,8 C6.5,7.17157288 7.17157288,6.5 8,6.5 C8.82842712,6.5 9.5,7.17157288 9.5,8 C9.5,8.82842712 8.82842712,9.5 8,9.5 Z" fill="#6D6565" />
        </g>
    </symbol>;

export const SVGStatusComplete = () => <symbol id={ ICON_IDS.STATUS_COMPLETE } viewBox="0 0 12 12"><path d="M6 0C2.686 0 0 2.686 0 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm2.59 3.34l.82.75-4.5 4.98-2.32-2.32.785-.786L4.84 7.43l3.75-4.09z" fill="#76A40B" fillRule="evenodd" /></symbol>;

export const SVGStatusInProgress = () => <symbol id={ ICON_IDS.STATUS_IN_PROGRESS } viewBox="0 0 12 12"><circle cx="6" cy="6" r="6" fill="#FF893E" fillRule="evenodd" /></symbol>;

export const SVGStatusRed = () => <symbol id={ ICON_IDS.STATUS_RED } viewBox="0 0 12 12"><circle cx="6" cy="6" r="6" fill="#D56258" fillRule="evenodd" /></symbol>;

export const SVGStatusSubmitted = () => <symbol id={ ICON_IDS.STATUS_SUBMITTED } viewBox="0 0 12 12"><circle cx="24" cy="49" r="6" transform="translate(-18 -43)" fill="#1273CB" fillRule="evenodd" /></symbol>;

export const SVGTrashCan = () =>
    <symbol id={ ICON_IDS.TRASH_CAN } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g>
                <path d="M2,2 L14,2 L14,4 L2,4 L2,2 Z M6,1 L10,1 L10,2 L6,2 L6,1 Z M3,5 L13,5 L13,15 L3,15 L3,5 Z" />
            </g>
        </g>
    </symbol>;

export const SVGLoadingRing = () =>
    <symbol id={ ICON_IDS.LOADING_RING } viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-ring-alt">
        <rect x="0" y="0" width="100" height="100" fill="none" className="bk" />
        <circle cx="50" cy="50" r="40" stroke="#ffddb1" fill="none" strokeWidth="10" strokeLinecap="round" />
        <circle cx="50" cy="50" r="40" stroke="#faa635" fill="none" strokeWidth="6" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502" />
            <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4" />
        </circle>
    </symbol>;

export const SVGRightDirectionArrow = () =>
    <symbol id={ ICON_IDS.RIGHT_DIRECTION_ARROW } viewBox="0 0 12 22">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-607.000000, -229.000000)" fill="#BAB7B6">
                <g transform="translate(400.000000, 214.000000)">
                    <path d="M218.137372,25.7086456 L218.222169,25.6238482 L207.598321,15 L207,15.5983211 L217.110325,25.7086456 L207,35.8189702 L207.598321,36.4172913 L218.222169,25.7934431 L218.137372,25.7086456 Z" />
                </g>
            </g>
        </g>
    </symbol>;

export const SVGSuccessCheckmark = () => <symbol id={ ICON_IDS.SUCCESS_CHECKMARK } viewBox="0 0 106 106" ><g fill="none" fillRule="evenodd"><circle fill="#76A40B" cx="53" cy="53" r="53" /><path d="M32.565 51.105l13.538 10.21 28.42-37.207c1.566-2.236 4.648-2.78 6.883-1.214l.376.277c2.235 1.566 2.78 4.647 1.213 6.883L51.982 77.827c-1.17 1.672-2.333 2.253-4.372 2.388-2.04.135-3.273-.622-4.497-1.846L25.466 58.19c-1.955-1.952-1.955-5.12 0-7.074l.024-.012c1.954-1.954 5.12-1.954 7.075 0z" fill="#FFF" /></g></symbol>;

export const SVGUpload = () => <symbol id={ ICON_IDS.UPLOAD } viewBox="0 0 24 20"><path d="M19.397 5.886C18.727 2.483 15.755 0 12.21 0 9.79 0 7.578 1.16 6.205 3.123 2.69 3.33 0 5.873 0 9.08c0 3.323 2.67 6.026 5.953 6.026.467 0 .845-.378.845-.844 0-.466-.378-.844-.845-.844-2.35 0-4.265-1.946-4.265-4.337 0-2.44 2.142-4.283 4.982-4.283.294 0 .567-.153.72-.404 1.035-1.694 2.837-2.705 4.82-2.705 2.92 0 5.333 2.19 5.613 5.09.042.434.406.764.84.764 2.284 0 3.648 1.085 3.648 2.902 0 1.612-1.333 2.974-2.912 2.974h-2.503c-.466 0-.844.378-.844.844 0 .466.38.844.845.844h2.503c2.538 0 4.602-2.092 4.602-4.662 0-2.572-1.782-4.304-4.603-4.558zM12.18 8.112c-.316-.317-.876-.317-1.193 0l-2.975 2.976c-.33.33-.33.864 0 1.193.33.33.864.33 1.193 0l1.5-1.498v7.982c0 .466.378.844.844.844.465 0 .843-.378.843-.844v-8.052l1.57 1.57c.165.164.38.247.597.247.215 0 .43-.084.596-.25.33-.328.33-.862 0-1.192L12.18 8.112z" fill="#4E4E4E" fillRule="evenodd" /></symbol>;

export const SVGSearch = () =>
    <symbol id={ ICON_IDS.SEARCH } width="16px" height="16px" viewBox="0 0 16 16">
        <defs>
            <path d="M12.1237341,10.1237341 L15,13 L13,15 L10.1237341,12.1237341 C9.21383771,12.6796483 8.14432993,13 7,13 C3.6862915,13 1,10.3137085 1,7 C1,3.6862915 3.6862915,1 7,1 C10.3137085,1 13,3.6862915 13,7 C13,8.14432993 12.6796483,9.21383771 12.1237341,10.1237341 Z M7,11 C9.209139,11 11,9.209139 11,7 C11,4.790861 9.209139,3 7,3 C4.790861,3 3,4.790861 3,7 C3,9.209139 4.790861,11 7,11 Z" id="path-search" />
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Icon/Glyph/Search">
                <rect x="0" y="0" width="16" height="16" />
                <mask id="mask-search" fill="white">
                    <use href="#path-search" />
                </mask>
                <use fill="#6D6565" href="#path-search" />
            </g>
        </g>
    </symbol>;

export const SVGThreeRightDirectedArrows = () =>
    <symbol id={ ICON_IDS.THREE_RIGHT_DIRECTED_ARROW } viewBox="0 0 30 16">
        <g id="TerritoryRestrictions" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Country-Selected" transform="translate(-768.000000, -806.000000)" strokeWidth="2" stroke="#FFFFFF">
                <g id="Move-Button" transform="translate(400.000000, 781.000000)">
                    <g id="Group" transform="translate(369.000000, 26.000000)">
                        <polyline id="Line" transform="translate(23.500000, 7.000000) scale(1, -1) rotate(-270.000000) translate(-23.500000, -7.000000) " points="16.5 10.5 23.5 3.5 30.5 10.5"></polyline>
                        <polyline id="Line" strokeOpacity="0.6" transform="translate(13.500000, 7.000000) scale(1, -1) rotate(-270.000000) translate(-13.500000, -7.000000) " points="6.5 10.5 13.5 3.5 20.5 10.5"></polyline>
                        <polyline id="Line" strokeOpacity="0.3" transform="translate(3.500000, 7.000000) scale(1, -1) rotate(-270.000000) translate(-3.500000, -7.000000) " points="-3.5 10.5 3.5 3.5 10.5 10.5"></polyline>
                    </g>
                </g>
            </g>
        </g>
    </symbol>;

export const SVGThreeDots = () =>
    <symbol id={ ICON_IDS.THREE_DOTS } width="100%" height="100%" viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g>
                <path d="M2,10 C0.8954305,10 0,9.1045695 0,8 C0,6.8954305 0.8954305,6 2,6 C3.1045695,6 4,6.8954305 4,8 C4,9.1045695 3.1045695,10 2,10 Z M8,10 C6.8954305,10 6,9.1045695 6,8 C6,6.8954305 6.8954305,6 8,6 C9.1045695,6 10,6.8954305 10,8 C10,9.1045695 9.1045695,10 8,10 Z M14,10 C12.8954305,10 12,9.1045695 12,8 C12,6.8954305 12.8954305,6 14,6 C15.1045695,6 16,6.8954305 16,8 C16,9.1045695 15.1045695,10 14,10 Z" />
            </g>
        </g>
    </symbol>;

export const SVGCloseRound = () =>
    <symbol id={ ICON_IDS.CLOSE_ROUND } viewBox="0 0 22 22" >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-778.000000, -388.000000)" fill="#BAB7B7">
                <path d="M790.44375,399.155 L794.31,395.28875 L793.02125,394 L789.155,397.86625 L785.28875,394 L784,395.28875 L787.86625,399.155 L784,403.02125 L785.28875,404.31 L789.155,400.44375 L793.02125,404.31 L794.31,403.02125 L790.44375,399.155 Z M789,410 C795.075132,410 800,405.075132 800,399 C800,392.924868 795.075132,388 789,388 C782.924868,388 778,392.924868 778,399 C778,405.075132 782.924868,410 789,410 Z" />
            </g>
        </g>
    </symbol>;

export const SVGLeftPaginationArrow = () =>
    <symbol id={ ICON_IDS.LEFT_PAGINATION_ARROW } width="8px" height="13px" viewBox="0 0 8 13">
        <path d="M.135 6.532C.045 6.465 0 6.352 0 6.262c0-.112.045-.224.135-.29L5.97.134C6.06.045 6.15 0 6.262 0c.09 0 .202.045.292.135l.606.628c.09.068.135.18.135.27 0 .112-.045.224-.135.29l-4.916 4.94 4.916 4.915c.09.09.135.18.135.292 0 .112-.045.202-.135.292l-.606.606c-.09.09-.202.134-.292.134-.112 0-.202-.044-.292-.134L.135 6.532z" fillRule="evenodd" />
    </symbol>;

export const SVGRightPaginationArrow = () =>
    <symbol id={ ICON_IDS.RIGHT_PAGINATION_ARROW } width="8px" height="13px" viewBox="0 0 8 13">
        <path d="M1.325 12.368L7.16 6.532c.09-.067.135-.18.135-.27 0-.112-.045-.224-.135-.29L1.325.134C1.235.045 1.145 0 1.033 0 .943 0 .83.045.74.135L.136.763C.045.83 0 .943 0 1.033c0 .112.045.224.135.29l4.916 4.94-4.915 4.915c-.09.09-.135.18-.135.292 0 .112.045.202.135.292l.606.606c.09.09.203.134.293.134.112 0 .202-.044.292-.134" fillRule="evenodd" />
    </symbol>;

export const SVGLogo = () =>
    <symbol id={ ICON_IDS.LOGO } width="23px" height="32px" viewBox="0 0 23 32">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
                <path d="M22.8564813,20.4147795 C22.8564813,26.5320372 17.845423,31.4901241 11.6595143,31.4901241 C5.47864249,31.4919928 0.463806583,26.5326601 0.463806583,20.4147795 C0.463806583,14.2981446 5.47864249,9.33943479 11.6588847,9.33943479 C17.845423,9.33943479 22.8564813,14.2981446 22.8564813,20.4147795" fill="#FAA635" />
                <path d="M13.1523173,2.12903099 C11.9887998,1.94839717 11.0443863,1.95213442 10.2347091,1.83877113 C9.23300112,1.76215747 7.33850756,1.50179562 6.7907477,0.619181406 C6.7907477,0.619181406 6.77815552,0.697663686 6.769341,0.842793618 C6.74793429,1.16731162 6.74604546,1.8169705 6.93933544,2.65349194 C7.12318127,3.36045534 7.38887628,4.08299062 7.76601209,4.76877626 C7.88689702,4.98553685 8.0247814,5.20478893 8.17651717,5.42715539 C9.11148658,6.76945154 10.5948455,7.72743366 12.8249206,8.22511098 C15.748825,8.87601561 18.5235119,9.34441779 20.6767748,12.0570395 C20.6818117,12.0464506 20.6843301,12.0327473 20.6899966,12.0209127 C21.0860207,10.5496814 19.5856624,3.12064838 13.1523173,2.12903099" fill="#78A22F" />
            </g>
        </g>
    </symbol>;

export const SVGLoadingArrows = () =>
    <symbol id={ ICON_IDS.LOADING_ARROWS } width="15" height="20" viewBox="0 0 15 20">
        <path
            d="M8.398,13.33l-3.32,3.34L8.408,20v-2.13c1.313-0.268,2.533-0.874,3.54-1.761c1.257-1.09,2.116-2.567,2.44-4.199c0.32-1.564,0.109-3.19-0.601-4.62c-0.685-1.368-1.798-2.475-3.17-3.15c1.21,0.834,2.112,2.043,2.569,3.44c0.445,1.296,0.445,2.704,0,4c-0.434,1.238-1.271,2.295-2.379,3c-0.723,0.477-1.55,0.771-2.41,0.859V13.33z"
        />
        <path
            d="M0.798,12.609c0.684,1.363,1.793,2.466,3.16,3.141c-1.191-0.806-2.092-1.973-2.57-3.33c-0.444-1.296-0.444-2.704,0-4c0.435-1.239,1.273-2.295,2.381-3c0.723-0.476,1.549-0.771,2.41-0.86v2.1l3.329-3.33L6.168,0v2.13c-1.342,0.254-2.591,0.862-3.62,1.76c-1.257,1.09-2.115,2.568-2.439,4.2C-0.157,9.632,0.085,11.218,0.798,12.609z"
        />
    </symbol>;

export const SVGEdit = () =>
    <symbol id={ ICON_IDS.EDIT } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g>
                <path d="M3,13 L9,13 L9,12 L11,12 L11,15 L1,15 L1,5 L4,5 L4,7 L3,7 L3,13 Z M12.1483189,0.851681076 C12.342547,0.657452981 12.661293,0.66129303 12.8559202,0.855920196 L15.1440798,3.1440798 C15.3406491,3.3406491 15.3433518,3.65664816 15.1483189,3.85168108 L8,11 L5,8 L12.1483189,0.851681076 Z M5,8 L8,11 L4,12 L5,8 Z M10.5,2.5 L11.5,1.5 L14.5,4.5 L13.5,5.5 L10.5,2.5 Z M5,8 L6,7 L9,10 L8,11 L5,8 Z" />
            </g>
        </g>
    </symbol>;

export const SVGExternalLink = () =>
    <symbol id={ ICON_IDS.EXTERNAL_LINK } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g id="External-Link">
                <polygon id="Path-13" points="7.5 3 13 3 13 8.5 11 6.5 7.5 10 6 8.5 9.5 5" />
                <polygon id="Path-5" points="6 3 3 3 3 13 13 13 13 10 11 10 11 11 5 11 5 5 6 5" />
            </g>
        </g>
    </symbol>;

export const SVGUpAndDownArrows = () =>
    <symbol id={ ICON_IDS.UP_AND_DOWN_ARROWS } width="8" height="20" viewBox="0 0 8 20">
        <g transform="translate(0,-1032.3622)">
            <g transform="matrix(1.0052379,0,0,1.0669467,-0.21318935,1072.2038)">
                <g transform="translate(-0.00373546,-15.490157)">
                    <path d="m 2.9328611,-18.161699 c 0.841407,0 1.6828139,0 2.5242209,0 0,1.351741 0,2.703482 0,4.055223 -0.841407,0 -1.6828139,0 -2.5242209,0 0,-1.351741 0,-2.703482 0,-4.055223 z" />
                    <path d="m 4.194971,-21.851555 c 1.326386,1.254316 2.652772,2.508632 3.979158,3.762948 -2.6527717,0 -5.3055434,0 -7.95831504,0 1.32638564,-1.254316 2.65277134,-2.508632 3.97915704,-3.762948 z" />
                </g>
                <g transform="matrix(-1,0,0,-1,8.3862075,-40.448189)">
                    <path d="m 2.9328611,-18.161699 c 0.841407,0 1.6828139,0 2.5242209,0 0,1.351741 0,2.703482 0,4.055223 -0.841407,0 -1.6828139,0 -2.5242209,0 0,-1.351741 0,-2.703482 0,-4.055223 z" />
                    <path d="m 4.194971,-21.851555 c 1.326386,1.254316 2.652772,2.508632 3.979158,3.762948 -2.6527717,0 -5.3055434,0 -7.95831504,0 1.32638564,-1.254316 2.65277134,-2.508632 3.97915704,-3.762948 z" />
                </g>
            </g>
        </g>
    </symbol>;

export const SVGDownloadBox = () =>
    <symbol id={ ICON_IDS.DOWNLOAD_BOX } width="120px" height="120px" viewBox="0 0 120 120">
        <g>
            <path fill="#006FB8" d="M112,120H8c-4.4,0-8-3.6-8-8V8c0-4.4,3.6-8,8-8h104c4.4,0,8,3.6,8,8v104C120,116.4,116.4,120,112,120z" />
            <polygon fill="#FFFFFF" points="90,71 60,96 30,71 50,71 50,21 70,21 70,71" />
        </g>
    </symbol>;

export const SVGTripleCheckmark = () =>
    <symbol id={ ICON_IDS.TRIPLE_CHECKMARK } width="16px" height="16px" viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
                <g>
                    <rect x="0" y="0" width="16" height="16" />
                </g>
                <polygon fill="#6D6565" points="3 4.5 4.5 3 6.5 5 11.5 0 13 1.5 6.5 8" />
                <polygon fill="#6D6565" opacity="0.66" points="3 8.5 4.5 7 6.5 9 11.5 4 13 5.5 6.5 12" />
                <polygon fill="#6D6565" opacity="0.33" points="3 12.5 4.5 11 6.5 13 11.5 8 13 9.5 6.5 16" />
            </g>
        </g>
    </symbol>;

export const SVGArtworkEmpty = () =>
    <symbol id={ ICON_IDS.ARTWORK_EMPTY } width="80px" height="81px" viewBox="0 0 80 81">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-5080.000000, -171.000000)">
                <g transform="translate(128.000000, 176.000000)" stroke="#A8A0A0" strokeWidth="2">
                    <path d="M5007.5,35.5039964 C5007.5,37.7129964 5005.709,39.5039964 5003.5,39.5039964 C5001.291,39.5039964 4999.5,37.7129964 4999.5,35.5039964 C4999.5,33.2949964 5001.291,31.5039964 5003.5,31.5039964 C5005.709,31.5039964 5007.5,33.2949964 5007.5,35.5039964 Z M4966,55.0039964 L4981.6,41.0039964 L5018,62.0039964 M4970.3635,17.9990964 C4972.2465,7.76109637 4981.2175,0.00409636688 4991.9995,0.00409636688 C5002.7825,0.00409636688 5011.7535,7.76109637 5013.6365,17.9990964 M4976.5339,18.0049964 C4978.1799,12.7199964 4982.2309,8.49499637 4987.4069,6.61099637 M4966,68.0036964 L5018,68.0036964 L5018,18.0036964 L4966,18.0036964 L4966,68.0036964 Z" />
                </g>
                <g transform="translate(119.000000, 170.000000)" />
            </g>
        </g>
    </symbol>;

export const SVGTracksEmpty = () =>
    <symbol id={ ICON_IDS.TRACKS_EMPTY } width="60px" height="60px" viewBox="0 0 60 60">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-808.000000, -860.000000)" stroke="#A8A0A0" strokeWidth="1.5">
                <g transform="translate(808.000000, 860.000000)">
                    <path d="M11,5 L11,56 L48.5,56 L48.5,14 L39.5,5 L11,5 Z M39.5,5 L39.5,14 L48.5,14 M20,43.999625 L39.5,43.999625 L20,43.999625 Z M20,37.999625 L39.5,37.999625 L20,37.999625 Z M29,31.999625 L39.5,31.999625 L29,31.999625 Z M20.75,19.999625 L20.75,31.249625 L28.25,25.624625 L20.75,19.999625 Z" />
                </g>
            </g>
        </g>
    </symbol>;


export const SVGUpAndDownCarets = () =>
    <symbol id={ ICON_IDS.UP_AND_DOWN_CARETS } width="80px" height="81px" viewBox="0 0 80 81">
        <g>
            <rect id="Bound" x="0" y="0" width="16" height="16" />
            <path d="M8,2 L12,6 L4,6 L8,2 Z M8,14 L4,10 L12,10 L8,14 Z" />
            <g mask="url(#mask-2)">
                <rect x="0" y="0" width="16" height="16" />
            </g>
        </g>
    </symbol>;

export const SVGPlay = () =>
    <symbol id={ ICON_IDS.PLAY } viewBox="0 0 9 12" >
        <g transform="translate(-1105.000000, -248.000000)">
            <g transform="translate(1101.000000, 246.000000)">
                <polygon points="4 14 4 2 13 8" />
            </g>
        </g>
    </symbol>;


export const SVGStop = () =>
    <symbol id={ ICON_IDS.STOP } viewBox="0 0 8 8" >
        <g transform="translate(-1105.000000, -224.000000)">
            <rect x="1105" y="224" width="8" height="8" />
        </g>
    </symbol>;

export const SVGTracksCompleteCheckmark = () =>
    <symbol id={ ICON_IDS.TRACKS_COMPLETE_CHECKMARK } viewBox="0 0 53 54">
        <g>
            <path d="M50.1496177,27.0506304 C50.1496177,13.7829675 39.6213213,3.04042627 26.6496177,3.04042627 C13.6779141,3.04042627 3.14961774,13.7829675 3.14961774,27.0506304 C3.14961774,40.3169205 13.6786534,51.0608344 26.6496177,51.0608344 C39.620582,51.0608344 50.1496177,40.3169205 50.1496177,27.0506304 Z M53.1496177,27.0506304 C53.1496177,41.9603607 41.2911534,54.0608344 26.6496177,54.0608344 C12.008082,54.0608344 0.149617744,41.9603607 0.149617744,27.0506304 C0.149617744,12.1394895 12.0073822,0.0404262694 26.6496177,0.0404262694 C41.2918532,0.0404262694 53.1496177,12.1394895 53.1496177,27.0506304 Z" />
            <polygon points="17.9205073 26.8429646 15.7991869 28.9642849 24.0535027 37.2186007 39.6582302 21.6138731 37.5369098 19.4925528 24.0535027 32.97596" />
        </g>
    </symbol>;

export const SVGViewMoreNextArrow = () =>
    <symbol id={ ICON_IDS.VIEW_MORE_NEXT_ARROW } viewBox="0 0 16 16">
        <g>
            <path d="M10,7 L2,7 L2,8 L10,8 L10,11 L14,7.5 L10,4 L10,7 Z" />
        </g>
    </symbol>;

export const SVGPlus = () => (
    <symbol id={ ICON_IDS.PLUS } viewBox="0 0 16 16">
        <g>
            <path d="M9,7 L9,3 L7,3 L7,7 L3,7 L3,9 L7,9 L7,13 L9,13 L9,9 L13,9 L13,7 L9,7 Z" />
        </g>
    </symbol>
);

export const SVGMan = () => (
    <symbol id={ ICON_IDS.MAN } viewBox="0 0 15 16">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(-1.000000, -1.000000)">
                <g>
                    <g transform="translate(1.000000, 1.000000)">
                        <path d="M13,3.47817464 L10.4750277,6.00314698 C11.4234337,7.06428273 12,8.46480923 12,10 C12,13.3137085 9.3137085,16 6,16 C2.6862915,16 0,13.3137085 0,10 C0,6.6862915 2.6862915,4 6,4 C7.05278274,4 8.04223611,4.27114528 8.90233589,4.74741163 L11.6497475,2 L11,2 C10.4477153,2 10,1.55228475 10,1 C10,0.44771525 10.4477153,1.24337818e-16 11,2.28847549e-17 L14,-1.60812265e-16 C14.2761424,-2.11538796e-16 14.5261424,0.111928813 14.7071068,0.292893219 C14.8880712,0.473857625 15,0.723857625 15,1 L15,4 C15,4.55228475 14.5522847,5 14,5 C13.4477153,5 13,4.55228475 13,4 L13,3.47817464 Z M3.21951232,7.12363343 C1.60947571,8.73367004 1.60947571,11.26633 3.17157288,12.8284271 C4.73367004,14.3905243 7.26632996,14.3905243 8.87636657,12.7804877 C10.3905243,11.26633 10.3905243,8.73367004 8.82842712,7.17157288 C7.26632996,5.60947571 4.73367004,5.60947571 3.21951232,7.12363343 Z"></path>
                    </g>
                </g>
            </g>
        </g>
    </symbol>
);

export const SVGWoman = () => (
    <symbol id={ ICON_IDS.WOMAN } viewBox="0 0 12 18">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g transform="translate(-3.000000, 0.000000)">
                <g>
                    <g transform="translate(3.000000, 0.000000)">
                        <path d="M7,13.5 L8.5,13.5 C9.05228475,13.5 9.5,13.9477153 9.5,14.5 C9.5,15.0522847 9.05228475,15.5 8.5,15.5 L7,15.5 L7,17 C7,17.5522847 6.55228475,18 6,18 C5.44771525,18 5,17.5522847 5,17 L5,15.5 L3.5,15.5 C2.94771525,15.5 2.5,15.0522847 2.5,14.5 C2.5,13.9477153 2.94771525,13.5 3.5,13.5 L5,13.5 L5,12 C5,11.9722556 5.00112987,11.9447751 5.00334609,11.917602 C2.16398661,11.4429033 0,8.97416472 0,6 C0,2.6862915 2.6862915,0 6,0 C9.3137085,0 12,2.6862915 12,6 C12,8.97416472 9.83601339,11.4429033 6.99665391,11.917602 C6.99887013,11.9447751 7,11.9722556 7,12 L7,13.5 Z M3.21951232,3.12363343 C1.60947571,4.73367004 1.60947571,7.26632996 3.17157288,8.82842712 C4.73367004,10.3905243 7.26632996,10.3905243 8.87636657,8.78048768 C10.3905243,7.26632996 10.3905243,4.73367004 8.82842712,3.17157288 C7.26632996,1.60947571 4.73367004,1.60947571 3.21951232,3.12363343 Z"></path>
                    </g>
                </g>
            </g>
        </g>
    </symbol>
);

export const SVGDownDirectionArrow = () => (
    <symbol id={ ICON_IDS.DOWN_DIRECTION_ARROW } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <path d="M7.73028315,11.8725004 C7.79459287,11.9588866 7.90305551,12.0020797 7.98848184,12.0020797 C8.09694449,12.0020797 8.20444729,11.9588866 8.268757,11.8725004 L13.8704207,6.27179651 C13.9568069,6.18541033 14,6.09902416 14,5.99152136 C14,5.90513518 13.9568069,5.79763238 13.8704207,5.7112462 L13.2676372,5.12957927 C13.2023676,5.04319309 13.0948648,5 13.0084786,5 C12.9009758,5 12.793473,5.04319309 12.7291633,5.12957927 L7.98848184,9.84818429 L3.27083667,5.12957927 C3.18445049,5.04319309 3.09806431,5 2.99056151,5 C2.88305871,5 2.79667253,5.04319309 2.71028635,5.12957927 L2.12861942,5.7112462 C2.04223324,5.79763238 2,5.90513518 2,5.99152136 C2,6.09902416 2.04223324,6.18541033 2.12861942,6.27179651 L7.73028315,11.8725004 Z" />
        </g>
    </symbol>
);

export const SVGUpDirectionArrow = () => (
    <symbol id={ ICON_IDS.UP_DIRECTION_ARROW } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <path d="M7.73028315,10.8704207 C7.79459287,10.9568069 7.90305551,11 7.98848184,11 C8.09694449,11 8.20444729,10.9568069 8.268757,10.8704207 L13.8704207,5.26971685 C13.9568069,5.18333067 14,5.09694449 14,4.98944169 C14,4.90305551 13.9568069,4.79555271 13.8704207,4.70916653 L13.2676372,4.1274996 C13.2023676,4.04111342 13.0948648,3.99792033 13.0084786,3.99792033 C12.9009758,3.99792033 12.793473,4.04111342 12.7291633,4.1274996 L7.98848184,8.84610462 L3.27083667,4.1274996 C3.18445049,4.04111342 3.09806431,3.99792033 2.99056151,3.99792033 C2.88305871,3.99792033 2.79667253,4.04111342 2.71028635,4.1274996 L2.12861942,4.70916653 C2.04223324,4.79555271 2,4.90305551 2,4.98944169 C2,5.09694449 2.04223324,5.18333067 2.12861942,5.26971685 L7.73028315,10.8704207 Z" transform="translate(8.000000, 7.498960) scale(1, -1) rotate(-360.000000) translate(-8.000000, -7.498960) "></path>
        </g>
    </symbol>
);

export const SVGDownloadSymbol = () => (
    <symbol id={ ICON_IDS.DOWNLOAD_SYMBOL } viewBox="0 0 16 16">
        <defs>
            <path d="M4,12 L12,12 L12,10 L14,10 L14,14 L12.5,14 L3.5,14 L2,14 L2,10 L4,10 L4,12 Z M9,6 L9,2 L7,2 L7,6 L4,6 L8,10 L12,6 L9,6 Z" id="path-1"></path>
        </defs>
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Icon/Glyph/Download">
                <rect id="Bound" x="0" y="0" width="16" height="16"></rect>
                <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1"></use>
                </mask>
                <use id="Mask" fill="#6D6565" xlinkHref="#path-1"></use>
            </g>
        </g>
    </symbol>
);

export const SVGRefresh = () => (
    <symbol id={ ICON_IDS.REFRESH } viewBox="0 0 16 16">
        <g id="Symbols" stroke="none" strokeWidth="1" fillRule="evenodd">
            <path d="M6,9 L6,16 L2,12.5 L6,9 Z M10,0 L14,3.5 L10,7 L10,0 Z M10,2 L10,5 C4.66666667,5 2,6.33333333 2,9 C2,4.33333333 4.66666667,2 10,2 Z M6,14 L6,11 C11.3333333,11 14,9.66666667 14,7 C14,11.6666667 11.3333333,14 6,14 Z" />
        </g>
    </symbol>
);

export const SVGServerError = () => (
    <symbol id={ ICON_IDS.SERVER_ERROR } viewBox="0 0 80 50">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-647.000000, -1070.000000)">
                <g transform="translate(100.000000, 972.000000)">
                    <g transform="translate(436.000000, 99.000000)">
                        <g transform="translate(112.000000, 0.000000)">
                            <rect fill="#FFFFFF" x="0.0715605119" y="0.169110073" width="60.487783" height="41.350488"></rect>
                            <path d="M6.71977494,8.78934502 C7.67611217,8.78934502 8.45137667,8.01742218 8.45137667,7.06520709 C8.45137667,6.112992 7.67611217,5.34106916 6.71977494,5.34106916 C5.76343771,5.34106916 4.98817321,6.112992 4.98817321,7.06520709 C4.98817321,8.01742218 5.76343771,8.78934502 6.71977494,8.78934502 Z M6.71977494,22.5824485 C7.67611217,22.5824485 8.45137667,21.8105256 8.45137667,20.8583105 C8.45137667,19.9060955 7.67611217,19.1341726 6.71977494,19.1341726 C5.76343771,19.1341726 4.98817321,19.9060955 4.98817321,20.8583105 C4.98817321,21.8105256 5.76343771,22.5824485 6.71977494,22.5824485 Z M6.71977494,36.3755519 C7.67611217,36.3755519 8.45137667,35.6036291 8.45137667,34.651414 C8.45137667,33.6991989 7.67611217,32.9272761 6.71977494,32.9272761 C5.76343771,32.9272761 4.98817321,33.6991989 4.98817321,34.651414 C4.98817321,35.6036291 5.76343771,36.3755519 6.71977494,36.3755519 Z M1.79569844,0.168655367 L58.8352056,0.168655367 L58.8352056,0.168655367 C59.7874207,0.168655367 60.5593435,0.940578212 60.5593435,1.8927933 L60.5593435,12.2376209 L60.5593435,12.2376209 C60.5593435,13.189836 59.7874207,13.9617588 58.8352056,13.9617588 L1.79569844,13.9617588 L1.79569844,13.9617588 C0.843483357,13.9617588 0.0715605119,13.189836 0.0715605119,12.2376209 L0.0715605119,1.8927933 L0.0715605119,1.8927933 C0.0715605119,0.940578212 0.843483357,0.168655367 1.79569844,0.168655367 Z M1.79569844,13.9617588 L58.8352056,13.9617588 L58.8352056,13.9617588 C59.7874207,13.9617588 60.5593435,14.7336817 60.5593435,15.6858967 L60.5593435,26.0307243 L60.5593435,26.0307243 C60.5593435,26.9829394 59.7874207,27.7548623 58.8352056,27.7548623 L1.79569844,27.7548623 L1.79569844,27.7548623 C0.843483357,27.7548623 0.0715605119,26.9829394 0.0715605119,26.0307243 L0.0715605119,15.6858967 L0.0715605119,15.6858967 C0.0715605119,14.7336817 0.843483357,13.9617588 1.79569844,13.9617588 Z M1.79569844,27.7548623 L58.8352056,27.7548623 L58.8352056,27.7548623 C59.7874207,27.7548623 60.5593435,28.5267851 60.5593435,29.4790002 L60.5593435,39.8238278 L60.5593435,39.8238278 C60.5593435,40.7760429 59.7874207,41.5479657 58.8352056,41.5479657 L1.79569844,41.5479657 L1.79569844,41.5479657 C0.843483357,41.5479657 0.0715605119,40.7760429 0.0715605119,39.8238278 L0.0715605119,29.4790002 L0.0715605119,29.4790002 C0.0715605119,28.5267851 0.843483357,27.7548623 1.79569844,27.7548623 Z" stroke="#A8A0A0" strokeWidth="0.862068966" strokeLinecap="square"></path>
                            <path d="M54.5454545,4.3065864 L54.5454545,9.82382778 L54.5454545,4.3065864 Z M51.0822511,4.3065864 L51.0822511,9.82382778 L51.0822511,4.3065864 Z M47.6190476,4.3065864 L47.6190476,9.82382778 L47.6190476,4.3065864 Z M44.1558442,4.3065864 L44.1558442,9.82382778 L44.1558442,4.3065864 Z" stroke="#A8A0A0" strokeWidth="0.862068966" strokeLinecap="square"></path>
                            <ellipse fill="#FFFFFF" cx="56.4502165" cy="26.2068966" rx="13.8528139" ry="13.7931034"></ellipse>
                            <path d="M58.5281385,34.0865517 C53.9594805,32.9993103 50.5627706,28.9068966 50.5627706,24.0248276 C50.5627706,19.78 53.1307359,16.1324138 56.8038095,14.5375862 L56.7965368,25.5551724 L65.1082251,25.5551724 L65.101645,14.5382759 C68.7747186,16.1331034 71.3419913,19.7803448 71.3419913,24.0248276 C71.3419913,28.9068966 67.9452814,32.9993103 63.3766234,34.0865517 L63.3766234,47.2955172 L58.5281385,47.2955172 L58.5281385,34.0865517 Z" stroke="#A8A0A0" strokeWidth="0.862068966" fill="#FFFFFF" transform="translate(60.952381, 30.916552) rotate(-45.000000) translate(-60.952381, -30.916552) "></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </symbol>
);

export const SVGNewProduct = () => (
    <symbol id={ ICON_IDS.NEW_PRODUCT } viewBox="0 0 68 67">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="new_product" transform="translate(-5.000000, -4.000000)">
                <rect x="0" y="0" width="76" height="76"></rect>
                <path d="M38.0473227,23.9923 C39.7173227,22.7413 41.7913227,22.0003 44.0383227,22.0003 C49.5603227,22.0003 54.0383227,26.4763 54.0383227,32.0003 C54.0383227,37.5223 49.5603227,42.0003 44.0383227,42.0003 C43.7033227,42.0003 43.3733227,41.9833 43.0473227,41.9513" stroke="#6D6565" strokeWidth="2"></path>
                <path d="M19.5998227,20.506 C23.9168227,11.342 33.2368227,5 44.0378227,5 C58.9498227,5 71.0378227,17.088 71.0378227,32 C71.0378227,46.911 58.9498227,59 44.0378227,59 C43.7058227,59 43.3758227,58.993 43.0468227,58.982 M6,19.9998 L6,69.9998 L44,69.9998 L44,28.9998 L35,19.9998 L6,19.9998 Z M35,19.9998 L35,28.9998 L44,28.9998" stroke="#6D6565" strokeWidth="2"></path>
                <path d="M19,56.047 C19,57.369 17.928,58.442 16.606,58.442 C15.283,58.442 14.212,57.369 14.212,56.047 C14.212,54.725 15.283,53.653 16.606,53.653 C17.928,53.653 19,54.725 19,56.047 Z" stroke="#6D6565" strokeWidth="2"></path>
                <path d="M32.0079707,53.6534 C32.0079707,54.9754 30.9359707,56.0474 29.6139707,56.0474 C28.2919707,56.0474 27.2199707,54.9754 27.2199707,53.6534 C27.2199707,52.3314 28.2919707,51.2584 29.6139707,51.2584 C30.9359707,51.2584 32.0079707,52.3314 32.0079707,53.6534 Z" stroke="#6D6565" strokeWidth="2"></path>
                <polyline stroke="#6D6565" strokeWidth="2" points="19 56.047 19 38.9998 32 35.9998 32 53.6568"></polyline>
                <path d="M19,42.9998 L32,39.9998 L19,42.9998 Z" stroke="#6D6565" strokeWidth="2"></path>
            </g>
        </g>
    </symbol>
);

export const SVGGoToCatalog = () => (
    <symbol id={ ICON_IDS.GO_TO_CATALOG } viewBox="0 0 66 54">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="go_to_catalog" transform="translate(-6.000000, -11.000000)">
                <rect x="0" y="0" width="76" height="76"></rect>
                <path d="M14.017,19 L14.017,12 L32.7,12 L37.798,20 L70.017,20 L70.017,59 L70.017,60.279 C70.017,62.326 68.406,64 66.435,64 C64.339,64 63.017,62.326 63.017,60.279 L63.017,58.108 L63.017,59 L63.017,58.108 L63.017,27 L30.798,27 L25.7,19 L7.017,19 L7,59.9999416 C7,62.2159416 8.801,64.0099416 11.017,63.9999416 L66.139,64" stroke="#6D6565" strokeWidth="2"></path>
                <path d="M34.017,36.9999416 L54.017,36.9999416 L34.017,36.9999416 Z" stroke="#6D6565" strokeWidth="2"></path>
                <path d="M34.017,44.9999416 L54.017,44.9999416 L34.017,44.9999416 Z" stroke="#6D6565" strokeWidth="2"></path>
                <path d="M34.017,52.9999416 L54.017,52.9999416 L34.017,52.9999416 Z" stroke="#6D6565" strokeWidth="2"></path>
            </g>
        </g>
    </symbol>
);

export const SVGAdvertise = () => (
    <symbol id={ ICON_IDS.ADVERTISE } viewBox="0 0 68 65">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="advertise" transform="translate(-5.000000, -6.000000)">
                <rect x="0" y="0" width="76" height="76"></rect>
                <path d="M62.99985,25.3906 C67.96985,25.3906 71.99985,29.4446 71.99985,34.4446 C71.99985,39.4446 67.96985,43.4966 62.99985,43.4966" stroke="#6D6565" strokeWidth="2"></path>
                <path d="M31.31995,45.9912 L38.10595,69.9982 L24.40995,69.9982 L17.88195,45.8652 M15.20815,24 L6.00015,24 L6.00015,41.956 L15.20815,41.956 M62.99985,58.5 L31.31985,45.991 L18.83985,45.991 C16.71885,45.991 14.99985,44.268 14.99985,42.142 L14.99985,23.859 C14.99985,21.733 16.71885,20.01 18.83985,20.01 L31.31985,20.01 L62.99985,7.5 L62.99985,58.5 Z" stroke="#6D6565" strokeWidth="2"></path>
            </g>
        </g>
    </symbol>
);

export const SVGFilledChevronDown = () => (
    <symbol id={ ICON_IDS.FILLED_CHEVRON_DOWN } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g fill="#6D6565">
                <polygon points="8 10 12 6 4 6"></polygon>
            </g>
        </g>
    </symbol>
);

export const SVGFilledChevronUp = () => (
    <symbol id={ ICON_IDS.FILLED_CHEVRON_UP } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g fill="#6D6565">
                <polygon points="8 6 12 10 4 10"></polygon>
            </g>
        </g>
    </symbol>
);

export const SVGTransparentLogo = () => (
    <symbol id={ ICON_IDS.TRANSPARENT_LOGO } viewBox="0 0 60 60">
        <defs>
            <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="70.7106781%" id="radialGradientTransparentLogo">
                <stop stopColor="#FFFFFF" offset="0%" />
                <stop stopColor="#FBF8F8" offset="100%" />
            </radialGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
                <rect fill="url(#radialGradientTransparentLogo)" x="0" y="0" rx="2" />
                <path d="M32.1095792,18.1151 C32.3805792,18.5911 32.6905792,19.0731 33.0305792,19.5611 C35.1305792,22.5101 38.4605792,24.6151 43.4665792,25.7071 C49.5465792,27.0321 55.3375792,28.0201 60.0005792,32.8921 L60.0005792,26.4191 C57.9795792,20.6381 53.2785792,13.6851 44.2015792,12.3171 C41.5895792,11.9201 39.4695792,11.9281 37.6515792,11.6791 C35.4025792,11.5111 31.1495792,10.9391 29.9205792,9.0001 C29.9205792,9.0001 29.8915792,9.1721 29.8715792,9.4911 C29.8235792,10.2041 29.8195792,11.6311 30.2535792,13.4691 C30.6665792,15.0221 31.2625792,16.6091 32.1095792,18.1151" fill="#CFDEB6" />
                <path d="M57.9999756,59.9999939 C59.1039756,59.9999939 59.9999756,59.1039939 59.9999756,57.9999939 L59.9999756,37.5489939 C55.4069756,32.5419939 48.8099756,29.3999939 41.4749756,29.3999939 C27.6049756,29.3999939 16.3499756,40.6499939 16.3499756,54.5279939 C16.3499756,56.4079939 16.5629756,58.2379939 16.9549756,59.9999939 L57.9999756,59.9999939 Z" fill="#FFD5BB" />
            </g>
        </g>
    </symbol>
);

export const SVGHistory = () => (
    <symbol id={ ICON_IDS.HISTORY } viewBox="0 0 15 16">
        <path
            d="M3.933 4.904L.688 6.181C.301 6.334-.008 6.118 0 5.7L.07 2.22c.008-.416.294-.563.634-.325l1.229.85A7.413 7.413 0 0 1 6.212.346c.485-.09.978-.13 1.472-.124a7.478 7.478 0 0 1 7.036 5.439 7.237 7.237 0 0 1 .228 1.101v.054c.013.109.025.218.032.326v.014a7.478 7.478 0 0 1-5.716 7.818l-.042.01a7.568 7.568 0 0 1-1.708.195 7.418 7.418 0 0 1-4.249-1.34c-.012-.02-.026-.02-.04-.04A7.447 7.447 0 0 1 .178 9.02a.568.568 0 1 1 1.117-.2 6.344 6.344 0 0 0 6.7 5.2h.018c.098 0 .197-.019.297-.03h.024a6.344 6.344 0 0 0 5.287-4.565l.012-.043c.019-.07.036-.138.053-.208l.027-.113.029-.14c.01-.046.024-.124.034-.187 0-.022 0-.046.01-.07a6.378 6.378 0 0 0-.73-4.051l-.025-.044a3.95 3.95 0 0 0-.108-.182l-.063-.102-.08-.12c-.036-.052-.07-.103-.107-.154l-.044-.06c-.051-.067-.1-.135-.153-.201a6.382 6.382 0 0 0-2.944-2.06h-.017a5.28 5.28 0 0 0-.233-.072l-.08-.035-.17-.045-.15-.035-.106-.022-.218-.041h-.04a6.351 6.351 0 0 0-5.641 1.965l1.137.792c.341.237.304.555-.08.708zm6.436 5.663a.51.51 0 0 0 0-.72L8.012 7.488V3.451a.51.51 0 0 0-1.02 0V7.7a.51.51 0 0 0 .15.36l2.506 2.507a.51.51 0 0 0 .721 0z"
        />
    </symbol>
);

export const SVGPdf = () => (
    <symbol id={ ICON_IDS.PDF } viewBox="0 0 23 28">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Icon/PDF" fill="#D54336">
                <path d="M23,6 L23,26 C23,27.1045695 22.1045695,28 21,28 L2,28 C0.8954305,28 1.3527075e-16,27.1045695 0,26 L0,2 C-1.3527075e-16,0.8954305 0.8954305,-1.91384796e-17 2,-2.22044605e-16 L17,-1.75298372e-16 C17,0 18,0 19,1 L22,4 C22.6666667,4.66666667 23,5.33333333 23,6 Z M16,2 L2,2 L2,26 L21,26 L21,7 L17,7 C16.4477153,7 16,6.55228475 16,6 L16,2 Z M3.39400001,18.9325 C3.34899979,18.8874998 3.32650001,18.8350003 3.32650001,18.775 L3.32650001,12.934 C3.32650001,12.8679997 3.3474998,12.8125002 3.38950001,12.7675 C3.43150022,12.7224998 3.48549968,12.7 3.55150001,12.7 L6.09850001,12.7 C6.87850391,12.7 7.49049779,12.8769982 7.93450001,13.231 C8.37850223,13.5850018 8.60050001,14.1039966 8.60050001,14.788 C8.60050001,15.4720034 8.37850223,15.9834983 7.93450001,16.3225 C7.49049779,16.6615017 6.87850391,16.831 6.09850001,16.831 L5.07250001,16.831 L5.07250001,18.775 C5.07250001,18.8350003 5.05150022,18.8874998 5.00950001,18.9325 C4.9674998,18.9775002 4.91350034,19 4.84750001,19 L3.55150001,19 C3.49149971,19 3.43900024,18.9775002 3.39400001,18.9325 Z M6.05350001,15.544 C6.29950124,15.544 6.49299931,15.4795006 6.63400001,15.3505 C6.77500072,15.2214994 6.84550001,15.0310013 6.84550001,14.779 C6.84550001,14.5449988 6.78100066,14.3560007 6.65200001,14.212 C6.52299937,14.0679993 6.32350136,13.996 6.05350001,13.996 L5.04550001,13.996 L5.04550001,15.544 L6.05350001,15.544 Z M9.205,18.9325 C9.15999978,18.8874998 9.1375,18.8350003 9.1375,18.775 L9.1375,12.934 C9.1375,12.8679997 9.15849979,12.8125002 9.2005,12.7675 C9.24250021,12.7224998 9.29649967,12.7 9.3625,12.7 L11.7295,12.7 C12.6175044,12.7 13.3074975,12.9114979 13.7995,13.3345 C14.2915025,13.7575021 14.5494999,14.364996 14.5735,15.157 C14.5795,15.3310009 14.5825,15.5619986 14.5825,15.85 C14.5825,16.1380014 14.5795,16.3659992 14.5735,16.534 C14.5134997,18.1780082 13.580509,19 11.7745,19 L9.3625,19 C9.3024997,19 9.25000023,18.9775002 9.205,18.9325 Z M11.7295,17.65 C12.1075019,17.65 12.3864991,17.5600009 12.5665,17.38 C12.7465009,17.1999991 12.8424999,16.912002 12.8545,16.516 C12.8665001,16.3419991 12.8725,16.1170014 12.8725,15.841 C12.8725,15.5649986 12.8665001,15.3430008 12.8545,15.175 C12.8424999,14.7909981 12.739001,14.5075009 12.544,14.3245 C12.348999,14.1414991 12.0625019,14.05 11.6845,14.05 L10.8295,14.05 L10.8295,17.65 L11.7295,17.65 Z M15.376,18.9325 C15.3309998,18.8874998 15.3085,18.8350003 15.3085,18.775 L15.3085,12.934 C15.3085,12.8679997 15.3294998,12.8125002 15.3715,12.7675 C15.4135002,12.7224998 15.4674997,12.7 15.5335,12.7 L19.7185,12.7 C19.7845003,12.7 19.8399998,12.7224998 19.885,12.7675 C19.9300002,12.8125002 19.9525,12.8679997 19.9525,12.934 L19.9525,13.888 C19.9525,13.9540003 19.9300002,14.0079998 19.885,14.05 C19.8399998,14.0920002 19.7845003,14.113 19.7185,14.113 L16.9645,14.113 L16.9645,15.364 L19.5385,15.364 C19.6045003,15.364 19.6599998,15.3864998 19.705,15.4315 C19.7500002,15.4765002 19.7725,15.5319997 19.7725,15.598 L19.7725,16.552 C19.7725,16.6180003 19.7500002,16.6719998 19.705,16.714 C19.6599998,16.7560002 19.6045003,16.777 19.5385,16.777 L16.9645,16.777 L16.9645,18.775 C16.9645,18.8350003 16.9435002,18.8874998 16.9015,18.9325 C16.8594998,18.9775002 16.8055003,19 16.7395,19 L15.5335,19 C15.4734997,19 15.4210002,18.9775002 15.376,18.9325 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </symbol>
);

export const SVGXls = () => (
    <symbol id={ ICON_IDS.XLS } viewBox="0 0 23 28">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Icon/XLS" fill="#78A22F">
                <path d="M23,6 L23,26 C23,27.1045695 22.1045695,28 21,28 L2,28 C0.8954305,28 1.3527075e-16,27.1045695 0,26 L0,2 C-1.3527075e-16,0.8954305 0.8954305,-1.91384796e-17 2,-2.22044605e-16 L17,-1.75298372e-16 C17,0 18,0 19,1 L22,4 C22.6666667,4.66666667 23,5.33333333 23,6 Z M16,2 L2,2 L2,26 L21,26 L21,7 L17,7 C16.4477153,7 16,6.55228475 16,6 L16,2 Z M3.26950002,18.9415 C3.23049982,18.9024998 3.21100002,18.8590002 3.21100002,18.811 C3.21100002,18.7749998 3.21999993,18.7390002 3.23800002,18.703 L5.20000002,15.787 L3.39100002,12.997 C3.37299993,12.9609998 3.36400002,12.9250002 3.36400002,12.889 C3.36400002,12.8409998 3.38349982,12.7975002 3.42250002,12.7585 C3.46150021,12.7194998 3.50499978,12.7 3.55300002,12.7 L4.93000002,12.7 C5.06200068,12.7 5.1699996,12.7659993 5.25400002,12.898 L6.27100002,14.464 L7.32400002,12.898 C7.40800044,12.7659993 7.51299939,12.7 7.63900002,12.7 L8.95300002,12.7 C9.00100026,12.7 9.04449982,12.7194998 9.08350002,12.7585 C9.12250021,12.7975002 9.14200002,12.8409998 9.14200002,12.889 C9.14200002,12.9250002 9.13300011,12.9609998 9.11500002,12.997 L7.28800002,15.769 L9.26800002,18.703 C9.28600011,18.7390002 9.29500002,18.7749998 9.29500002,18.811 C9.29500002,18.8590002 9.27550021,18.9024998 9.23650002,18.9415 C9.19749982,18.9805002 9.15400026,19 9.10600002,19 L7.68400002,19 C7.55199936,19 7.44700041,18.9400006 7.36900002,18.82 L6.21700002,17.146 L5.09200002,18.82 C5.01399963,18.9400006 4.90900068,19 4.77700002,19 L3.40000002,19 C3.35199978,19 3.30850021,18.9805002 3.26950002,18.9415 Z M9.76450001,18.9325 C9.71949978,18.8874998 9.69700001,18.8350003 9.69700001,18.775 L9.69700001,12.925 C9.69700001,12.8589997 9.71949978,12.8050002 9.76450001,12.763 C9.80950023,12.7209998 9.86199971,12.7 9.92200001,12.7 L11.182,12.7 C11.2480003,12.7 11.3019998,12.7209998 11.344,12.763 C11.3860002,12.8050002 11.407,12.8589997 11.407,12.925 L11.407,17.587 L14.107,17.587 C14.1730003,17.587 14.2284998,17.6094998 14.2735,17.6545 C14.3185002,17.6995002 14.341,17.7549997 14.341,17.821 L14.341,18.775 C14.341,18.8410003 14.3185002,18.8949998 14.2735,18.937 C14.2284998,18.9790002 14.1730003,19 14.107,19 L9.92200001,19 C9.86199971,19 9.80950023,18.9775002 9.76450001,18.9325 Z M15.697,18.838 C15.288998,18.6699992 14.980001,18.4480014 14.77,18.172 C14.5599989,17.8959986 14.4490001,17.5960016 14.437,17.272 C14.437,17.2179997 14.4564998,17.1730002 14.4955,17.137 C14.5345002,17.1009998 14.5809997,17.083 14.635,17.083 L15.832,17.083 C15.9040004,17.083 15.9624998,17.0949999 16.0075,17.119 C16.0525002,17.1430001 16.1019997,17.1849997 16.156,17.245 C16.2340004,17.3890007 16.3554992,17.5074995 16.5205,17.6005 C16.6855008,17.6935005 16.9059986,17.74 17.182,17.74 C17.5060016,17.74 17.7549991,17.6905005 17.929,17.5915 C18.1030009,17.4924995 18.19,17.3560009 18.19,17.182 C18.19,17.0559994 18.1450004,16.9525004 18.055,16.8715 C17.9649995,16.7904996 17.821001,16.7185003 17.623,16.6555 C17.424999,16.5924997 17.1400019,16.5220004 16.768,16.444 C16.0419964,16.2999993 15.4990018,16.0810015 15.139,15.787 C14.7789982,15.4929985 14.599,15.0730027 14.599,14.527 C14.599,14.1549981 14.702499,13.8235015 14.9095,13.5325 C15.116501,13.2414985 15.4104981,13.0150008 15.7915,12.853 C16.1725019,12.6909992 16.6149975,12.61 17.119,12.61 C17.6470026,12.61 18.1044981,12.7014991 18.4915,12.8845 C18.8785019,13.0675009 19.175499,13.2954986 19.3825,13.5685 C19.589501,13.8415014 19.6989999,14.1099987 19.711,14.374 C19.711,14.4280003 19.6930002,14.4744998 19.657,14.5135 C19.6209998,14.5525002 19.5760003,14.572 19.522,14.572 L18.262,14.572 C18.1299993,14.572 18.0280004,14.5180005 17.956,14.41 C17.9199998,14.2839994 17.8270007,14.1775004 17.677,14.0905 C17.5269992,14.0034996 17.3410011,13.96 17.119,13.96 C16.8669987,13.96 16.6720007,14.0049996 16.534,14.095 C16.3959993,14.1850005 16.327,14.3169991 16.327,14.491 C16.327,14.6650009 16.4169991,14.8014995 16.597,14.9005 C16.7770009,14.9995005 17.1129975,15.0999995 17.605,15.202 C18.1690028,15.3040005 18.6174983,15.4314992 18.9505,15.5845 C19.2835017,15.7375008 19.5294992,15.9354988 19.6885,16.1785 C19.8475008,16.4215012 19.927,16.7289981 19.927,17.101 C19.927,17.509002 19.8100012,17.8629985 19.576,18.163 C19.3419988,18.4630015 19.0180021,18.6924992 18.604,18.8515 C18.1899979,19.0105008 17.7160027,19.09 17.182,19.09 C16.5999971,19.09 16.105002,19.0060008 15.697,18.838 Z" id="Combined-Shape"></path>
            </g>
        </g>
    </symbol>
);

export const SVGRoyaltyShareLogo = () => (
    <symbol id={ ICON_IDS.ROYALTY_SHARE_LOGO } viewBox="0 0 354.4 39.6">
        <path fill="#FFFFFF" d="M59,24.6c-4.3-3.3-10.5-3.7-15.3-0.6l0,0c-10.5,6.8-23.8,6.1-33.4-0.7l-1.9,2.4l-1-8.2l8.1-0.9l-0.9-8l8.1-0.9l-2.2,2.7c4.2,2.6,9.8,2.8,14.2-0.1l0,0c10.7-6.9,24.2-6.1,33.9,1.1l-1.5,2.1l7.5-1.2l-1.2-7.5l-1.6,2.2C60.4-1.6,44.4-2.6,31.8,5.7c-2.4,1.6-5.6,1.2-7.7,0.2c-2.5-1.2-7-5.2-7-5.2L0,22.2l7,5.5c11,8.1,27.2,9.1,39.7,1l0,0c2.9-1.9,6.6-1.6,9.1,0.5l-0.1,0.1l-1.4,1.9l7.2-0.9l-1.2-7.5L59,24.6z M65.4,15.7c-7.9-5.9-19-6.6-27.7-0.9v0c-6.5,4.2-14.6,3.9-20.6-0.1L13.7,19c7.9,5.4,18.5,5.9,27,0.4c6.8-4.4,15.4-3.8,21.5,0.8l-1.6,2.2l7.5-1.2l-1.2-7.5L65.4,15.7z" />
        <path fill="#FFFFFF" d="M97.1,15.9h3.1c2.6,0,4.6-1.6,4.6-4.2c0-2.5-1.9-4.2-4.4-4.2h-7.1v8.5v3.7v12h-4V3.7h11.4c4.6,0,8.1,3.4,8.1,8c0,3.5-2.1,6.2-5.4,7.5l6.3,12.5h-5L97.1,15.9z" />
        <path fill="#FFFFFF" d="M123,31.9c-4.5,0-8.2-3.6-8.2-8.2v-4.2c0-4.5,3.8-8,8.3-8c4.4,0,8.2,3.6,8.2,8v4.2 C131.2,28.2,127.5,31.9,123,31.9z M127.3,19.5c0-2.2-2-4.1-4.2-4.1c-2.2,0-4.3,1.8-4.3,4.1v4.2c0,2.3,2,4.2,4.3,4.2c2.2,0,4.2-2,4.2-4.2V19.5z" />
        <path fill="#FFFFFF" d="M145.8,35.6c-0.5,1.3-1.1,2.3-2.3,3.1c-1.3,0.9-2.1,0.9-3.6,0.9h-1.2v-3.7c2,0,2.9,0,3.7-2.1l1-2.9l-7.2-19.2h4.2l4.7,13.9l4.7-13.9h4.2L145.8,35.6z" />
        <path fill="#FFFFFF" d="M171.3,31.6v-2c-1,1.8-2.9,2.3-4.8,2.3c-3.7,0-7.2-2.2-7.2-6.2c0-1.5,0.6-3,1.6-4.1c1.6-1.8,2.8-1.9,5.1-1.9h5.3v-1.4v-0.4c0-0.9-0.1-1.3-0.8-1.8c-1-0.7-2.1-0.7-3.3-0.7c-1.5,0-2.8,0-3.6,1.4l-3.2-2.6c1.6-2.4,4.4-2.7,7.1-2.7c2.1,0,4,0.3,5.7,1.7c1.3,1.2,2.1,2.9,2.1,4.6v13.9H171.3z M171.3,23h-6.2c-1.2,0-2,1.4-2,2.4c0,2.3,2.2,2.7,4,2.7c1.1,0,2.7-0.1,3.6-0.9c0.5-0.5,0.6-1.2,0.6-1.9V23z" />
        <path fill="#FFFFFF" d="M188.7,31.6c-2.2,0-4.6-1.8-4.6-4.1V3.7h4v22v1c0,1.6,1.9,1.3,3,1.3v3.7H188.7z" />
        <path fill="#FFFFFF" d="M198.1,11.7v-6h4v6h3v3.2h-3v11.6c0,1.9,1.8,1.4,3,1.4v3.7H203c-1.3,0-2-0.1-3.1-0.9c-0.5-0.4-1-0.9-1.3-1.4c-0.5-1-0.5-1.8-0.5-2.8V14.9" />
        <path fill="#FFFFFF" d="M221.3,35.6c-0.5,1.3-1.1,2.3-2.3,3.1c-1.3,0.9-2.1,0.9-3.6,0.9h-1.2v-3.7c2,0,2.9,0,3.7-2.1l1-2.9l-7.2-19.2h4.2l4.7,13.9l4.7-13.9h4.2L221.3,35.6z" />
        <path fill="#FFFFFF" d="M246.4,31.9c-3.7,0-7.5-1.1-10.4-3.6l2.6-3.3c2.4,2,4.8,2.9,7.9,2.9c2.7,0,6-1,6-4.2c0-1.3-0.6-2.4-1.6-3.1c-1.1-0.8-3.1-0.8-4.4-0.9c-2.1-0.1-3.9-0.3-5.7-1.5c-2.3-1.5-3.8-3.9-3.8-6.7c0-5.2,4.4-8,9.2-8c3.3,0,6.3,0.9,9,2.7l-2.3,3.6c-2.1-1.6-4.4-2.3-7-2.3c-2.4,0-4.9,1.2-4.9,3.9c0,0.8,0.2,1.5,0.6,2.1c1.2,1.8,3,1.8,4.9,1.9c2.1,0.1,4.3,0.4,6.1,1.4c2.4,1.3,3.9,4.1,3.9,6.8C256.5,29.2,251.5,31.9,246.4,31.9z" />
        <path fill="#FFFFFF" d="M275.5,31.6V19.5c0-2.3-1.6-4.1-4-4.1c-0.9,0-1.7,0.3-2.4,0.8c-1.4,1-1.6,2-1.6,3.6v11.8h-4V3.7h4v10.2c1.4-1.6,3.1-2.5,5.2-2.5c4,0,6.7,3.2,6.7,7.1v13.1H275.5z" />
        <path fill="#FFFFFF" d="M298.6,31.6v-2c-1,1.8-2.9,2.3-4.8,2.3c-3.7,0-7.2-2.2-7.2-6.2c0-1.5,0.6-3,1.6-4.1c1.6-1.8,2.8-1.9,5.1-1.9h5.3v-1.4v-0.4c0-0.9-0.1-1.3-0.8-1.8c-1-0.7-2.1-0.7-3.3-0.7c-1.5,0-2.8,0-3.6,1.4l-3.2-2.6c1.6-2.4,4.4-2.7,7.1-2.7c2.1,0,4,0.3,5.7,1.7c1.3,1.2,2.1,2.9,2.1,4.6v13.9H298.6z M298.6,23h-6.2c-1.2,0-2,1.4-2,2.4c0,2.3,2.2,2.7,4,2.7c1.1,0,2.7-0.1,3.6-0.9c0.5-0.5,0.6-1.2,0.6-1.9V23z" />
        <path fill="#FFFFFF" d="M322,16.4c-0.9-0.7-1.5-1-2.6-1c-1,0-3.3-0.1-4,0.5c0,0,0,2.3,0,3.7v12.1h-4V11.7h4c0,0,3.1-0.3,5.2-0.3c1.5,0,3.1,0.5,4.3,1.5L322,16.4z" />
        <path fill="#FFFFFF" d="M331.7,23.2c0,2.9,1.8,4.7,4.8,4.7c1.7,0,3.1-0.7,4.2-1.9l3,2.6c-1.8,2.1-4.5,3.2-7.2,3.2c-5.2,0-8.7-3.7-8.7-8.8v-3.5c0-4.5,3.8-8.1,8.2-8.1c4.9,0,8.2,3.9,8.2,8.7v3.1H331.7z M335.9,15.4c-2.5,0-4.1,1.8-4.2,4.2h8.5 C340.1,17.3,338.3,15.4,335.9,15.4z" />
        <path fill="#FFFFFF" d="M351.6,11.9v0.3h-0.8v2.2h-0.3v-2.2h-0.8v-0.3H351.6z" />
        <path fill="#FFFFFF" d="M351.9,11.9h0.5l0.7,2.1l0.7-2.1h0.5v2.5H354v-1.5c0-0.1,0-0.1,0-0.3c0-0.1,0-0.2,0-0.4l-0.7,2.1H353l-0.7-2.1v0.1c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3v1.5h-0.3V11.9z" />
    </symbol>
);

export const SVGError404 = () => (
    <symbol id={ ICON_IDS.ERROR_404 } viewBox="0 0 22860 13547">
        <path fill="none" stroke="#D4D4D4" strokeWidth="283" d="M10678 11883H2447V687h16462v11196h-8231zM2307 1768h16507" />
        <path fill="#D6D6D6" d="M3115 995a220 220 0 1 0 2 440 220 220 0 0 0-2-440zm0 402a183 183 0 1 1 0-366 183 183 0 0 1 0 366z" />
        <path fill="none" stroke="#D4D4D4" strokeWidth="141" d="M3115 995a220 220 0 1 0 2 440 220 220 0 0 0-2-440z" />
        <path fill="none" stroke="#D4D4D4" strokeWidth="141" d="M3115 1397a183 183 0 1 1 0-366 183 183 0 0 1 0 366z" />
        <path fill="#D6D6D6" d="M3975 993a220 220 0 1 0 2 440 220 220 0 0 0-2-440zm0 402a183 183 0 1 1 0-366 183 183 0 0 1 0 366z" />
        <path fill="none" stroke="#D4D4D4" strokeWidth="141" d="M3975 993a220 220 0 1 0 2 440 220 220 0 0 0-2-440z" />
        <path fill="none" stroke="#D4D4D4" strokeWidth="141" d="M3975 1395a183 183 0 1 1 0-366 183 183 0 0 1 0 366z" />
        <path fill="#D6D6D6" d="M4851 993a220 220 0 1 0 2 440 220 220 0 0 0-2-440zm0 402a183 183 0 1 1 0-366 183 183 0 0 1 0 366z" />
        <path fill="none" stroke="#D4D4D4" strokeWidth="141" d="M4851 993a220 220 0 1 0 2 440 220 220 0 0 0-2-440z" />
        <path fill="none" stroke="#D4D4D4" strokeWidth="141" d="M4851 1395a183 183 0 1 1 0-366 183 183 0 0 1 0 366z" />
        <path fill="#F3F3F3" d="M6216 8490H3659V7337l2557-3038h1223v3103h633v1088h-633v945H6216v-945zm0-1088V5814L4866 7402h1350z" />
        <path fill="#EDEDED" d="M8460 6889l8-347 24-319 41-292 56-265 74-239 42-109 47-103 51-95 54-89 59-81 63-76 66-70 71-65 76-61 80-56 83-51 88-48 93-43 96-37 102-35 105-29 223-44 238-28 258-8 124 1 120 7 112 9 108 14 101 18 96 22 91 25 85 29 80 32 76 36 72 38 68 40 66 41 61 44 57 48 54 48 51 51 46 52 46 52 42 52 39 53 36 55 35 54 30 55 30 58 28 58 25 62 25 64 44 133 40 144 32 141 30 144 44 292 26 298 8 302-6 333-22 309-37 285-51 264-65 240-80 216-45 100-50 95-52 88-56 83-61 77-65 72-72 67-77 63-81 57-88 52-92 47-97 42-103 38-108 32-113 28-119 22-252 30-274 10-156-4-148-9-140-16-132-23-125-28-117-34-110-42-102-48-96-53-91-60-88-65-83-72-77-78-75-82-69-90-66-96-44-72-41-80-40-85-36-92-35-99-32-105-29-111-27-119-44-248-32-261-18-273-7-287zm1392 4l11 444 12 193 19 174 24 156 29 136 35 116 20 52 20 46 22 43 23 40 24 37 25 35 28 31 27 29 29 27 31 22 32 22 32 17 35 16 34 12 36 9 38 7 38 4 40 3 53-3 50-8 50-11 48-17 45-20 43-27 42-30 40-35 19-19 19-21 36-45 32-51 30-57 27-62 25-68 23-72 20-78 17-87 15-97 23-231 14-275 4-320-10-461-14-200-18-179-24-159-30-138-34-118-19-50-21-47-22-41-24-40-24-36-25-34-28-32-28-28-31-25-30-23-34-21-33-17-36-15-36-12-39-9-38-7-42-4-41-1-43 1-41 4-40 7-39 9-36 13-35 15-34 17-32 22-31 24-29 25-27 29-27 32-25 35-23 36-21 40-20 43-19 46-17 52-32 116-27 135-21 155-17 173-12 191-10 440z" />
        <path fill="#E7E7E7" d="M15574 8490h-2557V7337l2557-3038h1223v3103h633v1088h-633v945h-1223v-945zm0-1088V5814l-1350 1588h1350z" />
        <path fill="#FF9A3E" d="M21551 12845l-2072-2155a2922 2922 0 0 0 856-2067 2932 2932 0 0 0-2929-2928c-1614 0-2928 1313-2928 2928s1314 2929 2928 2929c709 0 1360-254 1867-674l2077 2160a139 139 0 0 0 197 4c56-53 57-141 4-197zm-4145-1572c-1461 0-2649-1189-2649-2650s1188-2650 2649-2650 2650 1189 2650 2650-1189 2650-2650 2650z" />
    </symbol>
);

export const SVGLogoAndName = () => (
    <symbol id={ ICON_IDS.LOGO_AND_NAME } viewBox="0 0 110 40">
        <g id="TheOrchardLogoAndName" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-633.000000, -118.000000)">
            <g id="TheOrchardLogo" transform="translate(633.000000, 118.000000)">
                <polygon id="Fill-1" fill="#FFFFFF" points="49.12474 16.016199 49.12474 22.4482388 47.51374 22.4482388 47.51374 16.016199 45.20334 16.016199 45.20334 14.4384876 51.43714 14.4384876 51.43714 16.016199"></polygon>
                <path d="M56.1978,22.448199 L56.1978,19.1998408 C56.1978,18.1240199 55.8316,17.8028259 55.1752,17.8028259 C54.519,17.8028259 54.139,18.1240199 54.139,19.167602 L54.139,22.448199 L52.5534,22.448199 L52.5534,14.8965572 L54.139,14.1080995 L54.139,16.8406368 C54.416,16.5556617 54.924,16.3144677 55.5538,16.3144677 C57.0936,16.3144677 57.7882,17.369194 57.7882,19.0595423 L57.7882,22.448199 L56.1978,22.448199 Z" id="Fill-2" fill="#FFFFFF"></path>
                <path d="M61.56968,17.6844179 C60.99608,17.6844179 60.63888,18.1570547 60.57968,18.7640199 L62.64828,18.7640199 C62.60328,18.2271045 62.28088,17.6844179 61.56968,17.6844179 M64.16948,19.9526766 L60.55688,19.9526766 C60.61408,20.7771542 61.22348,21.0858109 61.79808,21.0858109 C62.23568,21.0858109 62.60328,20.926408 62.83248,20.6625274 L63.96228,21.6020299 C63.47948,22.2189453 62.60328,22.5741692 61.79808,22.5741692 C60.06208,22.5741692 58.95848,21.3498905 58.95848,19.448597 C58.95848,17.609393 60.12048,16.3144677 61.64688,16.3144677 C63.25928,16.3144677 64.18948,17.7355622 64.18948,19.448597 C64.18948,19.6822289 64.17928,19.8390448 64.16948,19.9526766" id="Fill-4" fill="#FFFFFF"></path>
                <path d="M39.00972,24.1601393 C36.73172,24.1601393 35.78172,26.108 35.78172,28.6086965 C35.78172,31.1141692 36.73172,33.0624279 39.00972,33.0624279 C41.28692,33.0624279 42.23312,31.1141692 42.23312,28.6086965 C42.23312,26.108 41.28692,24.1601393 39.00972,24.1601393 M39.00972,35.8506866 C35.16192,35.8506866 32.88312,32.8825274 32.88312,28.6086965 C32.88312,24.3392438 35.16192,21.3728756 39.00972,21.3728756 C42.85652,21.3728756 45.13552,24.3392438 45.13552,28.6086965 C45.13552,32.8825274 42.85652,35.8506866 39.00972,35.8506866" id="Fill-6" fill="#FFFFFF"></path>
                <path d="M53.73822,28.334209 C53.29562,27.9274428 52.74902,27.6516219 52.12442,27.6516219 C51.03742,27.6516219 50.33162,28.1091343 50.33162,29.936199 L50.33162,35.6291343 L47.55162,35.6291343 L47.55162,25.1053532 L50.33162,25.1053532 L50.33162,25.8026667 C50.81862,25.3041592 51.52242,24.8798806 52.51122,24.8798806 C53.41682,24.8798806 54.10282,25.2398806 54.46322,25.6221692 L53.73822,28.334209 Z" id="Fill-8" fill="#FFFFFF"></path>
                <path d="M60.29038,35.8507264 C57.52738,35.8507264 55.33078,33.6055522 55.33078,30.3766965 C55.33078,27.1506269 57.46958,24.8797811 60.40938,24.8797811 C62.42618,24.8797811 63.71618,25.8620697 64.60178,27.2081393 L62.76638,29.0539104 C62.14358,28.1719204 61.47778,27.5480398 60.34818,27.5480398 C59.01778,27.5480398 58.15218,28.6483383 58.15218,30.3766965 C58.15218,32.0634627 59.01778,33.1834627 60.34818,33.1834627 C61.43558,33.1834627 62.12398,32.6992836 62.84718,31.8415721 L64.62078,33.5018706 C63.59458,34.8646567 62.38538,35.8507264 60.29038,35.8507264" id="Fill-10" fill="#FFFFFF"></path>
                <path d="M73.08296,35.6291741 L73.08296,29.9362388 C73.08296,28.0492736 72.43836,27.4868856 71.29056,27.4868856 C70.13976,27.4868856 69.47356,28.0492736 69.47356,29.8763383 L69.47356,35.6291741 L66.69576,35.6291741 L66.69576,22.3973333 L69.47356,21.0134527 L69.47356,25.8027065 C69.96156,25.304199 70.84496,24.8797214 71.95316,24.8797214 C74.65596,24.8797214 75.86596,26.7278806 75.86596,29.6914627 L75.86596,35.6291741 L73.08296,35.6291741 Z" id="Fill-12" fill="#FFFFFF"></path>
                <path d="M84.28804,31.2178308 C83.80144,30.9179303 83.34044,30.7816119 82.35244,30.7816119 C81.30464,30.7816119 80.74044,31.2562388 80.74044,32.1004179 C80.74044,32.8419104 81.16184,33.50201 82.35244,33.50201 C83.25804,33.50201 83.98464,33.0439005 84.28804,32.5400199 L84.28804,31.2178308 Z M84.28804,35.6291741 L84.28804,34.9284776 C83.78204,35.4460896 82.89644,35.8506667 81.90844,35.8506667 C79.93504,35.8506667 77.95844,34.6460896 77.95844,32.1004179 C77.95844,29.7750448 79.85344,28.6086766 82.24964,28.6086766 C83.22064,28.6086766 83.84104,28.8140498 84.28804,29.0339502 L84.28804,28.5093731 C84.28804,27.7696716 83.78204,27.1688756 82.77444,27.1688756 C81.50484,27.1688756 80.84144,27.3465871 79.87524,27.8685771 L78.80644,25.9461891 C80.03524,25.2399204 81.06424,24.8797214 82.77444,24.8797214 C85.33584,24.8797214 87.06624,26.2031045 87.06624,28.5692736 L87.06624,35.6291741 L84.28804,35.6291741 Z" id="Fill-14" fill="#FFFFFF"></path>
                <path d="M95.85054,28.334209 C95.41114,27.9274428 94.86454,27.6516219 94.24294,27.6516219 C93.15394,27.6516219 92.44714,28.1091343 92.44714,29.936199 L92.44714,35.6291343 L89.66634,35.6291343 L89.66634,25.1053532 L92.44714,25.1053532 L92.44714,25.8026667 C92.93154,25.3041592 93.63834,24.8798806 94.62334,24.8798806 C95.53134,24.8798806 96.21514,25.2398806 96.57774,25.6221692 L95.85054,28.334209 Z" id="Fill-16" fill="#FFFFFF"></path>
                <path d="M103.7935,28.3932736 C103.3699,27.808597 102.7263,27.486806 101.9207,27.486806 C100.8517,27.486806 100.2673,28.4107861 100.2673,30.1751642 C100.2673,32.3391443 100.9939,33.2398408 102.0807,33.2398408 C102.9461,33.2398408 103.3897,32.8826269 103.7935,32.3594428 L103.7935,28.3932736 Z M103.7935,35.6290945 L103.7935,34.9628259 C103.2699,35.4271045 102.5643,35.8507861 101.5579,35.8507861 C99.3023,35.8507861 97.4483,34.1644179 97.4483,30.2342687 C97.4483,27.087005 98.9369,24.8798408 101.5579,24.8798408 C102.4821,24.8798408 103.2923,25.2398408 103.7935,25.7041194 L103.7935,22.3972537 L106.5737,21.0133731 L106.5737,35.6290945 L103.7935,35.6290945 Z" id="Fill-18" fill="#FFFFFF"></path>
                <path d="M28.69086,25.5063483 C28.69086,33.3399801 22.31086,39.6902289 14.43386,39.6902289 C6.56426,39.6902289 0.17906,33.3399801 0.17906,25.5063483 C0.17906,17.6721194 6.56426,11.3226667 14.43386,11.3226667 C22.31086,11.3226667 28.69086,17.6721194 28.69086,25.5063483" id="Fill-20" fill="#FF893E"></path>
                <path d="M16.00298,2.09120398 C14.52198,1.86035821 13.31978,1.86433831 12.28798,1.71926368 C11.01338,1.62115423 8.60138,1.28742289 7.90418,0.157472637 C7.90418,0.157472637 7.88838,0.258567164 7.87698,0.444636816 C7.84998,0.859164179 7.84698,1.691801 8.09338,2.76284577 C8.32658,3.66851741 8.66478,4.59329353 9.14698,5.47070647 C9.30058,5.74831841 9.47598,6.03030846 9.66878,6.31488557 C10.85998,8.03289552 12.74838,9.2599602 15.58798,9.89777114 C19.30918,10.731403 22.84298,11.331005 25.58538,14.8054328 C25.59058,14.7919005 25.59438,14.773592 25.59998,14.7586667 C26.10418,12.8748856 24.19458,3.36105473 16.00298,2.09120398" id="Fill-22" fill="#78A22F"></path>
                <path d="M108.69916,34.8801791 L108.78376,34.8801791 C108.89276,34.8801791 108.96536,34.8318209 108.96536,34.7657512 C108.96536,34.6873433 108.89896,34.6447562 108.79576,34.6447562 C108.75956,34.6447562 108.72316,34.6511244 108.69916,34.6511244 L108.69916,34.8801791 Z M108.68676,35.4288358 L108.38996,35.4288358 L108.38996,34.4700299 C108.45656,34.4582886 108.61416,34.434209 108.81396,34.434209 C109.03236,34.434209 109.12916,34.4642587 109.20196,34.5124179 C109.26236,34.554607 109.30476,34.6270448 109.30476,34.7233632 C109.30476,34.8198806 109.21416,34.9040597 109.08076,34.9404776 L109.08076,34.9526169 C109.18996,34.9826667 109.25036,35.0608756 109.28056,35.1997811 C109.31096,35.3386866 109.32896,35.3926169 109.34736,35.4288358 L109.01416,35.4288358 C108.98396,35.3926169 108.96536,35.3084378 108.94736,35.2240597 C108.92916,35.1275423 108.88076,35.0793831 108.78376,35.0793831 L108.68676,35.0793831 L108.68676,35.4288358 Z M108.80816,34.156398 C108.38396,34.156398 108.06256,34.5002786 108.06256,34.9404776 C108.06256,35.3685373 108.38396,35.7183881 108.81996,35.7183881 C109.25636,35.7245572 109.57776,35.3685373 109.57776,34.9343085 C109.57776,34.5002786 109.25636,34.156398 108.81396,34.156398 L108.80816,34.156398 Z M108.82636,33.8976915 C109.41996,33.8976915 109.89296,34.3619701 109.89296,34.9343085 C109.89296,35.5134129 109.41996,35.9778905 108.81996,35.9778905 C108.21996,35.9778905 107.74156,35.5134129 107.74156,34.9343085 C107.74156,34.3619701 108.21996,33.8976915 108.81996,33.8976915 L108.82636,33.8976915 Z" id="Fill-24" fill="#FFFFFF"></path>
                <path d="M24.89194,37.929194 L24.97654,37.929194 C25.08554,37.929194 25.15834,37.8810348 25.15834,37.8147662 C25.15834,37.7363582 25.09174,37.6937711 24.98874,37.6937711 C24.95234,37.6937711 24.91614,37.7001393 24.89194,37.7001393 L24.89194,37.929194 Z M24.87954,38.4780498 L24.58294,38.4780498 L24.58294,37.5190448 C24.64934,37.5073035 24.80694,37.4832239 25.00694,37.4832239 C25.22514,37.4832239 25.32194,37.5132736 25.39474,37.5614328 C25.45534,37.6036219 25.49774,37.6760597 25.49774,37.7723781 C25.49774,37.8690945 25.40694,37.9532736 25.27354,37.9896915 L25.27354,38.0018308 C25.38274,38.0316816 25.44314,38.1100896 25.47354,38.248796 C25.50394,38.3877015 25.52194,38.4416318 25.54034,38.4780498 L25.20714,38.4780498 C25.17674,38.4416318 25.15834,38.3574527 25.14014,38.2730746 C25.12214,38.1765572 25.07374,38.128398 24.97654,38.128398 L24.87954,38.128398 L24.87954,38.4780498 Z M25.00094,37.2054129 C24.57674,37.2054129 24.25534,37.5494925 24.25534,37.9896915 C24.25534,38.4175522 24.57674,38.767403 25.01294,38.767403 C25.44934,38.7735721 25.77054,38.4175522 25.77054,37.9833234 C25.77054,37.5494925 25.44934,37.2054129 25.00694,37.2054129 L25.00094,37.2054129 Z M25.01914,36.9467065 C25.61294,36.9467065 26.08574,37.4109851 26.08574,37.9833234 C26.08574,38.5626269 25.61294,39.0269055 25.01294,39.0269055 C24.41294,39.0269055 23.93434,38.5626269 23.93434,37.9833234 C23.93434,37.4109851 24.41294,36.9467065 25.01294,36.9467065 L25.01914,36.9467065 Z" id="Fill-26" fill="#FFFFFF"></path>
            </g>
        </g>
    </symbol>
);

export const SVGGear = () => (
    <symbol id={ ICON_IDS.GEAR } viewBox="0 0 16 16">
        <defs>
            <path d="M8,10.75 C6.48,10.75 5.25,9.519 5.25,8 C5.25,6.481 6.48,5.25 8,5.25 C9.519,5.25 10.75,6.481 10.75,8 C10.75,9.519 9.519,10.75 8,10.75 M14.305,7.161 L13.551,7.017 C13.107,6.932 12.745,6.63 12.58,6.209 C12.414,5.789 12.476,5.321 12.743,4.957 L13.216,4.312 C13.286,4.217 13.276,4.084 13.191,3.999 L12.171,2.978 C12.089,2.896 11.961,2.885 11.865,2.949 L11.23,3.379 C10.856,3.633 10.387,3.676 9.973,3.495 C9.559,3.314 9.271,2.939 9.202,2.494 L9.08,1.703 C9.062,1.587 8.962,1.5 8.842,1.5 L7.398,1.5 C7.283,1.5 7.184,1.582 7.161,1.695 L6.974,2.669 C6.891,3.103 6.598,3.462 6.19,3.63 C5.782,3.8 5.32,3.752 4.954,3.506 L4.134,2.949 C4.039,2.885 3.911,2.896 3.829,2.979 L2.808,3.999 C2.724,4.084 2.714,4.217 2.783,4.312 L3.256,4.957 C3.524,5.321 3.584,5.789 3.419,6.21 C3.255,6.63 2.892,6.932 2.448,7.017 L1.694,7.162 C1.582,7.184 1.5,7.283 1.5,7.398 L1.5,8.842 C1.5,8.961 1.587,9.063 1.704,9.081 L2.494,9.202 C2.94,9.271 3.314,9.558 3.494,9.973 C3.676,10.387 3.632,10.857 3.379,11.23 L2.949,11.865 C2.885,11.961 2.896,12.089 2.979,12.172 L3.999,13.192 C4.083,13.276 4.216,13.287 4.312,13.217 L4.957,12.744 C5.321,12.478 5.789,12.415 6.209,12.58 C6.63,12.745 6.932,13.108 7.017,13.552 L7.161,14.305 C7.184,14.419 7.283,14.5 7.398,14.5 L8.842,14.5 C8.962,14.5 9.063,14.413 9.08,14.297 L9.165,13.74 C9.235,13.283 9.532,12.906 9.959,12.729 C10.386,12.553 10.861,12.611 11.234,12.884 L11.688,13.217 C11.783,13.287 11.916,13.276 12.001,13.191 L13.021,12.172 C13.104,12.089 13.115,11.961 13.051,11.865 L12.62,11.23 C12.367,10.857 12.324,10.387 12.505,9.973 C12.685,9.558 13.059,9.271 13.505,9.202 L14.295,9.081 C14.413,9.063 14.5,8.961 14.5,8.842 L14.5,7.398 C14.5,7.283 14.419,7.184 14.305,7.161" id="gear-path"></path>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Icon/Glyph/Customize">
                <mask id="mask-2" fill="white">
                    <use xlinkHref="#gear-path"></use>
                </mask>
                <use id="Mask" xlinkHref="#gear-path" fill="grey"></use>
            </g>
        </g>
    </symbol>
);

export const SVGSpotify = () => (
    <symbol id={ ICON_IDS.SPOTIFY } viewBox="0 0 24 24">
        <g fill="#1ED760">
            <path d="M19.0983701,10.6382791 C15.230178,8.34118115 8.85003755,8.12986439 5.15729493,9.25058527 C4.56433588,9.43062856 3.93727638,9.09580812 3.75758647,8.50284907 C3.57789655,7.90953664 3.91236362,7.28283051 4.50585273,7.10261054 C8.74455585,5.81598127 15.7909802,6.06440214 20.2440037,8.70780512 C20.7774195,9.02442687 20.9525156,9.71332656 20.6362472,10.2456822 C20.3198021,10.779098 19.6305491,10.9549008 19.0983701,10.6382791 M18.971686,14.0407262 C18.7004726,14.4810283 18.1246521,14.6190203 17.6848801,14.3486903 C14.4600027,12.3664473 9.54264764,11.792217 5.72728477,12.9503953 C5.23256328,13.0998719 4.70992535,12.8208843 4.55974204,12.3270462 C4.41061884,11.8323247 4.68978312,11.3107469 5.18362118,11.1602103 C9.5419409,9.83771368 14.9600247,10.4782013 18.6638986,12.7544503 C19.1036707,13.0253103 19.242016,13.6013075 18.971686,14.0407262 M17.5034233,17.308185 C17.2876894,17.6617342 16.827245,17.7725165 16.4749326,17.5571359 C13.6571403,15.8347984 10.1101639,15.4459119 5.93312425,16.4000177 C5.53063298,16.4922479 5.12937851,16.2399399 5.03767834,15.8376253 C4.94544812,15.4351341 5.19669597,15.0338796 5.60024736,14.9420027 C10.1712973,13.8970803 14.0923186,14.3467468 17.2551791,16.2796943 C17.6078449,16.4948982 17.7189805,16.9556959 17.5034233,17.308185 M12,0 C5.37267547,0 1.42108547e-14,5.37249879 1.42108547e-14,11.9998233 C1.42108547e-14,18.6278546 5.37267547,24 12,24 C18.6275012,24 24,18.6278546 24,11.9998233 C24,5.37249879 18.6275012,0 12,0" />
        </g>
    </symbol>
);

export const SVGAan = () => (
    <symbol id={ ICON_IDS.AAN } viewBox="0 0 32 12">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-326.000000, -441.000000)" fill="#6D6565">
                <g transform="translate(326.000000, 439.000000)">
                    <g transform="translate(0.000000, 2.000000)">
                        <path d="M0.863883105,3.56434119 C0.913855708,3.75987726 0.94173516,3.96458959 1.01827215,4.14907909 C1.19016621,4.56329644 1.51773516,4.7876179 1.9641863,4.81453297 C2.36385023,4.83861333 2.67911598,4.67206721 2.90907763,4.34280329 C3.23264292,3.87949005 3.2132968,3.15862795 2.86328402,2.7162389 C2.48451507,2.2375832 1.80366027,2.1595558 1.33172603,2.54793936 C1.01657717,2.80730009 0.900675799,3.15894941 0.863883105,3.56434119 Z M0,3.36073936 C0.0213041096,3.27236676 0.0445954338,3.18440329 0.0636785388,3.09553388 C0.242527854,2.26271562 0.874725114,1.63875945 1.71198539,1.51061333 C2.22042009,1.43276128 2.69790685,1.54913023 3.11896256,1.85893114 C3.16542831,1.89312292 3.21206941,1.92719781 3.28290776,1.97909918 C3.36844566,1.8842389 3.45471416,1.79268091 3.53613151,1.69700237 C3.60770046,1.61286721 3.69250776,1.57528548 3.80461005,1.58262064 C3.92089132,1.59024804 4.03825388,1.5881147 4.15485662,1.5834389 C4.25675982,1.57934758 4.29431233,1.62356311 4.29065936,1.7226316 C4.28601279,1.84899507 4.30009863,1.97687817 4.28569132,2.10175123 C4.2770411,2.17679781 4.25012603,2.27484347 4.19603288,2.31528913 C3.92343379,2.51915397 3.84718904,2.77921607 3.87080183,3.11245443 C3.89958721,3.51921973 3.87235068,3.92969644 3.88214064,4.33824438 C3.88409863,4.41969096 3.92390137,4.51864256 3.97995251,4.57732384 C4.30915799,4.921901 4.31035616,4.91859872 4.29124384,5.40681059 C4.28732785,5.50684347 4.25147032,5.55190648 4.15155434,5.54197041 C4.1467032,5.54150283 4.14173516,5.54135671 4.13694247,5.54199963 C3.81656256,5.58738411 3.54261918,5.51625352 3.35073607,5.23292932 C3.3325589,5.20607269 3.30090959,5.18833388 3.26908493,5.16077589 C3.23930594,5.17886539 3.20920548,5.19298046 3.18378082,5.21305717 C2.08368219,6.08176219 0.500631963,5.54761059 0.0979872146,4.16351562 C0.0576292237,4.0247905 0.0322922374,3.88171105 0,3.74064804 L0,3.36073936 Z"></path>
                        <path d="M11.4506842,8.91321279 C11.5038714,8.5115032 11.180423,8.1623379 10.7287116,8.11888219 C10.2428668,8.07221187 9.79325954,8.4411032 9.77142941,8.91321279 L11.4506842,8.91321279 Z M10.5789984,11.4557078 C10.4850732,11.4364785 10.3910312,11.4180091 10.2973107,11.3978447 C9.50160658,11.2268274 8.93910795,10.6504767 8.81160475,9.84997991 C8.71233169,9.22660822 8.78807963,8.62778447 9.14083945,8.08641461 C9.51928694,7.50565114 10.0666477,7.27165662 10.7477363,7.30476712 C11.6014203,7.34626484 12.2373582,7.91706301 12.3778659,8.79628858 C12.4142787,9.02423379 12.4075865,9.25898813 12.4219938,9.49052785 C12.4292705,9.60791963 12.3705308,9.63699726 12.2614678,9.63650046 C11.4729819,9.6331105 10.6844376,9.63468858 9.89592256,9.63468858 C9.83858557,9.63471781 9.78124858,9.63471781 9.72668785,9.63471781 C9.6744358,10.0380639 9.99867324,10.4796347 10.42496,10.5837589 C10.9117691,10.7026995 11.341855,10.5987799 11.6779865,10.2098995 C11.7673527,10.1065059 11.8321417,10.1022685 11.9254824,10.199116 C12.0367079,10.3145498 12.1560285,10.4227068 12.2772486,10.5278247 C12.3709107,10.6090374 12.3757618,10.6792913 12.290107,10.7723105 C11.9509655,11.1405297 11.5436157,11.3726831 11.039623,11.4223927 C11.0022458,11.4261041 10.9663006,11.4442521 10.9296833,11.4557078 L10.5789984,11.4557078 Z"></path>
                        <path d="M32,11.3388128 C31.8113315,11.3447744 31.6222247,11.3603215 31.4342868,11.3513205 C31.3723032,11.3483397 31.3037151,11.2917333 31.2544731,11.2431342 C30.8251763,10.8190685 30.3996785,10.391116 29.972632,9.96477078 C29.9363068,9.92847489 29.8968548,9.89530594 29.8269224,9.8316274 L29.8269224,10.0234521 C29.8268932,10.4079196 29.823474,10.7924164 29.8287635,11.1767963 C29.8305753,11.3065205 29.7887854,11.3647927 29.6525443,11.3592986 C29.4679087,11.351905 29.282484,11.3512329 29.0979068,11.359474 C28.9539215,11.3659324 28.9109626,11.3005881 28.9114886,11.1675324 C28.9143817,10.4813589 28.9128329,9.79518539 28.9128329,9.10898265 C28.9128037,8.2379105 28.9126868,7.36677991 28.9129205,6.49564932 C28.912979,6.30046393 28.9239963,6.28979726 29.1190941,6.28938813 C29.2942904,6.28900822 29.4698959,6.29684018 29.644537,6.28696256 C29.7853954,6.27898447 29.8306046,6.32901553 29.8295233,6.47034155 C29.8239123,7.21975525 29.8268932,7.96919817 29.8269224,8.71867032 L29.8269224,8.9117516 C29.8979653,8.84769315 29.9409242,8.81224475 29.9801717,8.77308493 C30.3935416,8.36059178 30.809074,7.95017352 31.2172712,7.53259543 C31.3139726,7.43367306 31.4131872,7.38495708 31.5509772,7.39828311 C31.7000475,7.41269041 31.8502868,7.41514521 32,7.42283105 L32,8.06575342 C31.9625059,8.09436347 31.921242,8.11917443 31.8880731,8.15216804 C31.5158795,8.522579 31.1447963,8.89412968 30.7738594,9.26576804 C30.7405151,9.29917078 30.7101516,9.33552511 30.6713425,9.37827945 C30.7140384,9.42404384 30.7487854,9.46349589 30.7858411,9.50066849 C31.0570959,9.77256621 31.3278831,10.0450484 31.6009205,10.3151927 C31.7315507,10.4444493 31.8668274,10.5691178 32,10.6958904 L32,11.3388128 Z"></path>
                        <path d="M22.4420091,9.38136548 C22.4706776,9.53782941 22.4799416,9.70107324 22.5316676,9.84952986 C22.695905,10.3207043 23.0255781,10.6006678 23.5338374,10.6267646 C23.9927087,10.6503189 24.3277297,10.4331865 24.5421151,10.0365034 C24.702232,9.74020384 24.7376804,9.41821662 24.6718393,9.08860201 C24.5898374,8.6781253 24.3812091,8.35380018 23.9816329,8.19511525 C23.5837808,8.03716091 23.2030539,8.09990429 22.8755142,8.37618557 C22.5693078,8.63446502 22.4539324,8.98330886 22.4420091,9.38136548 Z M23.4082338,11.4556961 C23.3045479,11.4339536 23.2009205,11.4119774 23.0971763,11.3905563 C22.2273315,11.2106842 21.567284,10.3993746 21.5406612,9.51296 C21.5220749,8.89408877 21.6712621,8.34418557 22.1171872,7.9018842 C22.7169753,7.30697644 23.4452603,7.1519737 24.229684,7.40633717 C25.0050776,7.65777826 25.4689753,8.22176731 25.5946082,9.0370221 C25.7357005,9.9528358 25.3426703,10.7836084 24.555821,11.2015079 C24.3505534,11.3105417 24.107821,11.3491171 23.8821845,11.4197216 C23.8413589,11.4325216 23.8000365,11.4437436 23.7589187,11.4556961 L23.4082338,11.4556961 Z"></path>
                        <path d="M13.939726,0 C13.9785936,0.0175342466 14.0169059,0.0363543379 14.056358,0.0523981735 C14.3215927,0.160204566 14.4746959,0.434177169 14.4232621,0.71016621 C14.3732895,0.978440183 14.1310831,1.18385388 13.8587178,1.18893881 C13.5562228,1.194579 13.3267288,1.00751781 13.2599233,0.700814612 C13.2050995,0.449198174 13.3547251,0.174027397 13.6068676,0.0616328767 C13.6501772,0.0423159817 13.6924347,0.0206027397 13.7351598,0 L13.939726,0 Z"></path>
                        <path d="M19.8532822,10.0896964 C19.8815708,9.98539689 19.9119635,9.88159416 19.9377973,9.77665169 C20.119832,9.03702795 20.3038831,8.297901 20.4795178,7.5567284 C20.5093553,7.43086174 20.5661078,7.3897147 20.6898411,7.39763434 C20.8353169,7.40692749 20.9824292,7.40783342 21.1277589,7.39754667 C21.2675068,7.38761059 21.2900676,7.44886356 21.3022247,7.57575306 C21.3505607,8.08073936 21.1793973,8.54399416 21.050842,9.01554849 C20.8530265,9.74137863 20.6474959,10.4651339 20.4525443,11.1917238 C20.4183525,11.3190809 20.3615708,11.3651668 20.2299178,11.3602864 C19.9721936,11.3507595 19.7137973,11.3533896 19.4558393,11.3593805 C19.3440584,11.3619814 19.2921279,11.322354 19.2625534,11.2120636 C19.0436676,10.3964289 18.8188785,9.58240146 18.595463,8.76793571 C18.5780457,8.70452018 18.5571215,8.64201059 18.5040804,8.57728 C18.4893516,8.62438868 18.4731909,8.67111744 18.4600986,8.71866447 C18.2344037,9.53771836 18.0068968,10.3562754 17.7859945,11.1766152 C17.749611,11.3118042 17.6899361,11.368206 17.5430575,11.361017 C17.2856256,11.3483923 17.0270539,11.354091 16.7690667,11.3591467 C16.6683909,11.3611339 16.6182137,11.3208051 16.5924384,11.2264124 C16.3125041,10.2011266 16.0228091,9.1783832 15.7561717,8.14964895 C15.7040073,7.9483558 15.7329388,7.72418046 15.7398356,7.51105169 C15.741063,7.4729147 15.8158466,7.40833023 15.859916,7.40543708 C16.0441425,7.39342612 16.2297132,7.40380055 16.4146119,7.39892018 C16.5326174,7.39576402 16.5419982,7.4793147 16.5618411,7.56008913 C16.756179,8.35170192 16.9506922,9.14328548 17.1455854,9.93478137 C17.1580055,9.98533845 17.1739909,10.0349896 17.2012274,10.1300837 C17.2359452,10.0269238 17.2602886,9.96628457 17.2768584,9.90359963 C17.4827397,9.12478685 17.6903744,8.34644164 17.8895927,7.56593388 C17.9220895,7.4385768 17.9752767,7.39234484 18.1073388,7.39690374 C18.3845553,7.40648913 18.6625315,7.40590466 18.9397772,7.39704986 C19.0650594,7.39307543 19.1208475,7.43547909 19.1520877,7.55707909 C19.356274,8.35129279 19.5669772,9.14384073 19.7758977,9.93685626 C19.7890776,9.98688731 19.8049753,10.0362462 19.8195872,10.0858974 C19.8308091,10.0871832 19.8420311,10.0884398 19.8532822,10.0896964"></path>
                        <path d="M10.7321921,4.83246174 C11.1556734,4.83240329 11.4741246,4.64434849 11.6525647,4.26148822 C11.874636,3.78496584 11.8694049,3.30081607 11.6372807,2.8289695 C11.4572625,2.46308822 11.1402141,2.28441425 10.7426542,2.27935854 C10.3575437,2.27447817 10.0483273,2.44125808 9.84723872,2.78159781 C9.66120037,3.09651288 9.63390539,3.44079781 9.66596384,3.79455123 C9.72210265,4.41356858 10.1536205,4.83252018 10.7321921,4.83246174 M11.7877246,1.86368 L11.7877246,1.68696402 C11.7877246,1.20012566 11.7905593,0.713258082 11.7856789,0.226507397 C11.78451,0.10844347 11.8190816,0.0582078539 11.9431072,0.062766758 C12.1424424,0.0700726941 12.342362,0.0690790868 12.5417848,0.0630589954 C12.6523675,0.0597274886 12.6873191,0.106719269 12.6852442,0.210434338 C12.6811529,0.40994484 12.684309,0.609630685 12.684309,0.809228858 C12.6843383,2.3135211 12.6843967,3.81781333 12.6842214,5.32207635 C12.6841921,5.54178046 12.6836661,5.54233571 12.4677611,5.54178046 C12.3266981,5.54140055 12.16512,5.58143708 12.0503876,5.52579507 C11.9392205,5.47184804 11.8761848,5.31868639 11.7850068,5.20000877 C11.5840058,5.38379689 11.3540442,5.51927817 11.082088,5.58462247 C10.0236917,5.83878137 8.94466338,5.1248453 8.77808804,4.04967452 C8.68410447,3.44293114 8.73474922,2.86041425 9.07546886,2.32404164 C9.70588347,1.33166174 11.0548807,1.28864438 11.704583,1.8160453 C11.7219419,1.83013114 11.7437428,1.83878137 11.7877246,1.86368"></path>
                        <path d="M15.8785374,3.09805881 L17.5691017,3.09805881 C17.5950232,2.67299945 17.2995419,2.35472365 16.8426871,2.30478027 C16.3716296,2.25328804 15.9491419,2.59389078 15.8785374,3.09805881 Z M15.835257,3.82213553 C15.814625,4.30964603 16.1912022,4.73756932 16.6676077,4.80086795 C17.1196698,4.86092274 17.5059492,4.74107616 17.8033885,4.3854232 C17.8828479,4.29044603 17.9449483,4.29135196 18.0292588,4.37683142 C18.1487547,4.49799306 18.2743584,4.6133684 18.4015985,4.72652274 C18.4860552,4.80162776 18.4823145,4.8688716 18.4107163,4.95031817 C18.1076077,5.29536292 17.731878,5.51816475 17.2804588,5.59508164 C16.7525611,5.68500311 16.2390122,5.63166977 15.7775401,5.33934466 C15.2549026,5.00829808 14.9823328,4.51710539 14.9102086,3.90697205 C14.8411529,3.32284785 14.9319511,2.77241863 15.2552826,2.27397845 C15.5698469,1.78906886 16.0166488,1.53038027 16.5987858,1.49224329 C17.7819383,1.41474192 18.4089045,2.20501041 18.5191364,3.15466521 C18.5381319,3.31828895 18.5344205,3.48442594 18.5476004,3.64886795 C18.5585593,3.78589808 18.4965173,3.82467799 18.36691,3.82403507 C17.5832168,3.82011909 16.7994944,3.8221063 16.0157428,3.82213553 L15.835257,3.82213553 Z"></path>
                        <path d="M28.1854743,3.09703306 L29.8739346,3.09703306 C29.8977812,2.66501845 29.5902889,2.34174539 29.1307163,2.3037253 C28.6594542,2.26477005 28.2376972,2.61221114 28.1854743,3.09703306 M28.1457008,3.83122119 C28.1003456,4.22547872 28.4141794,4.65804858 28.8283967,4.76643945 C29.3209045,4.89531616 29.7558122,4.78943854 30.0971748,4.39728511 C30.187973,4.29295635 30.2494013,4.28874813 30.3427711,4.38629699 C30.4537045,4.50213991 30.5730835,4.61056 30.6949757,4.71497644 C30.7915017,4.79767963 30.7884917,4.87152804 30.7067237,4.96136183 C30.4091967,5.28828785 30.0502707,5.51088511 29.6129081,5.58771434 C28.9992095,5.69552073 28.4173355,5.62044493 27.9148625,5.22107324 C27.4895109,4.88295452 27.2727876,4.42843763 27.2120606,3.89095452 C27.1554835,3.38994265 27.2175547,2.90953352 27.4505848,2.46109516 C27.7647109,1.85657279 28.2555237,1.51994447 28.9497921,1.48925954 C30.0847547,1.4391116 30.690183,2.1838495 30.8197319,3.11541479 C30.8443675,3.29274447 30.8378798,3.47425315 30.8506506,3.65348237 C30.8597392,3.78072256 30.8057045,3.82441205 30.6799839,3.82382758 C29.8959109,3.82029151 29.1118086,3.82189881 28.3277063,3.82254174 C28.2661319,3.82257096 28.204499,3.82826959 28.1457008,3.83122119"></path>
                        <path d="M20.0146411,1.91304183 C20.5354082,1.41729023 21.1111452,1.39499251 21.703832,1.60037699 C22.2202447,1.77928475 22.4780566,2.19896694 22.577505,2.71692858 C22.6166648,2.92082265 22.6330594,3.13167196 22.6352511,3.3395989 C22.6422941,4.0064263 22.6380858,4.67339982 22.6377059,5.34028566 C22.6376183,5.5226126 22.618389,5.54146192 22.4380493,5.54187105 C22.2579434,5.54228018 22.0775452,5.53570484 21.89779,5.54397516 C21.760263,5.55034594 21.7213078,5.49110941 21.7220091,5.36214502 C21.7257498,4.64660164 21.7323543,3.93082447 21.7178009,3.21554411 C21.7140603,3.03260347 21.6684128,2.83557699 21.5871416,2.67236237 C21.4321096,2.3611295 21.1398137,2.26887014 20.810316,2.30350027 C20.4486429,2.34149114 20.213158,2.55087927 20.1059945,2.89238795 C20.0630648,3.02915507 20.0426959,3.17819616 20.0412932,3.32188932 C20.034747,3.99847744 20.0386046,4.67515324 20.0382247,5.35179982 C20.0381078,5.53418521 20.0303635,5.54137425 19.847189,5.54187105 C19.6670539,5.54230941 19.4864511,5.53374685 19.3069881,5.54453041 C19.1601973,5.55335598 19.1385425,5.48032584 19.1389808,5.35910575 C19.1417571,4.57538338 19.1403543,3.791661 19.1403543,3.00790941 C19.1403543,2.58927927 19.1435689,2.17059068 19.1385425,1.752019 C19.1370813,1.62650301 19.1794265,1.56966283 19.3078064,1.58351489 C19.3559379,1.58868749 19.4056767,1.58915507 19.4536913,1.58345644 C19.7136658,1.55256694 19.9412895,1.58146922 20.0146411,1.91304183"></path>
                        <path d="M5.63209059,7.73407562 C5.85673352,7.51253041 6.07637918,7.3730747 6.34491616,7.33110941 C7.40340018,7.16564457 8.16500018,7.69859799 8.22523032,8.77002813 C8.27081936,9.58051945 8.23811799,10.3953067 8.24326137,11.2081943 C8.24396274,11.3229852 8.19738009,11.3626418 8.0855116,11.3591058 C7.89582027,11.3531149 7.70569059,11.3529688 7.51602849,11.3590473 C7.38995726,11.3631094 7.34343306,11.3133121 7.34404676,11.1873286 C7.34752438,10.4863386 7.34635543,9.78531945 7.34489425,9.0843295 C7.3447189,8.99236237 7.34419288,8.89823269 7.32584037,8.80877881 C7.22981114,8.34099434 6.96390429,8.1115295 6.5301947,8.1137505 C6.09619288,8.11600073 5.78250521,8.37781626 5.69381114,8.82005918 C5.67201023,8.92880073 5.66219105,9.04166283 5.66172347,9.15268384 C5.65883032,9.8195989 5.66043763,10.4865432 5.66017461,11.1534583 C5.66008694,11.3491112 5.65155361,11.3571478 5.45113717,11.3574108 C5.27588237,11.357703 5.10039379,11.3520044 4.92546046,11.3593688 C4.80529242,11.3644245 4.75838831,11.3197121 4.76101845,11.1995441 C4.76601571,10.9708683 4.76227507,10.7419879 4.76227507,10.5131953 C4.76224584,9.56877151 4.76242119,8.62437699 4.76215817,7.67995324 C4.7620705,7.35726466 4.75374174,7.40788018 5.04919379,7.39841169 C5.30130703,7.39031671 5.55783306,7.36024548 5.63209059,7.73407562"></path>
                        <path d="M7.37347215,5.19463452 C7.12957078,5.44438064 6.87672694,5.57635507 6.57572237,5.6146674 C5.72951963,5.72241534 4.98174247,5.34838064 4.80280548,4.37958429 C4.7773516,4.24182356 4.76484384,4.09976694 4.76411324,3.95960986 C4.7603726,3.22933772 4.76481461,2.49903635 4.76010959,1.76879342 C4.75923288,1.63293224 4.79731142,1.57305279 4.94214429,1.58187836 C5.11190502,1.59225279 5.28280548,1.58401169 5.45320913,1.58436237 C5.65765845,1.58480073 5.66011324,1.58690484 5.66017169,1.78661991 C5.6604347,2.48769753 5.65952877,3.18877516 5.66134064,3.88985279 C5.66154521,3.97176694 5.66873425,4.05514228 5.68515799,4.13527379 C5.77572237,4.57707836 6.05629954,4.82556785 6.45990868,4.82682447 C6.88978995,4.82813954 7.22828858,4.54829297 7.31125479,4.11315142 C7.33475068,3.98994411 7.3436347,3.86235324 7.34421918,3.73669114 C7.34737534,3.0843295 7.34553425,2.43193863 7.34579726,1.77954776 C7.34588493,1.58997333 7.35117443,1.58503452 7.54583379,1.5843916 C7.69677443,1.58389479 7.84768584,1.58424548 7.99862648,1.5842747 C8.24211872,1.58436237 8.24226484,1.5843916 8.24226484,1.83551123 C8.24235251,2.50248475 8.24229406,3.16948749 8.24229406,3.83649023 C8.24229406,4.34282082 8.24279087,4.84915142 8.24200183,5.35548201 C8.24170959,5.53579251 8.23454977,5.54137425 8.05079087,5.54195872 C8.03129863,5.54201717 8.01177717,5.54096511 7.9923726,5.54213406 C7.72585205,5.55811945 7.45214247,5.5895642 7.37347215,5.19463452"></path>
                        <path d="M25.2281688,1.47405735 C25.813082,1.48261991 26.3002126,1.69718064 26.6964281,2.12264913 C26.8165962,2.25164274 26.81645,2.26794959 26.6891806,2.39168292 C26.5740391,2.50360986 26.460914,2.61767014 26.3440482,2.72778521 C26.2021377,2.86148384 26.19904,2.8605779 26.0686437,2.7185505 C25.9009286,2.53587288 25.7083733,2.38975416 25.4630108,2.3322126 C24.9826016,2.21949662 24.5146711,2.45828384 24.2866674,2.92656511 C24.0241505,3.46583087 24.1470363,4.20200621 24.5589158,4.55727927 C25.0165304,4.95206283 25.6837669,4.89928475 26.0966108,4.42711671 C26.303661,4.19031671 26.2635368,4.19423269 26.5003076,4.41168658 C26.5935021,4.4972537 26.6804427,4.58989297 26.7769395,4.67136877 C26.8734948,4.75296146 26.8682637,4.82561169 26.7917268,4.91889388 C26.4994601,5.27495598 26.1301596,5.49346192 25.6782437,5.58802995 C24.774324,5.77722447 23.8955368,5.39243543 23.4729322,4.57563178 C22.8973706,3.46320073 23.3327752,1.93059068 24.7254035,1.54626922 C24.887303,1.50158612 25.0603076,1.49717333 25.2281688,1.47405735"></path>
                        <path d="M13.3935489,9.24851726 C13.3935196,8.94657753 13.3896621,8.64457936 13.3955653,8.34278575 C13.3976694,8.23448256 13.3623379,8.19526429 13.2536548,8.20099215 C13.1128256,8.2084442 12.9712658,8.20049534 12.8300858,8.20333005 C12.7316895,8.20531726 12.6875616,8.16279671 12.6889644,8.06378667 C12.6914192,7.88853187 12.6925589,7.71310174 12.6883799,7.53790539 C12.6860128,7.43895379 12.7228347,7.3951474 12.8247963,7.39885881 C12.9560986,7.40365151 13.0884822,7.3909684 13.2189954,7.40213187 C13.3647342,7.41461041 13.4015269,7.35493553 13.3963251,7.21813918 C13.3867397,6.96529534 13.3986922,6.71166247 13.3914155,6.45864329 C13.3878795,6.33514374 13.4224219,6.28069991 13.5550977,6.28704146 C13.7445845,6.29610082 13.9350356,6.29478575 14.1246685,6.28739215 C14.2442813,6.28274557 14.2895196,6.32295744 14.286305,6.44584329 C14.2793498,6.71347434 14.2883799,6.98154374 14.282389,7.24923324 C14.2798466,7.36323507 14.3188018,7.40508347 14.4339434,7.40163507 C14.6528877,7.3950305 14.8722411,7.40312548 15.0912731,7.39865425 C15.2049826,7.39634557 15.2490521,7.4432789 15.2454575,7.55535196 C15.2404603,7.71102685 15.2390283,7.86716932 15.2458374,8.02272731 C15.2515068,8.15286064 15.2053333,8.20929169 15.0692091,8.20470356 C14.8503233,8.19733918 14.6309991,8.20362228 14.4118502,8.20248256 C14.34259,8.20210265 14.2839379,8.20800584 14.2850776,8.29956384 C14.292442,8.89306886 14.2835288,9.48730447 14.3118174,10.0797574 C14.3279196,10.4160935 14.4841498,10.5354141 14.8209534,10.5551401 C14.9130959,10.5605465 15.0062027,10.5597574 15.0982575,10.5533574 C15.2077297,10.5457593 15.2472402,10.5946506 15.2451068,10.6992132 C15.2416292,10.8695876 15.2428566,11.0400789 15.2446393,11.2105118 C15.2455452,11.2978031 15.2094247,11.3583255 15.1199123,11.355257 C14.8193461,11.3448826 14.5135196,11.3583255 14.2198795,11.305752 C13.7229005,11.2167949 13.4669881,10.9044223 13.4235324,10.4004296 C13.4068457,10.2069684 13.3995397,10.0124552 13.3946301,9.81823416 C13.3898667,9.62845516 13.3935781,9.43841315 13.3935489,9.24851726"></path>
                        <path d="M27.0308208,7.85000037 C27.3098784,7.53806612 27.6197669,7.40878027 27.9713578,7.35302137 C28.3974984,7.28545607 28.4285048,7.30483142 28.4285048,7.72641315 C28.4285048,7.80429443 28.4285633,7.88214648 28.4285048,7.96002776 C28.4282711,8.17908895 28.4281249,8.17792 28.205177,8.20050995 C28.0848044,8.21269626 27.9613925,8.21617388 27.8455204,8.24685881 C27.3846035,8.36895562 27.1725268,8.71245151 27.1166802,9.15086612 C27.0702437,9.51572457 27.0674966,9.88674922 27.0568884,10.2553775 C27.0477706,10.5714616 27.052008,10.8880716 27.0563916,11.2043894 C27.0579697,11.3180698 27.0139003,11.3618469 26.901272,11.3587784 C26.716461,11.3538104 26.5310948,11.3508004 26.3465761,11.3596844 C26.2075003,11.3663474 26.1580245,11.3182743 26.1589596,11.1758086 C26.1642199,10.3824716 26.1614437,9.58913461 26.1614437,8.7957684 C26.1614437,8.39668895 26.1612099,7.99758027 26.1615313,7.59850082 C26.1617067,7.40074374 26.1646875,7.42014831 26.3520701,7.39557114 C26.6948647,7.35065425 26.9408701,7.44370265 27.0308208,7.85000037" ></path>
                        <path d="M14.2841892,3.58080877 C14.2841892,4.17460603 14.280507,4.76846174 14.286907,5.36222977 C14.2884267,5.50314667 14.2443865,5.55247635 14.1028851,5.54458594 C13.9136321,5.53397772 13.7233563,5.5396179 13.5335481,5.54283251 C13.4356486,5.54449826 13.392602,5.50665352 13.3927481,5.40553936 C13.394297,4.17410922 13.3943554,2.94267909 13.3926897,1.71121973 C13.3925728,1.61445991 13.4355609,1.5826937 13.52557,1.58383342 C13.7202294,1.586259 13.9152395,1.59087635 14.1095189,1.58208 C14.241581,1.57608913 14.2883682,1.61840511 14.2869363,1.75558137 C14.2805655,2.36393205 14.2841892,2.97239963 14.2841892,3.58080877"></path>
                    </g>
                </g>
            </g>
        </g>
    </symbol>
);

export const SVGFacebook = () => (
    <symbol id={ ICON_IDS.FACEBOOK } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-334.000000, -392.000000)" fill="#3A599B">
                <g transform="translate(334.000000, 392.000000)">
                    <path d="M10.7823491,15.3333333 L10.7823491,9.70506866 L12.6880819,9.70506866 L12.9733953,7.49243446 L10.7823491,7.49243446 L10.7823491,6.07976529 C10.7823491,5.43915605 10.9602167,5.00261673 11.8788884,5.00261673 L13.0505738,5.00206742 L13.0505738,3.02311111 C12.8478772,2.99619476 12.1523915,2.93593508 11.3432529,2.93593508 C9.65394956,2.93593508 8.49748015,3.96705119 8.49748015,5.86069913 L8.49748015,7.49243446 L6.58691336,7.49243446 L6.58691336,9.70506866 L8.49748015,9.70506866 L8.49748015,15.3333333 L1.66666667,15.3333333 C1.11438192,15.3333333 0.666666667,14.8856181 0.666666667,14.3333333 L0.666666667,1.66666667 C0.666666667,1.11438192 1.11438192,0.666666667 1.66666667,0.666666667 L14.3333333,0.666666667 C14.8856181,0.666666667 15.3333333,1.11438192 15.3333333,1.66666667 L15.3333333,14.3333333 C15.3333333,14.8856181 14.8856181,15.3333333 14.3333333,15.3333333 L10.7823491,15.3333333 Z"></path>
                </g>
            </g>
        </g>
    </symbol>
);

export const SVGTwitter = () => (
    <symbol id={ ICON_IDS.TWITTER } viewBox="0 0 16 14">
        <defs>
            <polygon id="path-1-twitter" points="6.4e-06 0 16 0 16 13.0008192 6.4e-06 13.0008192"></polygon>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-334.000000, -464.000000)">
                <g transform="translate(334.000000, 463.000000)">
                    <g transform="translate(0.000000, 1.333333)">
                        <mask id="mask-2-twitter" fill="white">
                            <use xlinkHref="#path-1-twitter"></use>
                        </mask>
                        <g></g>
                        <path d="M5.0316864,13.0008192 C11.0694464,13.0008192 14.3717824,7.9985792 14.3717824,3.6606592 C14.3717824,3.5185792 14.3717824,3.3771392 14.3622464,3.2363392 C15.0046784,2.7716352 15.5592384,2.1962752 16.0000064,1.5371392 C15.4009024,1.8026112 14.7653184,1.9767552 14.1145664,2.0536192 C14.7998144,1.6433792 15.3127744,0.9981312 15.5577664,0.2379392 C14.9133504,0.6203392 14.2084544,0.8897792 13.4732224,1.0347392 C12.2300864,-0.2871808 10.1505984,-0.3509888 8.8286784,0.8922112 C7.9761344,1.6939392 7.6144064,2.8886912 7.8790464,4.0286592 C5.2396224,3.8963712 2.7804864,2.6496512 1.1136064,0.5988992 C0.2423104,2.0988672 0.6873664,4.0177152 2.1299264,4.9809792 C1.6074944,4.9654912 1.0965184,4.8245632 0.6400064,4.5700992 L0.6400064,4.6116992 C0.6404544,6.1743232 1.7418944,7.5201792 3.2736064,7.8296192 C2.7903424,7.9614592 2.2832704,7.9807232 1.7913664,7.8859392 C2.2213824,9.2232192 3.4538304,10.1392512 4.8582464,10.1656192 C3.6958144,11.0792192 2.2598464,11.5751552 0.7814464,11.5736192 C0.5202624,11.5731072 0.2593344,11.5572992 6.4e-06,11.5262592 C1.5011904,12.4896512 3.2479424,13.0006272 5.0316864,12.9982592" fill="#1DA1F2" mask="url(#mask-2-twitter)"></path>
                    </g>
                </g>
            </g>
        </g>
    </symbol>
);
export const SVGYoutube = () => (
    <symbol id={ ICON_IDS.YOUTUBE } viewBox="0 0 16 12">
        <defs>
            <polygon id="path-1-youtube" points="5.24590164e-05 0.128729302 15.932459 0.128729302 15.932459 11.52 5.24590164e-05 11.52"></polygon>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-334.000000, -489.000000)">
                <g transform="translate(334.000000, 487.000000)">
                    <g transform="translate(0.000000, 2.000000)">
                        <g >
                            <mask id="mask-2-youtube" fill="white">
                                <use xlinkHref="#path-1-youtube"></use>
                            </mask>
                            <g></g>
                            <path d="M15.5995279,1.9074307 C15.4163148,1.20725581 14.8763803,0.655903256 14.1908721,0.468770233 C12.9483803,0.128662326 7.96621639,0.128662326 7.96621639,0.128662326 C7.96621639,0.128662326 2.98405246,0.128662326 1.74156066,0.468770233 C1.05605246,0.655903256 0.516118033,1.20725581 0.332904918,1.9074307 C5.24590164e-05,3.17650605 5.24590164e-05,5.82436465 5.24590164e-05,5.82436465 C5.24590164e-05,5.82436465 5.24590164e-05,8.47222326 0.332904918,9.74116465 C0.516118033,10.4413395 1.05605246,10.992826 1.74156066,11.1799591 C2.98405246,11.520067 7.96621639,11.520067 7.96621639,11.520067 C7.96621639,11.520067 12.9483803,11.520067 14.1908721,11.1799591 C14.8763803,10.992826 15.4163148,10.4413395 15.5995279,9.74116465 C15.9325115,8.47222326 15.9325115,5.82436465 15.9325115,5.82436465 C15.9325115,5.82436465 15.9325115,3.17650605 15.5995279,1.9074307" fill="#FF0000" mask="url(#mask-2-youtube)"></path>
                        </g>
                        <polygon fill="#FFFFFF" points="6.4 8.32 10.24 5.76 6.4 3.2"></polygon>
                    </g>
                </g>
            </g>
        </g>
    </symbol>
);

export const SVGCamera = () => (
    <symbol id={ ICON_IDS.CAMERA } viewBox="0 0 26 26">
        <g fill="#9C9896">
            <path d="M 25.1875 6.015625 C 25.1875 6.015625 20.609375 6.015625 19.796875 6.015625 C 18.984375 6.015625 18.984375 5.203125 18.984375 5.203125 L 18.984375 3.84375 C 18.984375 3.394531 18.621094 3.03125 18.171875 3.03125 L 7.8125 3.03125 C 7.363281 3.03125 7 3.394531 7 3.84375 L 7 5.203125 C 7 5.203125 7 6.015625 6.1875 6.015625 C 5.375 6.015625 0.8125 6.015625 0.8125 6.015625 C 0.363281 6.015625 0 6.378906 0 6.828125 L 0 22.1875 C 0 22.636719 0.363281 23 0.8125 23 L 25.1875 23 C 25.636719 23 26 22.636719 26 22.1875 L 26 6.828125 C 26 6.378906 25.636719 6.015625 25.1875 6.015625 Z M 23 10.257813 C 22.308594 10.257813 21.742188 9.695313 21.742188 9 C 21.742188 8.304688 22.308594 7.742188 23 7.742188 C 23.691406 7.742188 24.257813 8.304688 24.257813 9 C 24.257813 9.695313 23.691406 10.257813 23 10.257813 Z M 13 21.121094 C 9.070313 21.121094 5.878906 17.933594 5.878906 14 C 5.878906 10.066406 9.070313 6.878906 13 6.878906 C 16.929688 6.878906 20.121094 10.066406 20.121094 14 C 20.121094 17.9375 16.929688 21.121094 13 21.121094 Z M 13 19.457031 C 9.988281 19.457031 7.542969 17.015625 7.542969 14 C 7.542969 10.984375 9.988281 8.542969 13 8.542969 C 16.011719 8.542969 18.457031 10.984375 18.457031 14 C 18.457031 17.015625 16.011719 19.457031 13 19.457031 Z" />
        </g>
    </symbol>
);

export const SVGPlaylistPlaceholder = () => (
    <symbol id={ ICON_IDS.PLAYLIST_PLACEHOLDER } viewBox="0 0 135 135">
        <defs>
            <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="70.7106781%" id="pp-gradient-1">
                <stop stopColor="#FFFFFF" offset="0%"></stop>
                <stop stopColor="#FBF8F8" offset="100%"></stop>
            </radialGradient>
            <rect id="pp-path-1" x="0" y="0" width="135" height="135" rx="3.375"></rect>
            <mask id="pp-mask-1" fill="white">
                <use xlinkHref="#pp-path-1"></use>
            </mask>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-15.000000, -15.000000)">
                <g transform="translate(15.000000, 15.000000)">
                    <use fill="url(#pp-gradient-1)" xlinkHref="#pp-path-1"></use>
                    <path d="M149.863503,123.363 C149.863503,154.590698 124.559226,179.901 93.3223221,179.901 C62.1108527,179.910539 36.7875,154.593878 36.7875,123.363 C36.7875,92.1384817 62.1108527,66.825 93.3191428,66.825 C124.559226,66.825 149.863503,92.1384817 149.863503,123.363" fill="#FFD5BB" mask="url(#pp-mask-1)"></path>
                    <path d="M99.4536692,28.7248836 C93.5763814,27.8321067 88.8058556,27.8505779 84.7159248,27.2902835 C79.6559871,26.9116229 70.0863123,25.6247927 67.3194073,21.2625 C67.3194073,21.2625 67.2558003,21.6503962 67.2112754,22.3676963 C67.1031435,23.9716162 67.0936024,27.1825345 68.0699701,31.3170152 C68.9986324,34.8111593 70.3407403,38.382267 72.2457703,41.7717407 C72.8563976,42.843073 73.5528944,43.9267195 74.3193589,45.0257587 C79.0421794,51.6600147 86.5350853,56.3948109 97.7998869,58.8545652 C112.569435,62.0716407 126.58524,64.3867036 137.462038,77.79375 C137.487481,77.7414148 137.500203,77.6736869 137.528826,77.6151946 C139.529266,70.3436806 131.950491,33.625921 99.4536692,28.7248836" fill="#CFDEB6" mask="url(#pp-mask-1)"></path>
                </g>
            </g>
        </g>
    </symbol>
);

export const SVGUploadArrow = () => (
    <symbol id={ ICON_IDS.UPLOAD_ARROW } viewBox="0 0 12 12">
        <defs>
            <path d="M4,4 L4,6 L2,6 L2,2 L3,2 L13,2 L14,2 L14,6 L12,6 L12,4 L4,4 Z M9,10 L12,10 L8,14 L4,10 L7,10 L7,6 L9,6 L9,10 Z" id="upload-arrow-path"></path>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2.000000, -2.000000)">
                <mask fill="white">
                    <use xlinkHref="#upload-arrow-path"></use>
                </mask>
                <use fill="#6D6565" transform="translate(8.000000, 8.000000) scale(1, -1) translate(-8.000000, -8.000000) " xlinkHref="#upload-arrow-path"></use>
            </g>
        </g>
    </symbol>
);

export const SVGImportArrow = () => (
    <symbol id={ ICON_IDS.IMPORT_ARROW } viewBox="0 0 12 12">
        <defs>
            <path d="M4,4 L4,6 L2,6 L2,2 L3,2 L13,2 L14,2 L14,6 L12,6 L12,4 L4,4 Z M9,10 L12,10 L8,14 L4,10 L7,10 L7,6 L9,6 L9,10 Z" id="import-arrow-path"></path>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2.000000, -2.000000)">
                <mask fill="white">
                    <use xlinkHref="#import-arrow-path"></use>
                </mask>
                <use fill="#6D6565" transform="translate(8.000000, 8.000000) scale(1, -1) rotate(-90.000000) translate(-8.000000, -8.000000) " xlinkHref="#import-arrow-path"></use>
            </g>
        </g>
    </symbol>
);

export const SVGVideo = () =>
    <symbol id={ ICON_IDS.VIDEO } viewBox="0 0 16 16">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M0.5,3 L15.5,3 L15.5,13 L0.5,13 L0.5,3 Z M6.5,5 L6.5,11 L10.5,8 L6.5,5 Z" fill="#6D6565" /></g>
    </symbol>;

export const SVGVideoError = () => (
    <symbol id={ ICON_IDS.VIDEO_ERROR } viewBox="0 0 63 52">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.3">
            <g transform="translate(-669.000000, -398.000000)" stroke="#FFFFFF" strokeWidth="2">
                <g transform="translate(400.000000, 281.000000)">
                    <g transform="translate(262.000000, 103.000000)">
                        <path d="M7,52 L44,52 M60,52 L68,52 L68,15 L8,15 L8,53 L8,52 M35,27 L44,33.137 L35,39.272 L35,27 Z M68,65 L36,65 L52,39 L68,65 Z M52,57 L52,48.9852034 L52,57 Z M52,61 L52,59 L52,61 Z"></path>
                    </g>
                </g>
            </g>
        </g>
    </symbol>
);
