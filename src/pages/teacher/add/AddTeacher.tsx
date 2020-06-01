import React from 'react';
import './AddTeacher.scss';
import { UserPlus } from 'react-feather';
import { observer } from 'mobx-react';
import Page from '../../../components/page/Page';
import TextInput from '../../../components/ui/input/textBox/TextInput';
import { t } from '../../../i18n/i18n';
import Validation from '../../../lib/validation';
import AddTeacherRequest from '../../../components/teacher/add/AddTeacherRequest';
import AddTeacherStore from '../../../store/AddTeacherStore';

const addTeacherStore = new AddTeacherStore();

@observer
class AddTeacher extends React.Component {
    emailChange = (event) => {
        this.setState({
            email: event.target.value,
            validEmail: this.isValidEmail(),
        });
        addTeacherStore.setEmail(event.target.value);
        addTeacherStore.setIsValidEmail(this.isValidEmail());
    };

    add = () => {
        addTeacherStore.setIsValidEmail(this.isValidEmail());
    };

    isValidEmail() {
        return Validation.validateEmail(addTeacherStore.email);
    }

    renderRequests() {
        return addTeacherStore.pendingRequests.map((request) => {
            return <AddTeacherRequest key={request.name} name={request.name} email={request.email} />;
        });
    }

    render() {
        const zeroValue = 0;
        return (
            <Page mainTitle={t.t('page.addTeacher.title', 'add teacher')}>
                <div className="add-teacher">
                    <TextInput
                        shadow={addTeacherStore.isValidEmail || addTeacherStore.email === '' ? '' : 'red'}
                        maxWidth="30rem"
                        placeholder={t.t('page.addTeacher.emailOfTeacher', 'Teachers email')}
                        onChange={this.emailChange}
                        className="test"
                    />
                    <UserPlus className="add-teacher-button" onClick={this.add} />
                </div>
                <h1 className="requests-title">
                    {addTeacherStore.pendingRequests.length === zeroValue
                        ? t.t('page.addTeacher.noPendingRequests', 'No pending requests')
                        : t.t('page.addTeacher.pendingRequests', 'Pending requests')}
                </h1>
                <div className="pending-requests">{this.renderRequests()}</div>
            </Page>
        );
    }
}

export default AddTeacher;
