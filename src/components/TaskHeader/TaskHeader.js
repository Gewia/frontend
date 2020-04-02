import React from 'react';
import './TaskHeader.scss';
import { User, Users } from 'react-feather';
import IconText from '../../components/IconText/IconText';
import { Translation } from '../../i18n/i18n';

class TaskHeader extends React.Component {
    render() {
        const module = this.props.module;
        return (
            <div className="task-header">
                <div className="lecture-header">
                    <div className="lecture-header-topic">
                        <span className="lecture-subject">{module}</span>
                    </div>
                    <div className="lecture-header-points">
                        <IconText
                            text={'213' + ' ' + Translation.t('task.points')}
                            position="left"
                            class="lecture-points"
                            distance="0.4rem"
                            fontColor="#0b132b">
                            <User stroke="#0b132b" />
                        </IconText>
                        <IconText
                            text={'21.323' + ' ' + Translation.t('task.points')}
                            position="left"
                            class="lecture-points"
                            distance="0.4rem"
                            fontColor="#0b132b">
                            <Users stroke="#0b132b" />
                        </IconText>
                    </div>
                    <div className="lecture-header-search">
                        <input type="text" placeholder="Suche" className="input" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskHeader;
