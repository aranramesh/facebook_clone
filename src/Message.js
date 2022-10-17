import React from 'react'
import './css/Message.css'

function Message() {
  return (
    <div className='message'>
        <div className='message_top'>
            <img src="https://cdn.mos.cms.futurecdn.net/qXsVayNBGNZejBMQeYNiHa.jpg"></img>

            <form>
                <input type="text" placeholder='whats on your mind Aran?'></input>
            </form>
        </div>

        <div className='message_bottom'>
           <div className='messageoption'>
            <img src='https://s3.ap-southeast-1.amazonaws.com/easystore.website/images/channel-logo/svg/fb-live-logo.svg'/>
           <p>Live Video</p>
           </div>

           <div className='messageoption'>
           <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png'/>
           <p>Photo/Video</p>
           </div>

           <div className='messageoption'>
           <img src='https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png'/>
           <p>Feeling/Activity</p>
           </div>
        </div>

    </div>
  )
}

export default Message