import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import PageContent from './content/PageContent';
import PageHeader from './header/PageHeader';

const stories = storiesOf('page', module);
stories.addDecorator(withKnobs);

const data = {
    mainTitle: 'MainTitle',
    secondaryTitle: 'SecondaryTitle',
    content: 'This is an example',
};

stories.add('default', () => {
    return (
        <div>
            <PageHeader mainTitle={data.mainTitle} secondaryTitle={data.secondaryTitle} />

            <PageContent>
                <h1>{data.content}</h1>
            </PageContent>
        </div>
    );
});

stories.add('dynamicInput', () => {
    const mainTitle = text('Main title', data.mainTitle);
    const secondaryTitle = text('Secondary title', data.secondaryTitle);
    const content = text('content', data.content);

    return (
        <div>
            <PageHeader mainTitle={mainTitle} secondaryTitle={secondaryTitle} />

            <PageContent>
                <h1>{content}</h1>
            </PageContent>
        </div>
    );
});
