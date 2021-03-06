import React from 'react';
import './LectureGroup.scss';
import LectureSubject from '../subject/LectureSubject';

interface LectureGroupProps {
    name: string;
    fields: { name: string }[];
}

class LectureGroup extends React.Component<LectureGroupProps> {
    render() {
        const { name, fields } = this.props;
        return (
            <div className="lecture-group-wrapper">
                <div className="lecture-group">
                    <div className="lecture-group-title">
                        <p>{name}</p>
                    </div>

                    <div className="lecture-group-subjects">
                        {fields.map((value) => {
                            return <LectureSubject key={value.name} name={value.name} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default LectureGroup;
