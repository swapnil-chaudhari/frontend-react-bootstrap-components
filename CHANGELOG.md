## 1.4.46 (November 12, 2018)
* Added `<PhysicalAudio /> icon
* Added `<DigitalAudio /> icon
* Added `<Video /> icon

## 1.4.45 (November 7, 2018)
* Adding VideoError icon

## 1.4.44 (October 24, 2018)
* Fix ToggleInput display name

## 1.4.43 (October 24, 2018)
* Add a ToggleInput

## 1.4.42 (October 23, 2018)
* Add a containerClassName to SelectInput so it can be made something other than block.

## 1.4.41 (October 11, 2018)
* Added `startFormatter` and `endFormatter` properties for `RangeDateInput` component

## 1.4.40 (October 4, 2018)
* Removing a React.PropTypes usage that was making the package not react 16 compatible

## 1.4.39 (October 4, 2018)
* Removing `<DateInput />`, now react 16 compatible

## 1.4.38 (September 26, 2018)
* `<RangeDateInput />` Fixed selectMode prop

## 1.4.37 (September 18, 2018)
* Changed `fieldset` tag to `div` for `RadioButtonGroup`

## 1.4.36 (September 18, 2018)
* Added `{onLabelClick}` property to `<Checkbox>` component.

## 1.4.35 (September 17, 2018)
* Remove width and height of CloseRound icon from svg

## 1.4.34 (September 13, 2018)
* Prevent the Month navigation buttons in a `<DayInput>` component from submitting a form.

## 1.4.33 (September 12, 2018)
* Prevent the Enter key from submitting a form when used inside a `<DayInput>` component.

## 1.4.31 (September 10, 2018)
* Added `{returnEventIfError}` property to `<DayInput>` component.
* Added selectMode prop for rangeDataInput component

## 1.4.30 (August 28, 2018)
* Remove console log

## 1.4.29 (August 22, 2018)
* `<RadioButton />`: Reduced clickable area for selectors

## 1.4.28 (July 17, 2018)
* <RangeDateInput />: Fixed keyboard navigation

## 1.4.27 (July 17, 2018)
* <DayPicker />: calendar open/close on Enter key
* <RangeDateInput />: Added keyboard navigation

## 1.4.26 (July 12, 2018)
* Added `<UploadArrow /> icon
* Added `<ImportArrow /> icon

## 1.4.25 (July 3, 2018)
`<DayInput />` updates:
* Added limitation by days if interval is specified
* Fixed behavior when deselecting the date

## 1.4.24 (June 18, 2018)
* Added limitation by month if interval is specified
* Fixed month dropdown localization

## 1.4.23 (May 31, 2018)
* Updated webpack configuration for CSS style-loader

## 1.4.22 (May 30, 2018)
* Added `<DayInput />` component

## 1.4.21 (May 24, 2018)
* Today Button optional in calendar in date picker

## 1.4.20 (May 22, 2018)
* Revert minification.

## 1.4.19 (May 17, 2018)
* DIG-8278: Allowing tagsinput to have a disabled state

## 1.4.18 (May 17, 2018)
* Fixed: DATA-5192 - The search bar returns artist duplicates

## 1.4.17 (May 11, 2018)
* Bring back minification but without function name mangling.

## 1.4.16 (May 11, 2018)
* Revert minification and tree shaking to library output.

## 1.4.15 (May 11, 2018)
* Add minification and tree shaking to library output.

## 1.4.14 (May 10, 2018)
* Updated `<SearchRow />`: fixed Artist search for D3 labels

## 1.4.13 (April 24, 2018)
* Updated `<SearchRow />`: blank search will not display a dropdown list with previous results

## 1.4.12 (April 24, 2018)
* Added `{onClick}` property to `<Checkbox>` component.

## 1.4.11 (April 20, 2018)
* Added upper case format for search name in `<SearchRow />` component.
Use `{searchNameUpper}` parameter in these messages:
```
    searchResultsHeadingLabel: PropTypes.object,
    noMatchLabel: PropTypes.object
```
Message format example:
```
    searchResultsHeadingLabel: { defaultMessage: '{searchName} in upper case is: {searchNameUpper}' }
