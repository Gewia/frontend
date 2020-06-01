import React from 'react';
import './Login.scss';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { t } from '../../i18n/i18n';
import TextInput from '../Input/TextBox/TextInput';
import LoginStore from '../../store/LoginStore';
import Button from '../ui/button/Button';

const loginStore = new LoginStore();

@observer
class Login extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="login">
                <div className="header">
                    <span>{t.t('component.login.label', 'Login')}</span>
                </div>
                <div className="login-content">
                    <div className="flex-column-box">
                        <div className="inputs flex-column-box">
                            <TextInput
                                placeholder={t.t('component.login.inputs.emailLabel', 'E-Mail')}
                                onChange={(value) => loginStore.setEmail(value.target.value)}
                                className="text-input"
                                type="email"
                                style={{ height: '2.69rem', width: '28rem' }}
                            />
                            <TextInput
                                placeholder={t.t('component.login.inputs.passwordLabel', 'Password')}
                                onChange={(value) => loginStore.setPassword(value.target.value)}
                                className="text-input"
                                type="password"
                                style={{ height: '2.69rem', width: '28rem' }}
                            />
                        </div>
                        <div className="actions flex-row-box">
                            <div className="checkbox flex-row-box">
                                <input type="checkbox" onClick={() => loginStore.toggleStayLoggedIn()} />
                                <span>{t.t('component.login.stayLoggedIn', 'Stay LoggedIn')}</span>
                            </div>
                            <Button
                                name={t.t('component.login.login', 'Login')}
                                width="13.5rem"
                                height="2.69rem"
                                fontSize="22px"
                                styleType="primary"
                            />
                        </div>
                        <div className="security-area flex-row-box">
                            <Link to="forgotPassword">{t.t('component.login.forgotPassword', 'Forgot password?')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
