import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import Help_Image from '../../assets/icons/helpcircle.svg';
import Logout_Image from '../../assets/icons/logout.svg';

class Header extends Component {
    render() {
        switch (this.props.side) {
            case 'Landing':
                return (
                    <div className="header-navbar">
                        <div className="logo">
                            <img className="logo-img" src="/assets/logo.svg" alt="" />
                            <h1 className="title">E-EDU</h1>
                        </div>
                        <div className="button-box-landing">
                            {/* TODO Route zurück auf /login /register */}
                            <Link className="btn-log btn-login" to="/dashboard">
                                LOGIN
                            </Link>
                            <Link className="btn-log btn-register" to="/dashboard">
                                REGISTER
                            </Link>
                        </div>
                    </div>
                );
            case 'Dashboard':
                return (
                    <div className="header-navbar">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className="logo">
                                <img className="logo-img" src="/assets/logo.svg" alt="" />
                                <h1 className="title">E-EDU</h1>
                            </div>
                        </Link>
                        <div id="button-box-dashboard">
                            <Link
                                to={{ pathname: '/imprint', state: { prevPath: 'Dashboard' } }}
                                className="btn-dash btn-info">
                                <img src={Help_Image} alt="Help" />
                            </Link>
                            <Link className="btn-dash btn-logout">
                                <img src={Logout_Image} alt="Logout" />
                            </Link>
                        </div>
                    </div>
                );
        }
        return null;
    }
}

export default Header;