```

## 1.4.10 (April 17, 2018)
* Expose focus attribute on <DateInput>

## 1.4.9 (April 12, 2018)
* Set proper hover/active colors for dropdown menu items

## 1.4.8 (April 12, 2018)
* Update DropdownButton to include className attribute
* Active items in bootstrap dropdown highlight in light blue
* Remove PhantomJS dependency

## 1.4.7 (April 9, 2018)
* Restoring jsx-to-string dependency
* Converting tests to use jest and snapshots

## 1.4.6 (April 5, 2018)
* Updated props for `<SearchRow />` with new props
```
    onSearchRequest: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    messages: PropTypes.shape({
        artistsLabel: PropTypes.object,
        tracksLabel: PropTypes.object,
        ...
```
* Removed props from `<SearchRow />`
```
    onArtistSelect: PropTypes.func.isRequired,
    onTrackSelect: PropTypes.func.isRequired
```

## 1.4.5 (April 4, 2018)
* Added `<PlaylistPlaceholder />` icon
* Updated `<SVGDefinitions />` style

## 1.4.4 (March 29, 2018)
* Added social media icons: Facebook, AAN, Twitter, YouTube, Instagram
* Added Camera icon

## 1.4.3 (March 14, 2018)
* Update ButtonsRow to include className attribute

## 1.4.2 (March 14, 2018)
* Updated props for `<SearchRow />`
* Removed definition of `<SelectedTrack />` component

## 1.4.1 (March 14, 2018)
* Added placeholder props for `<RangeDateInput />`

## 1.4.0 (March 13, 2018)
* Update webpack to not minimize bundle.

## 1.3.51 (March 13, 2018)
* Prefix generated ids with a random number to prevent clashes with packages that has this package as a dependency.

## 1.3.50 (March 12, 2018)
* Export `<ListHeaderSearch />`.

## 1.3.49 (March 7, 2018)
* Updated `<ClickableTable />` with new props
```
    rowRenderer: PropTypes.func,
```

## 1.3.48 (March 7, 2018)
* Make it possible to manually edit dates in `<RangeDateInput isManuallyEditable={ true } />`

## 1.3.47 (March 6, 2018)
* Updated `<ClickableTable />` with new props
```
    tableHeading: PropTypes.string,
    footer: PropTypes.array,
    footerRenderer: PropTypes.func,
    headerRenderer: PropTypes.func,
    footerClassName: PropTypes.string,
    footerCellClassName: PropTypes.string,
```

## 1.3.46 (March 5, 2018)
* Added `<AppleMusic />` and `<Spotify />` icon.

## 1.3.45 (March 1, 2018)
* Added styling for `<SearchRow />` component

## 1.3.44 (February 28, 2018)
* Update modal component to block background scroll and keep header and footer constant while body scrolls

## 1.3.43 (February 23, 2018)
* Update and unify Icon-info size

## 1.3.42 (February 23, 2018)
* Use proper css scoping of the modal class

## 1.3.41 (February 21, 2018)
* Adding displayName to MaintenanceScreen

## 1.3.40 (February 20, 2018)
* Made SelectInput have the ability to drop up

## 1.3.39 (February 16, 2018)
* Added `<SelectedTrack />` component (Moved from `Source Of Streams` PR #322)
* Added `<SearchResults />` component (Moved from `Source Of Streams` PR #325)
* Added `<SearchRow />` component (Moved from `Source Of Streams` PR #326)

## 1.3.38 (February, 2018)
* Add a gear svg icon and <ButtonsRow />: add support of multiple active/pressed buttons

## 1.3.37 (February, 2018)
* Add support for many selected indexes for <ButtonsRow /> (multi prop)

## 1.3.36 (January 30, 2018)
* Making modal zIndex updateable

## 1.3.35 (January 30, 2018)
* Adding a modal component

## 1.3.34 (January 23, 2018)
* Added fullscreen option to LoadingIndicator

## 1.3.33 (January 17, 2018)
* Updated `onChange` in `SelectInput` for `async` selectType

## 1.3.32 (January 17, 2018)
* Updated `PropTypes` to be imported from `prop-types` npm package (fixes React 16 support)

## 1.3.31 (January 17, 2018)
* Added `async` selectType to `SelectInput`

## 1.3.30 (January 16, 2018)
* Added partial prop to checkbox to make a checkbox that indicates its children are in a partial state

## 1.3.29 (January 11, 2018)
* Added icons `<Maintenance />` and `<LogoAndName />`

## 1.3.28 (January 10, 2018)
* Export `<Overlay />` from 'react-bootstrap'.

## 1.3.27 (December 27, 2017)
* Added peer dependencies to resolve React versions conflict.
* Added support of custom logo for `<MainNavigation />`

## 1.3.26 (December 19, 2017)
* Added `<Error404 />` icon

## 1.3.25 (December 15, 2017)
* Updated styles for `<Pdf />`, `<Xls />`, `<RoyaltyShareLogo />` icons

## 1.3.24 (December 15, 2017)
* Added `<Pdf />`, `<Xls />`, `<RoyaltyShareLogo />` icons

## 1.3.23 (December 15, 2017)
* `<History />` icon - moved fill property from svg to scss

## 1.3.22 (December 15, 2017)
* Added `<History />` icon

## 1.3.21 (December 14, 2017)
* Changed hover state pointer icon for disabled select inputs

## 1.3.20 (December 11, 2017)
* Change `descriptionText` property to `description` in `DismissbleAlert` component
* and it's type to `any`

## 1.3.19 (December 8, 2017)
* Added `descriptionText` property to `DismissibleAlert` component

## 1.3.18 (November 28, 2017)
* Added `<AudioPlayerPreviousLite />`, `<AudioPlayerNextLite> />` icons
* Renamed `<AudioPlayerTrackListPause />` to `<AudioPlayerPauseLite> />`

## 1.3.17 (November 21, 2017)
* Added `<FilledChevronDown> />`, `<FilledChevronUp> />` icons

## 1.3.16 (November 17, 2017)
* Upgrading react-select v1.0.0-rc.2 -> v1.0.0-rc.10

## 1.3.15 (November 16, 2017)
* Fixed clearfix style for `FormField`
* Added `<TransparentLogo />` icons

## 1.3.14 (November 13, 2017)
* Included build file with icons from 1.3.13

## 1.3.13 (November 13, 2017)
* Added `<NewProduct />`, `<GoToCatalog />`, `<Advertise />` icons

## 1.3.12 (November 7, 2017)
* Tagged last version too soon, so 1.3.11 is messed up, use this

## 1.3.11 (November 7, 2017)
* Updated LoadingButton interface, isLoading -> loading and disable button when loading

## 1.3.10 (November 7, 2017)
* Added a LoadingButton

## 1.3.9 (November 7, 2017)
* Set width and height for audio player track list pause icon.

## 1.3.8 (November 7, 2017)
* Added audio player track list pause icon.

## 1.3.7 (November 2, 2017)
* Making medium a valid button size

## 1.3.6 (October 30, 2017)
* CSS Tweaks for Date Inputs

## 1.3.5 (October 30, 2017)
* CSS Tweaks for Date Inputs

## 1.3.4 (October 25, 2017)
* Add `success` option for `<DismissibleAlert />`.

## 1.3.3 (October 25, 2017)
* Add dynamic period calculation for `getAxisDates`.

## 1.3.2 (October 19, 2017)
* Add icon support for `<SnapshotItem />`.

## 1.3.1 (October 17, 2017)
* Bugfixing `<ChartGraph />`.

## 1.3.0 (October 17, 2017)
* Upgrading compiler dependencies

## 1.2.67 (October 13, 2017)
* Added `<ChartGraph />`.

## 1.2.66 (October 11, 2017)
* Bugfixing `<SingleDateInput />` and `<DateRangeInput />`.

## 1.2.65 (October 11, 2017)
* Added min and max date functionality for the `<SingleDateInput />` and `<DateRangeInput />` along with internal focusedInput state management for the `<DateRangeInput />`.

## 1.2.64 (October 10, 2017)
* Added `<SingleDateInput />` and `<DateRangeInput />`.

## 1.2.63 (October 6, 2017)
* Fixed TerritoriesListManager.handleTerritorySearch function for a case when custom territory/continent key is used

## 1.2.62 (September 29, 2017)
* Added `<TerritoriesListManager />` component

## 1.2.61 (September 27, 2017)
* Use `<span />` to wrap `<Help />` when overriding trigger event. This matches the behavior when using a normal trigger.

## 1.2.60 (September 27, 2017)
* Updated `<ThreeDots />` icon to use currentColor in fill property.

## 1.2.59 (September 26, 2017)
* Add option to always hide or show the overlay for `<Help />`.

## 1.2.58 (September 25, 2017)
* Add className for text label in `<GroupBarChart />`.

## 1.2.57 (September 21, 2017)
* Add `<ServerError />` icon.

## 1.2.56 (September 21, 2017)
* Updated `<FormField />` to support `errorMessage` as node

## 1.2.55 (September 20, 2017)
* Updated `<SelectInput />` not to decorate `onChange` handler when property `multi` set to `true`.

## 1.2.54 (September 18, 2017)
* Added `<Refresh />` icon.

## 1.2.53 (September 13, 2017)
* Added `<AudioPlayerNext />` and `<AudioPlayerPrevious />` icons.

## 1.2.52 (September 8, 2017)
Added `size` property to `Pagination` component

## 1.2.51 (September 7, 2017)
* Added tetherProps to SelectInput component

## 1.2.50 (September 7, 2017)
* Added absolute positioning for icons for usage inside another SVG like chart components.
* Added possibility to work with `SelectInput` component in `overflow: auto` container.

## 1.2.49 (September 6, 2017)
* Added ability to specify custom render function to `<DoughnutChart />` component.

## 1.2.48 (September 1, 2017)
* Added `<FullWidthButton />` component.

## 1.2.47 (August 31, 2017)
* Added an option to `<Help />` to pass a class name to the underlying `<Overlay />`.

## 1.2.46 (August 30, 2017)
* Remove href property to `<Icon />` for audio-player-play to support safari.

## 1.2.45 (August 29, 2017)
* Added `innerPadding` property to `<GroupedBarChart />` component.

## 1.2.44 (August 29, 2017)
* Updated text ticks foreground for `<GroupedBarChart />` component.

## 1.2.43 (August 28, 2017)
* Added `<DownloadSymbol />` icon.

## 1.2.42 (August 24, 2017)
* Updated `<Help />` to allow for custom children and to use `<Popover />` as the overlay component.

## 1.2.41 (August 23, 2017)
* Updated `<GroupedBarChart />` styling.

## 1.2.40 (August 23, 2017)
* Updated `<GroupedBarChart />` for better styling purposes.

## 1.2.39 (August 22, 2017)
* Added `<CollapsableAlert />` component
* Added `<UpDirectionArrow />` icon

## 1.2.38 (August 18, 2017)
* Added classNames customization for `<DoughnutChart />` and `<GroupedBarChart />` components.

## 1.2.37 (August 16, 2017)
* Add `<DownDirectionArrow />` icon.

## 1.2.36 (August 14, 2017)
* Provide more generic props to `<DoughnutChart />`

## 1.2.35 (August 10, 2017)
* Adjust the spacing of text in `<DismissableAlert />`.

## 1.2.34 (August 10, 2017)
* Add Audio Player icons.

## 1.2.33 (August 2, 2017)
* Move hard coded fill property in simple components into the a scss file.

## 1.2.32 (August 2, 2017)
* Changed DoughnutChart component props to be more generic
* Added `<Man />` and `<Woman />` icons

## 1.2.31 (July 28, 2017)
* Added `<Plus />` icon.

## 1.2.30 (July 28, 2017)
* Added `<ViewMoreNextArrow />`

## 1.2.29 (July 27, 2017)
* Added `<GroupedBarChart />` component

## 1.2.28 (July 21, 2017)
* Center tooltip over the help icon

## 1.2.27 (July 18, 2017)
* Complete Checkmark icon
* Updated FormField and Help component to display tooltip on top of help icon

## 1.2.26 (July 17, 2017)
* Tooltip node for form-field component
* CleanVersion icon icon

## 1.2.25 (July 11, 2017)
* Changed the color of StatusInProgress icon to #FF893E (fox).

## 1.2.24 (July 5, 2017)
* Added error color to DateField border

## 1.2.23 (June 30, 2017)
* Added onClick handlers to Stop and Play icons

## 1.2.22 (June 29, 2017)
* Added SVG icon for empty tracks message

## 1.2.21 (June 27, 2017)
* Fixed DismissibleAlert css issues

## 1.2.20 (June 26, 2017)
* Added `<Play />` and `<Stop />` icons

## 1.2.19 (June 26, 2017)
* Added danger class to DismissibleAlert

## 1.2.18 (June 23, 2017)
* Fixed SelectInputWithAddNew width issue by adding min-width css style;

## 1.2.17 (June 21, 2017)
* ChartLine component
* ChartOverlayTrigger component
* ChartShadedArea component
* RadioButton label is able to accept any type of content

## 1.2.16 (June 19, 2017)
* New SVG icon for empty artwork message

## 1.2.15 (June 14, 2017)
* Wraps `SelectInput`, `SelectInputWithAddNew` and `TagsInput` with  a `div`
* Adds new prop, `qaid`,  the `div`'s `id` element

## 1.2.14 (June 7, 2017)
* Adds DismissibleAlert component

## 1.2.13 (May 26, 2017)
* Lock React versions and restore externals config

## 1.2.12 (May 25, 2017)
* Remove react-highlight module and associated bugs

## 1.2.11 (May 23, 2017)
* Update incomplete alert icon to match new design

## 1.2.10 (May 22, 2017)
* Fixtures use top level React API instead of JSX

## 1.2.9 (May 18, 2017)
* Checkbox can have 'indeterminate' attribute

## 1.2.8 (May 17, 2017)
* Add icons for CompleteCheckmark and IncompleteAlert

## 1.2.7 (May 10, 2017)
* SnapshotItem can have any children prop.

## 1.2.6 (April 24, 2017)
* Pagination arrows stylable via CSS

## 1.2.5 (April 24, 2017)
* DoughnutChart component
* SnapshotItem valueHint prop

## 1.2.4 (April 21, 2017)
* ChartContainer component
* ChartRectClipPath component
* ChartXAxis component
* Grid component
* YAxis component
* Index file re-organized
* Snapshot styling improvements
* Added labelAppendix prop to FormField component
* Added id to SelectInput at top level for automated testing
* Added id property to ButtonsRow component
* Removed imprint reference from FromField

## 1.2.3 (April 13, 2017)
* Add id to SelectInput top level

## 1.2.2 (April 5, 2017)
* Updates including the addition of id's to support automated front end testing.

## 1.2.0, 1.2.1 (March 29, 2017)
* DownloadBox icon.

## 1.1.10 (March 24, 2017)
* Attention icon.

## 1.1.9 (March 23, 2017)
* UpAndDownArrows icon.
* ButtonsRow component can receive className.
* Close icon fill is not hardcoded anymore.

## 1.1.8 (March 20, 2017)
* SnapshotItem should not have a hard-coded width.

## 1.1.7 (March 15, 2017)
* ButtonsRow can optionally disable child buttons.

## 1.1.6 (March 15, 2017)
* ExternalLink icon.

## 1.1.5 (March 13, 2017)
* ButtonsRow active button shadow and background color fix for Chrome.

## 1.1.4 (March 13, 2017)
* Snapshot tooltip placement option added.
* Changed id generation for FormField and Checkbox components for correct usage in functional tests.

## 1.1.3 (March 7, 2017)
* ButtonsRow active button shadow.
* Fix issue with superagent request for global style timestamp.

## 1.1.2 (March 7, 2017)
* ButtonsRow sizing improvement
* Snapshot styling improvement
* CleanVersion icon

## 1.1.1 (March 1, 2017)
* Expose Popover component from `react-boostrap`

## 1.1.0 (February 28, 2017)
* SelectInput is able to receive all `react-select` props

## 1.0.9 (February 24, 2017)
* Snapshot component
* Icon updates
* General updates in Help and SelectInput components

## 1.0.8 (February 15, 2017)
* Remove postinstall hook. Build folder is now committed by frontend-react-components-build job.
* Improve build time by excluding node_modules from build.

## 1.0.7 (February 10, 2017)
* DropdownButton component

## 1.0.6 (February 8, 2017)
* Fixed build artifacts.

## 1.0.5 (February 6, 2017)
* TagsInput component
* ButtonsRow is able to take custom bootstrap style
* Better Pagination styles, added docs how to use

## 1.0.4 (February 2, 2017)
* Checkbox component
* Alert component
* MainNavigation component

## 1.0.3 (January 27, 2017)
* Add postinstall-build and call inside postinstall to temporerally add dev dependencies needed in production mode while building.
* DIG-3163 Added SelectWithAddNewButton component (#34)
* DIG-3002 readme spaces fix

## 1.0.2 (January 26, 2017)
* DIG-3157 Implemented RadioButton and RadioButtonGroup (#33)
* DIG-3043 CharactersLimitIndicator moved to 'frontend-react-components'. (#31)
* DIG-3055 pagination component
* DIG-3043 CharactersLimitIndicator moved to 'frontend-react-components'. (#24)
* DIG-3002 added a few more docs
* DIG-3045 FormField updated. imprintSelectId shouldn't be required
* DIG-3002 Updated Readme
* DIG-3054 sub navigation component
* DIG-3051 added select input, updated playground
* DIG-3056 tooltip related components
* DIG-3042 ButtonsRow component added to frontend-react-components (#23)
* DIG-3048 LoadingStateWrapper component
* DIG-3044 Added ClickableTable component (#22)
* Added FormField component (#19)
* DIG-3046 Exporting Icons components, as separate instance (#20)
* Moved Icons to frontend-react-components library (#18)
* Added Help component, which is used in Form-Field component. (#17)
* updated README. Specified installation, build steps. Added usage examples (#16)
* DIG-2997 Calendar styles update (#15)

## 1.0.1 (January 9, 2017)
* Fixed build artifacts.

## 1.0.0 (January 4, 2017)
* Initial release with `Button` and `DateInput` components.
