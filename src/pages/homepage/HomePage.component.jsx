import React from 'react';
import Directory from '../../components/directory/directory.component';

const HomePage = ({history}) =>{
    return(
    <div className='homepage'>
        <Directory history={history} />
    </div>
    )
}



export default HomePage;