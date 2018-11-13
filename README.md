# frontend-react-components

## Setup
Install the `yarn` package manager for building `frontend-react-components` library and then install the dependencies
```bash
brew install yarn
yarn install
```
### To run the playground locally:
We have an interactive playground that allows you to dynamically render components from the library in a sandbox environment. This is useful for testing and development, as well as to get an idea of usage. To run this playground, enter the following command after setup:
```bash
yarn start
```

This will then start up the playground on localhost:3000

### To run the living style guide:
In addition to the playground, we have the option of rendering all available components on a single page. This is useful to get an at-a-glance understanding of the look and feel of all of the available components. Similar to the playground, after setup you can run the following command:
```bash
yarn run guide
```

This will then render the components on localhost:3000.

Please note that you can only have either the playground or style guide running at a time.

### To test the components:
- `yarn test` or `npm run test` tests the library and runs the linter
- `yarn watch` runs the tests and re-runs them on any change

## Design Hub
[https://frontend-design-hub.theorchard.io/](https://frontend-design-hub.theorchard.io/)

## Creating new components
### Add the component with its tests
Components should be added to their own folder under the `src` folder, named in a kebab case style that mimics the name of the component. In this folder, there should be the component js file (named the same as the folder) as well as optionally a `.scss` file containing any styles needed for the component (also named the same).

Additionally, tests should be added in a subdirectory here in a folder named `__tests__` and fixture files with default props should likewise live in `__fixtures__`. An example of this structure is as follows:
```bash

src
    - my-component-name
        - __tests__
            - my-component-name.spec.js
        - __fixtures__
            - default.js
        my-component-name.js
        my-component-name.scss
```

### Add a new fixture file
In order to render components in the living style guide, props (especially required props) should be included in fixture file. At the very least there should be a fixture named `default.js` but additional named fixture files may be included as well to represent different prop configurations. These fixture files should be used in unit tests when possible to render the components.

### Export the component from the index file
To make a component available for use externally, add an export statement in `src/index.js`. Components should be thematically organized within the file and placed in alphabetical order for improved readability.

### Release a new version
After you've issued a PR with your new component or component modifcation and merged the changes, you must cut a new release in order to make the change available to other repositories. To do this, issue a new PR with the following file updates:
- `package.json` with the new version number following the `v1.x.x` pattern.
- `CHANGELOG.md` with short description about updates since previous release.

Draft and create new release in [releases](https://github.com/theorchard/frontend-react-components/releases) section with tag, following the `v1.x.x` pattern.

## To use in other projects:
- First, include library to the project, adding it as dependency to yours `package.json`:
    ```
    "frontend-react-components": "git+ssh://git@github.com:theorchard/frontend-react-components.git",
    ```

- Next install library, using `yarn`:

    ```
    yarn install frontend-react-components
    ```

- Include styles into styles entry file
    ```
    @import "~frontend-react-components/build/react-components.css";
    ```


### Component usage:
After you've set up the component library, you're ready to use the components in your project. To do this, import the component as you would from any other third party repository with an import statement like so:
```
import { Button } from 'frontend-react-components;
```

### Adding an `<svg>` icon

0. Write tests.
1. Add the `<svg>` as a `<symbol>` (so wrap the paths, links, etc. in a `<symbol>` instead of an `<svg>`) in `src/svg-definitions/svgs.js`, and export it by name as a React component.
    - Create an id in the `ICONS_IDS` map with the name of `icon-[name]`, where `[name]` is a unique descriptive name. For example `icon-example`.
    - Make sure the symbol's id property is set to the id from the `ICONS_IDS` map (set above).
    - Remove explicit height, width and xmlns tags.
    - Keep the viewBox definition

```html
<!-- before -->
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><title>example</title><path d="zzzzzzz"></path></svg>

<!-- after -->
<symbol id="icon-example" viewBox="0 0 100 100"><title>example</title><path d="zzzzzzz"></path></symbol>
```

2. Render that component inside `src/components/svg-definitions/svg-definitions.js`. This creates an SVG "sprite" that renders in the document body.
3. Create an icon component in `src/components/icons/[name].js`, that uses `<Icon>` and the `id`.

```js
const ExampleIcon = () => <Icon id="icon-example" />
```
4. Export that component in `src/components/icons/index.js`, so it can be used like: `import { Example } from 'src/components/icons'`.

5. Update snapshots

## Using `<svg>` icons in your project

All of the icons available in the component library are initially defined and rendered in the `<SVGDefinitions>` component. Each individual icon then references the initial rendering from this component, so without it the icons will not render.

In whatever entry point handles rendering your application, you must therefore also render this component. You import it like so:
```js
import { SVGDefinitions } from 'frontend-react-components';
```

And then render it like:
```js
<IntlProvider
    locale={ this.props.locale }
    messages={ this.props.messages }
>
    <Provider store={ getStore() }>
        <main>
            <SVGDefinitions />
            <Routes
                dispatch={ getStore().dispatch }
                getState={ getStore().getState }
                historyFactory={ getHistory }
            />
        </main>
    </Provider>
</IntlProvider>
```

## Available Components

#### Button

    import { Button } from 'frontend-react-components';

    <Button
        bsSize="large, medium, small, xsmall"
        bsStyle="default, primary, success, info, warning, danger, link"
        type="button, reset, submit"
        active={bool}
        disabled={bool}
        block={bool}
        onClick={function}
    >
        child content
    </Button>

#### ButtonsRow

    import { ButtonsRow } from 'frontend-react-components';

    <ButtonsRow
        childElements={arrayOf({ icon: Icon, text: string })}
        selectedIndex={number}
        bsStyle="default, primary, success, info, warning, danger, link"
        disabled={bool}
        onSelect={function}
        autoSetWidth={bool}
    />

#### ChartContainer

    import { ChartContainer } from 'frontend-react-components';

    <ChartContainer
        className={ string }
        height={ number }
    >
        child content
    </ChartContainer>

#### ChartOverlayTrigger

    We are using SVG on low level for rendering all chart related components. <ChartOverlayTrigger /> must be put as last element inside of <ChartContainer />, because in terms of SVG z-index cannot be used.

    import { ChartOverlayTrigger } from 'frontend-react-components';

    <ChartOverlayTrigger
        className={ string }
        x={ number }
        y={ number }
        width={ number }
        height={ number }
        onMouseMove={ func }
        onMouseLeave={ func }
        onClick={ func }
    />

#### Checkbox

    import { Checkbox } from 'frontend-react-components';

    <Checkbox
        children={any}
        className={string}
        checked={bool}
        readOnly={bool}
        disabled={bool}
        onClick={function}
        onChange={function}
        isIndeterminate={ bool }
        partial={false}
        onLabelClick={function}
    />

#### ClickableTable

    import { ClickableTable } from 'frontend-react-components';

    <ClickableTable
        header={string}
        rows={array}
        cellRenderer={function}
        onRowClick={function}
        tableClassName={string}
        rowClassName={string}
        tableHeading={string}
        footer={array}
        footerRenderer={func}
        rowRenderer={func}
        headerRenderer={func}
        footerClassName={string}
        footerCellClassName={string}
    />

#### DismissibleAlert

    import { DismissibleAlert } from 'frontend-react-components';

    <DismissibleAlert
        style={oneOfType(string)}
        titleText={string} // required
        subtitleText={string} // required
        buttonText={string} // required
        onDismiss={func} // required
        description={any}
    />

#### DoughnutChart

    import { DoughnutChart } from 'frontend-react-components';

    <DoughnutChart
        className={string}
        title={string} // required
        data={array} // required
        valueKey={string} // required
        labelKey={string} // required
        subLabelKey={string}
        onHover={func}
    />

#### DropdownButton

    import { DropdownButton } from 'frontend-react-components';

    <DropdownButton
        id={string}
        dropup={bool}
        children={any}
        disabled={bool}
        pullRight={bool}
        open={bool}
        onClose={func}
        onToggle={func}
        onSelect={func}
        bsStyle={string}
        bsSize={string}
        title={node} // required
        withCaret={bool}
        className={string}
    />

#### FormField

    import { FormField } from 'frontend-react-components';

    <FormField
        label={string}
        labelAppendix={node}
        help={oneOfType([string, node])}
        note={string}
        errorMessage={oneOfType([string, node])}
        className={string}
        id={string}
        isRequired={bool}
        children={node}
    />

#### GroupedBarChart

    import { GroupedBarChart } from 'frontend-react-components';

    <GroupedBarChart
        className={string}
        data={arrayOf({key, values})} // required
        children={any}
        maxYValue={number}
        yTicks={arrayOf(number)} // required
        yTicksFormat={func}
        width={number} // required
        height={number} // required
        xOffset={number}
        yOffset={number}
        valuesFormat={func}
        innerPadding={number}
    />

#### Help

    import { Help } from 'frontend-react-components';

    <Help
        message={string} // required
        id={string}      // required
        tooltipPlacement={oneOf(['top', 'right', 'bottom', 'left'])}
    />

#### LoadingButton

    import { LoadingButton } from 'frontend-react-components';

    <LoadingButton
        loading={bool}
        bsSize="large, medium, small, xsmall"
        bsStyle="default, primary, success, info, warning, danger, link"
        type="button, reset, submit"
        active={bool}
        disabled={bool}
        block={bool}
        onClick={function}
    >
        child content
    </LoadingButton>

#### LoadingIndicator

    import { LoadingIndicator } from 'frontend-react-components';

    <LoadingIndicator />

#### LoadingStateWrapper

    import { LoadingStateWrapper } from 'frontend-react-components';

    <LoadingStateWrapper
        isLoading={bool} // required
        children={node}  // required
    />

#### Modal

    import { Modal } from 'frontend-react-components';

    <Modal
        className={string}
        isOpen={bool}                     // required
        onRequestClose={func}             // required
        shouldCloseOnOverlayClick={bool}  // default=true
        headerLabel={string}
        zIndex={number}                   // default=3
	footer={string|JSX}
    >
        This is the body of the modal and it is good.
    </Modal>

#### Pagination

    import { Pagination } from 'frontend-react-components';

    <Pagination
        items={number}
        maxButtons={number}
        activePage={number}
        onSelect={function}
        size={string}
    />

#### SelectInput
    import { SelectInput } from 'frontend-react-components';

    <SelectInput
        className={string}
        id={oneOfType(string, number)}
        inputProps={object}
        placeholder={string}
        value={oneOfType(string, number)}
        options={arrayOf({ label: string, value: oneOfType(string, number) })}
        menuRenderer={function({ focusedOption, focusOption, labelKey, optionRenderer, options, ... })}
        onChange={function}
        disabled={bool}
        required={bool}
        multi={bool}
        dropUpIfOutOfViewport={bool}  // probably should also turn off scrollMenuIntoView when using this
    />

More detailed information can be found [here](https://github.com/JedWatson/react-select).

#### Snapshot

    import { Snapshot, SnapshotItem } from 'frontend-react-components';

    <Snapshot>
        <SnapshotItem // required children
            title={string}
            children={any}
            lineStyle={
                oneOf(['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'])
            }
            lineColor={string}
            valueColor={string}
            tooltip={string}
            tooltipPlacement={ oneOf(['top', 'left', 'bottom', 'right']) }
            valueHint={node}
        />
    </Snapshot>

#### SubNavigation

    import { SubNavigation, SubNavigationItem } from 'frontend-react-components';

    <SubNavigation>
        <SubNavigationItem  // required children
            href={string}
            eventKey={any}
        />
    </SubNavigation>

#### RadioButton

    import { RadioButton } from 'frontend-react-components';

    <RadioButton
        addon={any}
        name={string}     //required
        value={string}    //required
        onChange={func}   //required
        checked={bool}    //required
        label={any}
        disabled={bool}
        inputClassName={string}
        labelClassName={string}
        labelContentsClassName={string}
    />

#### RadioButtonGroup

    import { RadioButtonGroup } from 'frontend-react-components';

    <RadioButtonGroup
        children={arrayOf(radioButtonComponentPropType)}   //required
        id={string}                                        //required
        className={string}
    />

#### RangeDateInput

    import { RangeDateInput } from 'frontend-react-components';

    <RangeDateInput
        startName= {string}
        endName= {string}
        startDate= {instanceOf(moment)}
        endDate= {instanceOf(moment)}
        minDate= {instanceOf(moment)}
        maxDate= {instanceOf(moment)}
        onDatesChange= {function}
        dateFormat= {string}
        isManuallyEditable= {bool}
        startPlaceholder= {string}
        endPlaceholder= {string}
        keyboardNavigationEnabled= {bool}
        selectMode= {string}
        startFormatter= {function}
        endFormatter= {function}
    />

#### MainNavigation

    import { MainNavigation } from 'frontend-react-components';

    <MainNavigation>
        <Nav pullRight={bool}> // required children
            <NavItem eventKey={any} href={string} />
            <NavDropdown eventKey={any} title={string} id={any}>
                <MenuItem eventKey={any} divider={bool} />
            </NavDropdown>
        </Nav>
    </MainNavigation>

#### TagsInput

    This is a thin wrapper around [react-tagsinput](https://github.com/olahol/react-tagsinput).

    It receives a default class name of "form-control TagsInput".

    import { TagsInput } from 'frontend-react-components';

    <TagsInput
        focusedClassName={string}
        addKeys={array}
        addOnBlur={bool}
        addOnPaste={bool}
        currentValue={string}
        inputValue={string}
        inputProps={object}
        onChange={func}     //required
        onChangeInput={func}
        removeKeys={array}
        renderInput={func}
        renderTag={func}
        renderLayout={func}
        pasteSplit={func}
        tagProps={object}
        onlyUnique={bool}
        value={array}      //required
        maxTags={number}
        validationRegex={instanceOf(RegExp)}
        disabled={bool}
        tagDisplayProp={string}
    />

#### ToggleInput

    This is an alternative to a checkmark, it has two states.

    import { ToggleInput } from 'frontend-react-components';

    <ToggleInput
        leftLabel={string}
        rightLabel={string}
        leftValue={any} // required
        rightValue={any} // required
        qaid={string}
        className={string}
        value={any} // required
        onClick={func} // required
    />

#### FullWidthButton

    This is a section with background and button in the middle.
    Custom disabled layout could be provided

    import { FullWidthButton } from 'frontend-react-components';

    <FullWidthButton
        handleClick={func}  //required
        buttonContent={string/element} //required
        disabled={bool}
        disabledLayout={element}
        note={string}
    />

#### TerritoriesListManager

    import { TerritoriesListManager } from 'frontend-react-components';

    <TerritoriesListManager
        header={ string } // required
        thisListType={ string } // required
        theOtherListType={ string } // required
        theOtherListLabel={ string } // required
        forward={ bool } // required
        countries={ array } // required
        selectedCountries={ array } // required
        totalNumberOfCountries={ number } // required
        onTerritoryMove={ func } // required
        onCountrySelect={ func } // required
        formatMessage={ formatMessage } // required
        messages={ object } // required
        movedCountriesNumber={ number }
        territoryIdKey={ string }
        territoryNameKey={ string }
        continentNameKey={ string }
        undoNotificationVisible={ bool }
        onUndoNotificationClose={ func }
        onTerritoryMovedUndo={ func }
        onTerritorySearchClose={ func }
    />

#### SearchResults

    import { SearchResults } from 'frontend-react-components';

    <SearchResults
        options={ array }
        currentSearch={ string }
        onInputChange={ func }  // required
        onChange={ func }  // required
        searchError={ string }
        isLoading={ bool }
        selectedTrack={ object }
        tags={ array }
        searchName={ string }
        useTags={ bool }
        formatMessage={ formatMessage } // required
        messages={ object } // required
    />

#### SearchRow

    import { SearchRow } from 'frontend-react-components';

    <SearchRow
        results={ object }
        artists={ object }
        tracks={ object }
        currentSearch={ string }
        searchError={ string }
        isLoading={ bool }
        tags={ array }
        artistsOrTracks={ string }
        formatMessage={ formatMessage } // required
        messages={ object } // required
        onSearchStringChanging={ func } // required
        onSelect={ func } // required
        onSearchRequest={ func } // required
        onArtistsTracksDropdownSelect={ func } // required
    />

#### DayInput

    import { DayInput } from 'frontend-react-components';

    <DayInput
        name={ string } //required
        onChange={ func }
        value={ string|Date }
        disabled={ bool }
        minDate={ string|Date }
        maxDate={ string|Date }
        focus={ bool }
        shortMonth={ bool }
        dateFormat={ string }
        renderTodayButton={ bool }
        formatMessage={ formatMessage }
        messages={ object }
        dayPickerOptions= { object }
        dayPickerInputOptions= { object }
        returnEventIfError={ bool }
    />
