import * as React from 'react';

export const Banner: React.Component = () => (
    <div className="flex-balance">
        <div className="fill flex flex-wrap banner">
            <div>
                <h1>Augmenture</h1>
                <p>
                    <strong>
                        Create
                        <span className="adjective"> amazing </span>
                        D&D campaign Notes!
                    </strong>
                </p>
            </div>
        </div>
    </div>
);


export const Signup: React.Component = () => <div className="flex-balance purple">Signup</div>;