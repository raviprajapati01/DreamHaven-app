import "../styles/Footer.scss"
import { LocalPhone, Email, Language } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/assets/logo1.png" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <a href="tel:+916261303439"> +91-6261303469 </a>
        </div>
        <div className="footer_right_info">
          <Email />
          <a href="mailto:dreamhavensupport@gmail.com">dreamhavensupport@gmail.com</a>
        </div>
        <div className="footer_right_info">
          <Language/>
          <a href="https://portfoliowebsite-mu-six.vercel.app/">connect with website</a>
        </div>

        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer