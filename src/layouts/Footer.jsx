import appleframe from '../assets/appleframe.svg'
import googleframe from '../assets/googleframe.svg'
import footersupport from '../assets/footersupport.svg'
import paymentsecure from '../assets/paymentsecured.svg'
import facebook from '../assets/fa-brands_facebook-square.svg'
import instagram from '../assets/fa-brands_instagram.svg'
import twitter from '../assets/fa-brands_twitter.svg'
import youtube from '../assets/fa-brands_youtube.svg'
import '../styles/Footer.css'


export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='mt-2'>
      <div className='footer-background'>
      <div className='container'>
        <div className='d-flex justify-content-between pt-5 footer-body'>
          <div className='d-inline-flex gap-5 payment-body '>
          <div className='d-inline-flex support-main'>
            <img src={footersupport} alt="" className='footer-support'/>
            <div className='text-white'>
              <h4>24/7</h4>
              <p>Support</p>
            </div>
          </div>
            <div className='d-inline-flex payment-main'>
              <img src={paymentsecure} alt="" className='payment-secure'/>
              <div className='text-white'>
                <h4>100%</h4>
                <p>Payment Secured</p>
              </div>
            </div>
          </div>
            <div className='d-inline-flex gap-5 frames-body'>
            <div className=''>
              <img src={appleframe} alt="" className='apple-frame'/>
            </div>
            <div>
              <img src={googleframe} alt="" className='google-frame'/>
            </div>
            </div>
          </div>
          <div className='text-white footer-contact text-center'>
            <h4>Need Help?</h4>
            <p className=''>
              <span className='text-decoration-underline'>+234 903 861 2425</span></p>
          </div>
          <div className='text-white text-center'>
          <h4>FOLLOW US</h4>
          <div className='d-inline-flex gap-5'>
            <a href="https://www.facebook.com/112170038391085/posts/1588022294986034/?substory_index=1588022294986034&app=fbl" ><img src={facebook} alt="" /></a>
            <a href="https://twitter.com/jazzysburger?t=Y1T3JvkqJbGDoK_sQaGyqw&s=08" ><img src={twitter} alt="" /></a>
            <a href="https://www.instagram.com/jazzysburger/?igshid=YmMyMTA2M2Y%3D"><img src={instagram} alt="" /></a>
            <a href="https://www.youtube.com/watch?v=gNCHBUi3Rbg" className='youtube-icon'><img src={youtube} alt="" className=''/></a>
          </div>
          </div>
      </div>
      <div className='text-center text-white'>
      <p>Copyright &copy; {year}.  Developed by Henryuks</p>
      </div>
    </div>
    </div>
  )
}
