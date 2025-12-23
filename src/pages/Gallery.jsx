import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate image list
  const galleryImages = [];
  for (let i = 1; i <= 27; i++) {
    let filename = `Gallery${i}.jpeg`;
    if (i === 19) filename = `Galley${i}.jpeg`; // Handle typo
    galleryImages.push(filename);
  }

  // Determine which images to display
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 16);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/*================Banner Area =================*/}
      <section className="banner_area">
        <div className="container">
          <div className="banner_text">
            <h3>Gallery</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
        </div>
      </section>
      {/*================End Banner Area =================*/}

      {/*================Gallery Area =================*/}
      <section className="our_cakes_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>Our Gallery</h2>
            <h5>Explore our delicious creations and memorable moments.</h5>
          </div>
          
          <div className="cake_feature_row row">
            {displayedImages.map((image, index) => (
              <div className="col-lg-3 col-md-4 col-6" key={index}>
                <div className="cake_feature_item">
                  <div className="cake_img">
                    <img 
                      style={{ height: '6cm', width: '6cm', objectFit: 'contain' }} 
                      src={`/${image}`} 
                      alt={`Gallery ${index + 1}`} 
                    />
                  </div>
                  <div className="cake_text" style={{ marginTop: '10px' }}>
                    <button 
                      className="pest_btn" 
                      onClick={() => openModal(image)}
                      style={{ cursor: 'pointer', border: 'none', background: 'none', padding: '0' }}
                    >
                      <span className="pest_btn">View</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && (
            <div className="row">
              <div className="col-lg-12 text-center">
                <button 
                  className="pink_btn" 
                  onClick={() => setShowAll(true)}
                  style={{ cursor: 'pointer', marginTop: '30px' }}
                >
                  View More
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      {/*================End Gallery Area =================*/}

      {/*================Modal =================*/}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
            cursor: 'pointer'
          }}
          onClick={closeModal}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <img 
              src={`/${selectedImage}`} 
              alt="Full View" 
              style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '5px' }} 
            />
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '30px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
