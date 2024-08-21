import React from "react";

const Gallery = () => {
    return(
    <>
     <section className="gallery" id="gallery">
        <div className="container">
          <p className="section-subtitle">Photo Gallery</p>
          <h2 className="h2 section-title">Photo's From The Island</h2>
          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
            nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
            tenetur, aptent.
          </p>
          <ul className="gallery-list">
            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/gallery/1.jpg" alt="Gallery image" />
              </figure>
            </li>
            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/gallery/2.jpg" alt="Gallery image" />
              </figure>
            </li>
            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/gallery/3.jpg" alt="Gallery image" />
              </figure>
            </li>
            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/gallery/4.jpg" alt="Gallery image" />
              </figure>
            </li>
            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./assets/gallery/5.jpg" alt="Gallery image" />
              </figure>
            </li>
          </ul>
        </div>
      </section>
    </>
    )
}

export default Gallery;