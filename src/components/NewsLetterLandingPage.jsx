import temp_headshot from "../assets/LogoGold.png"

const NewsLetterLandingPage = () => {
  return (
    <div className='newsletter-container'>
      <div className="newsletter-main">
          <div className="newsletter-headshot">
            <img src={temp_headshot} alt="headshot" />
          </div>

          <div className="newsletter-details">
            <span id='newsletter-title'>Welcome to Project MVMT!</span>
            <span id='newsletter-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi et eligendi molestiae animi magni iusto perspiciatis repellat laboriosam necessitatibus adipisci voluptatibus reiciendis illo, libero rerum hic? Magnam, voluptates inventore?</span>
            <div className='newsletter-form'>
              <form action="#">
                <input type="text" placeholder='Email Address' />
                <button type="submit">Subscribe</button>
              </form>
              <div>We respect your privacy. <span id="unsub">Unsubscribe</span> at any time.</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewsLetterLandingPage