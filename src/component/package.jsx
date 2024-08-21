import React from "react";

const Package = () => {
    return (
        <>
         <section className="package" id="package">
        <div className="container">
          <p className="section-subtitle">Popular Packeges</p>
          <h2 className="h2 section-title">Checkout Our Packeges</h2>
          <p className="section-text">
            Choose from our versatile product range.
          </p>
          <ul className="package-list">
            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="./assets/images/packege-1.jpg"
                    alt="Experience The Great Holiday On Beach"
                    loading="lazy"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">
                  Andaman Tour Packages from Delhi
                  </h3>
                  <p className="card-text">
                  2 Nights Port Blair | 2 Night Havelock Island
                  </p>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time" />
                        <p className="text">D5/4N</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people" />
                        <p className="text">pax: ~</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location" />
                        <p className="text">India</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">(25 reviews)</p>
                    <div className="card-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                  </div>
                  <p className="price">
                    42,000
                    <span>/ per person</span>
                  </p>
                  <button className="btn btn-secondary">Book Now</button>
                </div>
              </div>
            </li>
            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="./assets/images/packege-2.jpg"
                    alt="Summer Holiday To The Oxolotan River"
                    loading="lazy"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">
                  7 Days Andaman Tour Package
                  </h3>
                  <p className="card-text">
                  2 NIGHTS PORT BLAIR | 2 NIGHT HAVELOCK ISLAND | 2 NIGHT NEIL ISLAND
                  </p>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time" />
                        <p className="text">7D/6N</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people" />
                        <p className="text">pax: ~</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location" />
                        <p className="text">India</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">(20 reviews)</p>
                    <div className="card-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                  </div>
                  <p className="price">
                    52,000
                    <span>/ per person</span>
                  </p>
                  <button className="btn btn-secondary">Book Now</button>
                </div>
              </div>
            </li>
            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="./assets/images/packege-3.jpg"
                    alt="Santorini Island's Weekend Vacation"
                    loading="lazy"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">
                  Andaman Tour Packages from Chennai
                  </h3>
                  <p className="card-text">
                  2 Nights Port Blair | 1 Night Havelock Island | 1 Neil Island
                  </p>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time" />
                        <p className="text">5D/4N</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people" />
                        <p className="text">pax: ~</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location" />
                        <p className="text">India</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">(40 reviews)</p>
                    <div className="card-rating">
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                      <ion-icon name="star" />
                    </div>
                  </div>
                  <p className="price">
                    38,000
                    <span>/ per person</span>
                  </p>
                  <button className="btn btn-secondary">Book Now</button>
                </div>
              </div>
            </li>
          </ul>
          <button className="btn btn-primary">View All Packages</button>
        </div>
      </section>
      </>
    )
}

export default Package