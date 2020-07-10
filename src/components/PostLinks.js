import React from 'react';
import { Link } from 'react-router';

import './PostLinks.css';

const PostLinks = () => {
    return (
        <div className="post-links">
            <Link to="/GuestBook/1">1</Link>
            <Link to="/GuestBook/2">2</Link>
            <Link to="/GuestBook/3">3</Link>
            <Link to="/GuestBook/4">4</Link> 
        </div>
    );
};

export default PostLinks;