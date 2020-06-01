import React from 'react';
import './Register.scss';
import { observer } from 'mobx-react';
import parse from 'html-react-parser';
import TextInput from '../ui/input/textBox/TextInput';
import Button from '../ui/button/Button';
import RegisterStore from '../../store/RegisterStore';
import { t } from '../../i18n/i18n';
import Validation from '../../lib/validation';

const registerStore = new RegisterStore();

@observer
class Register extends React.Component {
    registerHandler = () => {
        let errorText: string = '';
        const teacherTokenLength = 8;
        if (!Validation.validateEmail(registerStore.email)) {
            errorText = t.t('component.register.validation.invalidEmail', 'Please enter a valid email');
        } else if (!Validation.validatePassword(registerStore.password)) {
            errorText = t.t('component.register.validation.invalidPassword', 'Please enter a valid password');
        } else if (registerStore.password !== registerStore.retypedPassword) {
            errorText = t.t('component.register.validation.differentPasswords', 'The passwords do not match');
        } else if (registerStore.accountType === 'unset') {
            errorText = t.t('component.register.validation.noAccountSelected', 'Please select an account type');
        } else if (!registerStore.isGtcAccepted) {
            errorText = t.t('component.register.validation.GTCnotAccepted', 'Please accept the GTC');
        } else if (registerStore.accountType === 'teacher' && registerStore.teacherToken.length < teacherTokenLength) {
            // TODO check teacher Token, length? base64?
            errorText = t.t('component.register.validation.invalidToken', 'Please enter a valid teacher token');
        }
        if (errorText) {
            registerStore.setErrorText(errorText);
        } else {
            registerStore.clearErrorText();
            registerStore.validate();
        }
    };

    render(): React.ReactNode {
        return (
            <div className="register">
                <div className="header">
                    <span>{t.t('component.register.label', 'Register')}</span>
                </div>
                <div className="register-content">
                    <div className="flex-column-box">
                        <div className="inputs flex-column-box">
                            <TextInput
                                placeholder={t.t('component.register.inputs.emailLabel', 'E-Mail')}
                                onChange={(value) => registerStore.setEmail(value.target.value)}
                                className="text-input"
                                type="email"
                                style={{ height: '2.69rem', width: '28rem' }}
                            />
                            <TextInput
                                placeholder={t.t('component.register.inputs.passwordLabel', 'Password')}
                                onChange={(value) => registerStore.setPassword(value.target.value)}
                                className="text-input"
                                type="password"
                                style={{ height: '2.69rem', width: '28rem' }}
                            />
                            <TextInput
                                placeholder={t.t('component.register.inputs.retypedPasswordLabel', 'Retype password')}
                                onChange={(value) => registerStore.setRetypedPassword(value.target.value)}
                                className="text-input"
                                type="password"
                                style={{ height: '2.69rem', width: '28rem' }}
                            />
                            <div className="account-type flex-row-box">
                                <Button
                                    name={t.t('component.register.teacher', 'teacher')}
                                    onClick={() => registerStore.setAccountType('teacher')}
                                    width="13.5rem"
                                    height="2.69rem"
                                    fontSize="22px"
                                    styleType={registerStore.accountType === 'teacher' ? 'selected' : 'unset'}
                                />
                                <Button
                                    name={t.t('component.register.student', 'student')}
                                    onClick={() => registerStore.setAccountType('student')}
                                    width="13.5rem"
                                    height="2.69rem"
                                    fontSize="22px"
                                    styleType={registerStore.accountType === 'student' ? 'selected' : 'unset'}
                                />
                            </div>
                        </div>
                        <div className="actions flex-row-box">
                            <input
                                type="checkbox"
                                onClick={() => registerStore.setIsGtcAccepted(!registerStore.isGtcAccepted)}
                            />
                            <span>
                                {parse(
                                    t.t(
                                        'component.register.termsText',
                                        '<a href="/imprint">GTC</a> text. I have read the  <a href="/privacy">privacy policy</a> and accepted both.'
                                    )
                                )}
                            </span>
                        </div>
                        <div className="error-text text">{registerStore.errorText}</div>
                        {registerStore.valid ? (
                            <div className="success-text text">
                                {t.t(
                                    'component.register.validation.success',
                                    'Registration successful.\nPlease check your email and verify your account'
                                )}
                            </div>
                        ) : null}
                        <div className="submit-region flex-row-box">
                            {registerStore.accountType === 'teacher' ? (
                                <TextInput
                                    placeholder={t.t('component.register.teacherToken', 'Teacher Token')}
                                    onChange={(value) => registerStore.setTeacherToken(value.target.value)}
                                    className="text-input teacher-token"
                                    style={{ height: '2.69rem', width: '15rem' }}
                                />
                            ) : null}
                            <Button
                                name={t.t('component.register.createAccount', 'create Account')}
                                onClick={() => this.registerHandler()}
                                height="2.69rem"
                                fontSize="22px"
                                styleType="primary"
                                className="submit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
