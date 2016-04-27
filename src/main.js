import React           from 'react';
import {render}        from 'react-dom';
import CommentBox      from './components/CommentBox';

const url = `http://localhost:3333/data.js`;

const mount = document.getElementById('app');

render(<CommentBox url={url}/>, mount);
