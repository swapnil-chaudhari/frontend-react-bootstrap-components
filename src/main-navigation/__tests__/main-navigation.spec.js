import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import renderShallow from 'render-shallow';
import MainNavigation from '../main-navigation';

describe('<MainNavigation>', () => {
    describe('when it renders with default logo', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <MainNavigation logoHref="/accounting">
                    <Nav>
                        <NavItem eventKey={ 1 } href="#">Link</NavItem>
                        <NavItem eventKey={ 2 } href="#">Link</NavItem>
                        <NavDropdown eventKey={ 3 } title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={ 3.1 }>Action</MenuItem>
                            <MenuItem eventKey={ 3.2 }>Another action</MenuItem>
                            <MenuItem eventKey={ 3.3 }>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={ 3.3 }>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={ 1 } href="#">Link Right</NavItem>
                        <NavItem eventKey={ 2 } href="#">Link Right</NavItem>
                    </Nav>
                </MainNavigation>
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
    describe('when it renders with custom logo', () => {
        let component;

        beforeAll(() => {
            component = renderShallow(
                <MainNavigation logo={ <div className="custom-logo" /> }>
                    <Nav>
                        <NavItem eventKey={ 1 } href="#">Link</NavItem>
                    </Nav>
                </MainNavigation>
            ).output;
        });

        test('has proper markup', () => {
            expect(component).toMatchSnapshot();
        });
    });
});
