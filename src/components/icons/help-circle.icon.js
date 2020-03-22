import './index.scss';
import React, {Component} from 'react';

class HelpCircleIcon extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
    };

    render(props) {
        return (
            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={this.props.fill || 'none'} stroke={this.props.stroke || 'currentColor'}
                     stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" className="feather feather-help-circle">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>

            </div>
        );
    }
}

export default HelpCircleIcon;
