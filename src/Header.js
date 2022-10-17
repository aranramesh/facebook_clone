import React from "react";
import "./css/header.css"
// import React, { Component } from 'react';
// import { AiOutlineSearch } from "react-icons/fa";

// class Like extends Component {
//   render() {
//     return <AiOutlineSearch />  
//   }
// }



function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-KkfQdd-MMCVLJDXDaChYjg6DokJE6-1UbWLexz1&s" alt="fb-image"/>

                <div className="header_search">
              {/* < AiOutlineSearch/> */}
             <h3> facebook</h3>
                   
                </div>

            </div>

            <div className="header_middle">
            <input type="text" placeholder="Search facebook"/>

            </div>

            <div className="header_right">
                <div className="header_info">


                    <div className="right_icons" >
                    <img src="https://s3.ap-southeast-1.amazonaws.com/easystore.website/images/channel-logo/svg/messenger-logo.svg" alt="fb-image"/>

                    </div>

                    
                    <div className="right_icons">
                    <img src="data:image/jpeg;base64,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" alt="fb-image"/>

                    </div>
                    
                    <div className="right_icons">
                    <img src="https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png" alt="fb-image"/>

                    

                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Header;

// export default Like;

