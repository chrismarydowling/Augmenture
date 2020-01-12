import * as React from 'react';

import Header from './header';


const withBase = <P extends {}>(Page):
    React.FunctionComponent<P> => (model): JSX.Element => (
        <html lang="en">
            <head>
                <Header<P> model={model} bundleSrc={Page.bundleSrc} />
                <title>Augmenture</title>
            </head>
            <body className="root">
                <div id="root" className="flex fill">
                    <Page {...model} />
                </div>
            </body>
        </html>
    );

export default withBase;
