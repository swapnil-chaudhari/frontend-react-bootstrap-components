import debounce from 'lodash.debounce';

const debounceTimeout = 400;
const debounceRequest = debounce((inputValue, onSearchRequest, isSearchForTracks) => (
    onSearchRequest(inputValue, isSearchForTracks)
), debounceTimeout);

export default debounceRequest;
