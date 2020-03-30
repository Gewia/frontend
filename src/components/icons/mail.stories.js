import React from 'react';
import { number, color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import MailIcon from './mail.icon';

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);

stories.add('MailIcon default', () => {
    return <MailIcon />;
});

stories.add('MailIcon dynamicProperties', () => {
    const height = number('height', 24);
    const width = number('width', 24);
    const fill = color('fill', '#ffffff');
    const stroke = color('stroke', '#000000');

    return <MailIcon height={height} width={width} fill={fill} stroke={stroke} />;
});