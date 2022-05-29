import React from 'react';
import ManageState from './ManageState';
import OptimizeReact from './OptimizeReact';
import ProtopypicalInheritance from './ProtopypicalInheritance';
import Search from './Search';
import SetState from './SetState';

const Blog = () => {
    return (
        <div className=' my-5 mx-16'>
            <OptimizeReact></OptimizeReact>
            <ManageState></ManageState>
            <ProtopypicalInheritance></ProtopypicalInheritance>
            <SetState></SetState>
            <Search></Search>
            
        </div>
    );
};

export default Blog;