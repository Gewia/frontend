import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User } from 'react-feather';
import TeacherIcon from '../icons/teacher.icon';

// Regular Expression für die Validierung der Mail
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Validates Form errors
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            password2: '',
            mail: '',
            role: '',
            accepted: false,
            clicked: false,
            disabled: true,
            isPasswordShown: false,
            isPasswordShown2: false,
            isPasswordValid: true,
            isStudent: true,
            formErrors: {
                firsName: '',
                lastName: '',
                role: '',
                email: '',
                password: '',
            },
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const { formErrors } = this.state;

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 ? 'minimum 3 characters required ' : '';
                break;

            case 'lastName':
                formErrors.lastName = value.length < 3 ? 'minimum 3 characters required ' : '';
                break;
            case 'role':
                formErrors.role = value === '' ? 'Please select your role' : '';
                break;
            case 'password':
                formErrors.password = value.length < 6 ? 'minimum 6 characters required ' : '';
                break;
            case 'password2':
                formErrors.password2 = value !== value.password ? 'Passwörter sind unterschiedlich' : '';
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    };

    // Shows second page of register
    handleClick = () => {
        this.setState({ clicked: true });
    };

    // Determines if user accepted the privacy policy
    handlePrivacy = () => {
        this.setState({ accepted: !this.state.accepted });
    };

    // Handles the two special Buttons student and teacher
    handleSpecial(e, data) {
        e.preventDefault();
        let student = true;
        if (data === 'Teacher') student = false;

        this.setState({ role: data, isStudent: student });
    }

    // Toggeles the password field to text - toggles the icon in the jsx (ternary statement below)
    togglePassword = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    // Toggeles the second password field to text - toggles the icon in the jsx (ternary statement below)
    togglePassword2 = () => {
        const { isPasswordShown2 } = this.state;
        this.setState({ isPasswordShown2: !isPasswordShown2 });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
		-- SUBMITTING --
		First Name: ${this.state.firstName}
		Last Name: ${this.state.lastName}
		Mail: ${this.state.email}
		Password: ${this.state.password}
		Role: ${this.state.role}
		`);
        }
    };

    render() {
        // constants for the toggle functions (eye and password)
        const { isPasswordShown } = this.state;
        const { isPasswordShown2 } = this.state;
        const { isPasswordValid } = this.state;
        const { formErrors } = this.state;

        return (
            <div className="register">
                <div className="box">
                    <h1 className="headline">Register</h1>
                    <form onSubmit={this.handleSubmit} method="post" noValidate>
                        <div className="box-inhalt">
                            {(() => {
                                if (this.state.clicked) {
                                    return (
                                        <span>
                                            <div className="input-box second">
                                                <input
                                                    onChange={this.handleChange}
                                                    type="email"
                                                    name="mail"
                                                    value={this.state.mail}
                                                    placeholder="Email"
                                                    className="input-field"
                                                    noValidate
                                                />
                                            </div>

                                            <div className="input-box second">
                                                <input
                                                    onChange={this.handleChange}
                                                    value={this.state.password}
                                                    name="password"
                                                    type={isPasswordShown ? 'text' : 'password'}
                                                    placeholder="Passwort"
                                                    className="input-field passwort"
                                                    noValidate
                                                />
                                                <span className="eye" onClick={this.togglePassword}>
                                                    <Eye className="hide1" />
                                                    <EyeOff className="hide2" />
                                                </span>
                                            </div>

                                            <div className="input-box second">
                                                <input
                                                    onChange={this.handleChange}
                                                    value={this.state.password2}
                                                    name="password2"
                                                    type={isPasswordShown2 ? 'text' : 'password'}
                                                    placeholder="Passwort wiederholen"
                                                    className="passwort input-field"
                                                    noValidate
                                                />
                                                <span className="eye">
                                                    <Eye className="hide1" />
                                                    <EyeOff className="hide2" />
                                                </span>
                                            </div>

                                            <div className="check-container">
                                                <p>
                                                    <input
                                                        className="privacycheck"
                                                        onClick={this.handlePrivacy}
                                                        value={this.state.accepted}
                                                        type="checkbox"
                                                    />{' '}
                                                    <span className="font-arimo">
                                                        Ich habe die
                                                        <Link to="/">Datenschutzbestimmungen</Link>
                                                        gelesen und akzeptiert
                                                    </span>
                                                </p>
                                            </div>
                                            <div onClick={this.handleRedirect} className="btn-UI-container">
                                                <button
                                                    to="/"
                                                    onClick={this.handleSubmit}
                                                    type="submit"
                                                    className="btn-ui btn-base"
                                                    disabled={this.state.disabled}>
                                                    Submit
                                                </button>
                                            </div>
                                        </span>
                                    );
                                }
                                return (
                                    <span className="input-container">
                                        <div className="input-box">
                                            <input
                                                onChange={this.handleChange}
                                                type="text"
                                                name="firstName"
                                                value={this.state.firstName}
                                                placeholder="Vorname"
                                                className="input-field"
                                                noValidate
                                            />
                                        </div>
                                        <div className="input-box">
                                            <input
                                                onChange={this.handleChange}
                                                type="text"
                                                name="lastName"
                                                value={this.state.lastName}
                                                placeholder="Nachname"
                                                className="input-field"
                                                required
                                            />
                                        </div>
                                        <div className="btn-group role-btn">
                                            <div
                                                onClick={(e) => this.handleSpecial(e, 'Student')}
                                                className={
                                                    this.state.isStudent
                                                        ? 'btn-special-button btn-special-button1 btn active'
                                                        : 'btn-special-button btn-special-button1 btn'
                                                }>
                                                <User color="black" />
                                                <span>Student</span>
                                            </div>

                                            <div
                                                onClick={(e) => this.handleSpecial(e, 'Teacher')}
                                                className={
                                                    this.state.isStudent
                                                        ? 'btn-special-button btn-special-button2 btn'
                                                        : 'btn-special-button btn-special-button2 btn active'
                                                }>
                                                <span>Teacher</span>
                                                <TeacherIcon />
                                            </div>
                                        </div>

                                        <div className="btn-ui-container">
                                            <button
                                                onClick={this.handleClick}
                                                className="btn-ui btn-weiter"
                                                type="button">
                                                Weiter
                                            </button>
                                        </div>
                                    </span>
                                );
                            })()}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
