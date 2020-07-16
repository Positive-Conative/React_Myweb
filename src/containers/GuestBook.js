import React from 'react';
import BigText from '../components/BigText';
import PostLinks from '../components/PostLinks';
import GuestBookMain from '../components/GuestBook/GuestBookMain';
import { Link } from 'react-router';

const Posts = ({children}) => {
    return (
        <div>
            <GuestBookMain></GuestBookMain>
            <BigText>방명록</BigText>
            <PostLinks/>
            {children}
        </div>
        
    );
};

export default Posts;