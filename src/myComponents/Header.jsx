import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import AttachEmailIcon from '@mui/icons-material/AttachEmail';
export default function Header() {
  return (
    <>
    <div className="header">
    
        <PhoneIcon/>
        <p>&nbsp;&nbsp;86056 85424 &nbsp;|&nbsp;</p>
        <p>&nbsp; 98810 78249 &nbsp;|&nbsp;&nbsp; </p>
        <AttachEmailIcon/>
        <p> &nbsp;&nbsp;info@hpdglobal.com</p>
        <div className="socal">
      <FacebookIcon/>
      <LinkedInIcon/>
    </div>
       
    </div>
  
    
    
    
    
    </>
 
  )
}
