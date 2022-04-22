import React from 'react';
import ReactDOM from 'react-dom/client';

const Paragraph = () => <p>This is our app</p>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Paragraph/>
    </React.StrictMode>
);
