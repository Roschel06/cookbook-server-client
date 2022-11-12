import React from 'react'
import '../CSS/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const styles = {

  InstagramIcon: {
    width: 30,
    height: 30,
  },

};

export default function Footer() {
  return (
    <footer>
      <ul className="footerLinks m-20 p-[20]">
            <a><li className="footerText m-4">Privacy</li></a>
            <a><li className="footerText m-4">Terms & Condition</li></a>
            <a><li className="footerText m-4">Settings</li></a>
      </ul>
      <p className="copyright p-40">Copyright © 2022 - Sadaf, Patrícia, Shir & Andrea!</p>          
      <div className="socialIcons m-20">
            <div className='icons'>
              <FacebookIcon style={{ fontSize: '30px' }}/>
            </div>
            <div className='icons'>
              <InstagramIcon style={{ fontSize: '30px' }}/>
            </div>
            <div className='icons'>
              <TwitterIcon style={{ fontSize: '30px' }}/>
            </div>
        </div>

    </footer>
  )
}
