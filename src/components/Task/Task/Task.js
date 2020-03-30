import React from 'react';
import { Translation } from '../../../i18n/i18n';
import Award from '../../icons/award.icon';
import DifficultyLabel from '../Difficulty/DifficultyLabel/DifficultyLabel';

class Task extends React.Component {
    render() {
        const { name } = this.props;
        const { description } = this.props;
        const { questions } = this.props;
        const { rightQuestions } = this.props;

        return (
            <div className="task">
                <div className="task-head">
                    <span>{name}</span>
                    <div className="task-head-elements">
                        <div className="task-element">
                            <span>{questions}</span>
                            <span>{Translation.t('taskList.questions')}</span>
                        </div>
                        <div className="task-element">
                            <Award className="icon" stroke="#3A506B" />
                            <span>{rightQuestions}</span>
                        </div>
                        <DifficultyLabel difficulty={this.props.difficulty} />
                    </div>
                </div>
                <div className="task-bottom">
                    <span>{description}</span>
                </div>
            </div>
        );
    }
}

export default Task;
