import React, { Component } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    state = {};

    render() {
        if (this.props.visible) {
            return null;
        }

        return (
            <div className="footer-navbar">
                <div className="legal">
                    <Link to="/imprint">Impressum</Link>
                    <Link to="/privacy">Datenschutzerklärung</Link>
                    <Link to="/credits">Credits</Link>
                    <Link to="https://github.com/E-Edu/general">GitHub</Link>
                </div>
                <div className="copyright">
                    <span>&copy; 2020 The Morpheus Tutorials Community</span>
                </div>
            </div>
        );
    }
}

export default Footer;