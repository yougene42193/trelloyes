import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';

describe('My component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('section');
    
        ReactDOM.render(<List />, div);
    
        ReactDOM.unmountComponentAtNode(div);
    })
})
