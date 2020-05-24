import React from 'react';
import './AddTask.scss';
import { observer } from 'mobx-react';
import { Plus } from 'react-feather';
import makeInspectable from 'mobx-devtools-mst';
import PageHeader from '../../../components/page/header/PageHeader';
import { t } from '../../../i18n/i18n';
import Button from '../../../components/ui/button/Button';
import TextInput from '../../../components/ui/input/textBox/TextInput';
import AddQuestion from '../../../components/task/add/question/AddQuestion';
import ComboBox from '../../../components/ui/comboBox/ComboBox';
import AddTaskStore from '../../../store/AddTaskStore';
import DifficultyLabel from '../../../components/task/difficulty/label/DifficultyLabel';
import { DifficultyEnum } from '../../../models/difficulty.enum';

const addTaskStore = new AddTaskStore();

makeInspectable(addTaskStore);

@observer
class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.addQuestionHandler();
    }

    addQuestionHandler = () => {
        const maxId = 0x10000;
        addTaskStore.addTaskListItem({
            answers: [{ value: '', selected: false }],
            description: '',
            id: Math.floor(Math.random() * maxId),
            title: '',
        });
    };

    render() {
        return (
            <div className="add-task">
                <div className="flex-row-box header">
                    <PageHeader mainTitle={t.t('page.addTask.title', 'Create new task')} />
                    <Button styleType="primary" name={t.t('page.addTask.publish', 'publish')} />
                </div>
                <div className="flex-row-box first-row">
                    <TextInput
                        placeholder={t.t('page.addTask.packageTitle', 'task package title')}
                        onChange={(value) => addTaskStore.setTitle(value)}
                        style={{ height: '1.8rem', width: '16.5rem' }}
                    />
                    <ComboBox
                        data={['Test1', 'Test2']}
                        height="1.6rem"
                        width="20rem"
                        placeholder={t.t('page.addTask.subject', 'Subject')}
                        callbackValue={(value: string) => {
                            addTaskStore.setSelectedSubject(value);
                        }}
                        value={addTaskStore.selectedSubject}
                        typingEnabled
                    />
                </div>
                <div className="flex-row-box second-row">
                    <div className="flex-row-box difficulty-labels">
                        {[DifficultyEnum.EASY, DifficultyEnum.MEDIUM, DifficultyEnum.HARD].map((difficulty) => {
                            return (
                                <DifficultyLabel
                                    difficulty={difficulty}
                                    selected={addTaskStore.selectedDifficulty === difficulty}
                                    key={difficulty}
                                    isSelectable
                                    onClick={() => addTaskStore.setSelectedDifficulty(difficulty)}
                                    className="difficulty"
                                />
                            );
                        })}
                    </div>
                    <ComboBox
                        data={['Test1', 'Test2']}
                        height="1.6rem"
                        width="20rem"
                        placeholder={t.t('page.addTask.topic', 'Topic')}
                        callbackValue={(value: string) => {
                            addTaskStore.setSelectedLecture(value);
                        }}
                        value={addTaskStore.selectedLecture}
                        typingEnabled
                    />
                </div>
                <div className="flex-row-box third-row">
                    <TextInput
                        placeholder={t.t('page.addTask.description', 'Description of the task')}
                        rows={5}
                        onChange={(value) => addTaskStore.setDescription(value)}
                        style={{ width: '100%' }}
                    />
                </div>
                <div className="flex-column-box Task-container">
                    {addTaskStore.taskList.map((task, index) => {
                        return (
                            <AddQuestion
                                questions={addTaskStore.taskList}
                                addQuestion={(value) => addTaskStore.addTaskListItem(value)}
                                setQuestions={(value) => addTaskStore.setTaskList(value)}
                                questionIndex={index}
                                key={task.id}
                            />
                        );
                    })}
                </div>
                <div onClick={this.addQuestionHandler} className="add-question" role="button" tabIndex={0}>
                    <Plus style={{ marginRight: '0.5rem' }} />
                    <p style={{ margin: '0' }}>{t.t('page.addTask.addNewQuestion', 'add new question')}</p>
                </div>
            </div>
        );
    }
}

export default AddTask;
