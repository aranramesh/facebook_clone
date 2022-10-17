import React from 'react'
import "./css/feed.css"
import Storyreel from './Storyreel'
import Message from './Message'
import Scroll from './Scroll'

function Feed(){
    return(
        <div className='feed' >
            <Storyreel/>
            <Message/>
            <Scroll/>

           
        </div>
       

        
    )
}



export default Feed;