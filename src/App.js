import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Gallery from './component/gallery';
import Package from './component/package';

function App() {
  return (
    <>
  
 <Header/>
  <main>
    <article>
      {/* 
  - #HERO
*/}
      <section className="hero" id="home">
        <div className="container">
          <h2 className="h1 hero-title">Journey to explore world</h2>
          <p className="hero-text">
            Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit
            class corporis nostra rem quos voluptatibus habitant? Fames, vivamus
            minim nemo enim, gravida lobortis quasi, eum.
          </p>
          <div className="btn-group">
            <button className="btn btn-primary">Learn more</button>
            <button className="btn btn-secondary">Book now</button>
          </div>
        </div>
      </section>
      {/* 
  - #TOUR SEARCH
*/}
      <section className="tour-search">
        <div className="container">
          <form action="" className="tour-search-form">
            <div className="input-wrapper">
              <label htmlFor="destination" className="input-label">
                Search Destination*
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                required=""
                placeholder="Enter Destination"
                className="input-field"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="people" className="input-label">
                Pax Number*
              </label>
              <input
                type="number"
                name="people"
                id="people"
                required=""
                placeholder="No.of People"
                className="input-field"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="checkin" className="input-label">
                Checkin Date**
              </label>
              <input
                type="date"
                name="checkin"
                id="checkin"
                required=""
                className="input-field"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="checkout" className="input-label">
                Checkout Date*
              </label>
              <input
                type="date"
                name="checkout"
                id="checkout"
                required=""
                className="input-field"
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Inquire now
            </button>
          </form>
        </div>
      </section>
      {/* 
  - #POPULAR
*/}
      <section className="popular" id="destination">
        <div className="container">
          <p className="section-subtitle">Uncover place</p>
          <h2 className="h2 section-title">Popular destination</h2>
          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
            nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
            tenetur, aptent.
          </p>
          <ul className="popular-list">
            <li>
              <div className="popular-card">
                <figure className="card-img">
                  <img
                    src="./assets/images/popular-1.jpg"
                    alt="San miguel, italy"
                    loading="lazy"
                  />
                </figure>
                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <p className="card-subtitle">
                    <a href="#">Italy</a>
                  </p>
                  <h3 className="h3 card-title">
                    <a href="#">San miguel</a>
                  </h3>
                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-card">
                <figure className="card-img">
                  <img
                    src="./assets/images/popular-2.jpg"
                    alt="Burj khalifa, dubai"
                    loading="lazy"
                  />
                </figure>
                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <p className="card-subtitle">
                    <a href="#">Dubai</a>
                  </p>
                  <h3 className="h3 card-title">
                    <a href="#">Burj khalifa</a>
                  </h3>
                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="popular-card">
                <figure className="card-img">
                  <img
                    src="./assets/images/popular-3.jpg"
                    alt="Kyoto temple, japan"
                    loading="lazy"
                  />
                </figure>
                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <p className="card-subtitle">
                    <a href="#">Japan</a>
                  </p>
                  <h3 className="h3 card-title">
                    <a href="#">Kyoto temple</a>
                  </h3>
                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <button className="btn btn-primary">More destintion</button>
        </div>
      </section>
      {/* 
  - #PACKAGE
*/}
        <Package/>
 
        <Gallery/>
      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-content">
            <p className="section-subtitle">Call To Action</p>
            <h2 className="h2 section-title">
              Ready For Unforgatable Travel. Remember Us!
            </h2>
            <p className="section-text">
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
              tenetur, aptent.
            </p>
          </div>
          <button className="btn btn-secondary">Contact Us !</button>
        </div>
      </section>
    </article>
  </main>
  {/* 
    - #FOOTER
  */}
  <footer className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src="./assets/images/logo.svg" alt="Tourly logo" />
          </a>
          <p className="footer-text">
            Urna ratione ante harum provident, eleifend, vulputate molestiae
            proin fringilla, praesentium magna conubia at perferendis, pretium,
            aenean aut ultrices.
          </p>
        </div>
        <div className="footer-contact">
          <h4 className="contact-title">Contact Us</h4>
          <p className="contact-text">Feel free to contact and reach us !!</p>
          <ul>
            <li className="contact-item">
              <ion-icon name="call-outline" />
              <a href="tel:+919531989776" className="contact-link">
                +91 9531989776
              </a>
            </li>
            <li className="contact-item">
              <ion-icon name="mail-outline" />
              <a href="mailto:info.swarajdeepholiday.com" className="contact-link">
                info.swarajdeepholiday.com
              </a>
            </li>
            <li className="contact-item">
              <ion-icon name="location-outline" />
              <address>Andaman & Nicobar Island, 744211</address>
            </li>
          </ul>
        </div>
        <div className="footer-form">
          <p className="form-text">
            Subscribe our newsletter for more update &amp; news !!
          </p>
          <form action="" className="form-wrapper">
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Enter Your Email"
              required=""
            />
            <button type="submit" className="btn btn-secondary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          © 2022 swarajdeepholiday<a href="www.swarajdeepholiday.com"></a>. All rights reserved
        </p>
        <ul className="footer-bottom-list">
          <li>
            <a href="#" className="footer-bottom-link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="footer-bottom-link">
              Term &amp; Condition
            </a>
          </li>
          <li>
            <a href="#" className="footer-bottom-link">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  {/* 
    - #GO TO TOP
  */}
  <a href="#top" className="go-top" data-go-top="">
    <ion-icon name="chevron-up-outline" />
  </a>
  {/* 
    - custom js link
  */}
  {/* 
    - ionicon link
  */}
</>

  )
}

export default App;
