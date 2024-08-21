import React from "react";

const Destination = () => {
    return(
        <>
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
                    <a href="#">Port Blair</a>
                  </p>
                  <h3 className="h3 card-title">
                    <a href="#">Port Blair</a>
                  </h3>
                  <p className="card-text">
                  Port Blair is the capital city of the Andaman and Nicobar Islands, a union territory of India in the Bay of Bengal.
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
                    <a href="#">Swaraj Dweep</a>
                  </p>
                  <h3 className="h3 card-title">
                    <a href="#">Havelock Island</a>
                  </h3>
                  <p className="card-text">
                  One of the largest islands in Ritchie's Archipelago, to the east of Great Andaman within the Andaman Islands.
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
                    <a href="#">Shaheed Dweep</a>
                  </p>
                  <h3 className="h3 card-title">
                    <a href="#">Neil Island</a>
                  </h3>
                  <p className="card-text">
                  Neil Island is a tropical paradise boasts stunning white sandy beaches, azure waters, and lush green landscapes.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <button className="btn btn-primary">More destintion</button>
        </div>
      </section></>
    )
}

export default Destination