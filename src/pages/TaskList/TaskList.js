import React from 'react';
import './TaskList.scss';
import { Link } from 'react-router-dom';
import UsersIcon from '../../components/icons/user.icon.js';
import UserIcon from '../../components/icons/users.icon.js';
import Search from '../../components/icons/search.icon';
import { Translation } from '../../i18n/i18n';
import Task from '../../components/Task/Task/Task';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '', tasks: [] };
    }

    OnChangeSearch = () => {
        this.state.search(document.getElementById('site-search').value);
        // TODO: Backend request
        this.setState((prevState) => ({ prevState }));
        this.loadFakeData();
    };

    loadFakeData() {
        this.state.tasks.push(
            {
                id: 'ee035b07-b1b1-43e8-a5a7-13ecba5eaa50',
                description: 'A short description what to do in this task',
                difficulty: 'easy',
            },
            {
                id: 'c0764f51-6c75-44d7-a16f-77cfcce1672f',
                description: 'A short description what to do in this task',
                difficulty: 'medium',
            },
            {
                id: 'eacbd1ab-5c8b-49dc-b68e-223b7746fa93',
                description: 'A short description what to do in this task',
                difficulty: 'hard',
            }
        );

        this.setState((task) => ({ task }));
    }

    renderTasks() {
        return this.state.tasks.map((task, index) => {
            return (
                <Link key={task.id} to="/task/subject" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Task
                        name={`${Translation.t('taskList.task')} ${index + 1}`}
                        questions="12"
                        rightQuestions="10"
                        difficulty={task.difficulty}
                        description={task.description}
                    />
                </Link>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="task-list main">
                    <div className="result-content-header">
                        <div className="result-left">
                            <span className="result-subject">{Translation.t('taskList.task')}</span>
                        </div>

                        <div className="middle">
                            <div className="result-center">
                                <div className="result-subject">
                                    <UsersIcon className="icon" stroke="#3A506B" />
                                    <span className="points">213</span>
                                    <span className="points">{Translation.t('taskList.points')}</span>
                                </div>
                            </div>
                            <div className="result-center second">
                                <div className="result-subject">
                                    <UserIcon className="icon" stroke="#3A506B" />

                                    <span className="points">21.323</span>
                                    <span className="points">{Translation.t('taskList.points')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="result-right">
                            <span className="result-subject">
                                <div id="input-search">
                                    <Search height="30" width="30" />
                                    <input
                                        onChange={this.OnChangeSearch}
                                        type="text"
                                        className="site-search"
                                        name="search"
                                        aria-label="Search"
                                        placeholder={Translation.t('taskList.search')}
                                    />
                                </div>
                            </span>
                        </div>
                    </div>

                    <div id="task-content-list">{this.renderTasks()}</div>
                </div>
            </div>
        );
    }
}

export default TaskList;
