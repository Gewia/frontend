import React from 'react';
import './MultipleChoice.scss';
import TextInput from '../../../ui/input/textBox/TextInput';

interface MultipleChoiceAnswerProps {
    selectHandler: any;
    onChangeHandler: any;
    placeholder: string;
}

class MultipleChoice extends React.Component<MultipleChoiceAnswerProps> {
    render() {
        const { selectHandler, onChangeHandler, placeholder } = this.props;
        return (
            <div className="multiplechoice-answer">
                <input type="checkbox" onChange={selectHandler} />
                <TextInput placeholder={placeholder} onChange={onChangeHandler} className="text-input" />
            </div>
        );
    }
}

export default MultipleChoice;
