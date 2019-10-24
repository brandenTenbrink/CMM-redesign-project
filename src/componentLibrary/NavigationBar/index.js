import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import { Icon } from '../';

import {
    NavigationBarBase, 
    LogoContainer,
    ContentContainer,
    CreateAccountNavLink,
    NavigationLink,
    NavigationTextSeparator,
    LogoWrapper,
    BackButton,
    BackButtonText
} from './styles';

class NavigationBar extends Component {
    render() {
        const { location } = this.props;
        const pathName = location.pathname;
        const isCreateAccount = pathName === '/create-account';

        return (
            <>
                { isCreateAccount ? (
                    <NavigationBarBase>
                        <BackButton>
                            <Icon name="LeftCaret" height="24px" width="24px" />
                            <NavLink to="/"><BackButtonText>Back</BackButtonText></NavLink>
                        </BackButton>
                        <LogoWrapper>
                            <NavLink to='/'>
                                <LogoContainer centered={isCreateAccount} src='/assets/images/CMM_Logo.png' />
                            </NavLink>
                        </LogoWrapper>
                    </NavigationBarBase>  
                ) : (
                    <NavigationBarBase>
                        <NavLink to='/'>
                            <LogoContainer centered={isCreateAccount} src='/assets/images/CMM_Logo.png' />
                        </NavLink>

                        <ContentContainer>
                            <NavigationLink to='/careers/open-positions'>Careers</NavigationLink>
                            <NavigationTextSeparator>|</NavigationTextSeparator>
                            <CreateAccountNavLink to='/create-account'>
                                CREATE A FREE ACCOUNT
                            </CreateAccountNavLink>
                        </ContentContainer>
                    </NavigationBarBase>  
                )}
            </>
        );
    }
}

export default withRouter(NavigationBar);