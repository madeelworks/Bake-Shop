import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [showAllCakes, setShowAllCakes] = useState(false);
  const [showAllCupcakes, setShowAllCupcakes] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Client Says Slider
    function client_say_slider() {
      if ($('.client_says_slider').length) {
        $('.client_says_slider').owlCarousel({
          loop: true,
          margin: 30,
          items: 1,
          nav: false,
          autoplay: true,
          smartSpeed: 1500,
          dots: false,
          responsiveClass: true,
        })
      }
    }
    client_say_slider();

  }, []);

  const cakes = [
    { name: "Mehndi Celebration",  image: "/img/cake-feature/Mehndi.png" },
    { name: "Eid Special",  image: "/img/cake-feature/Eid.png" },
    { name: "Independence Day", image: "/img/cake-feature/pakistan.png" },
    { name: "Wedding Qubool Hai",  image: "/img/cake-feature/qabool.png" },
    { name: "Graduation Classic",  image: "/img/cake-feature/Degree.png" },
    { name: "Welcome",  image: "/img/cake-feature/welcome.png" },
    { name: "Engagement", image: "/img/cake-feature/Engage.png" },
    { name: "Farewell Memory",  image: "/img/cake-feature/Farewell.png" },
    { name: "Anniversary Love",  image: "/Annivarsary.png" },
    { name: "Birthday Bash",  image: "/Birthday.png" },
    { name: "Royal Treat",  image: "/Royal.png" },
    { name: "Blue Lagoon",  image: "/Blue.png" },
  ];

  const cupcakes = [
 { name: "Birthday Bash",  image: "/img/cupcakes/celebration.png" },
    { name: "Chocolate Explosion",  image: "/img/cupcakes/chocolate.png" },
    { name: "Vanilla Cake", image: "/img/cupcakes/Goldenbirth.png" },
    { name: "Berry Cake",  image: "/img/cupcakes/Berry.png" },
    { name: "Caramel",  image: "/img/cupcakes/caramel.png" },
    { name: "Rose Flavored",  image: "/img/cupcakes/Bride.png" },
    { name: "Dark Chocolate", image: "/img/cupcakes/Groom.png" },
    { name: "Mehndi color",  image: "/img/cupcakes/Mendi.png" },
    { name: "Two Toned",  image: "/img/cupcakes/Engagement.png" },
    { name: "Graduation",  image: "/img/cupcakes/Graduationcup.png" },
        { name: "Eid Cupcake",  image: "/img/cupcakes/Eidcup.png" },

  ];

  const displayedCakes = showAllCakes ? cakes : cakes.slice(0, 8);
  const displayedCupcakes = showAllCupcakes ? cupcakes : cupcakes.slice(0, 8);

  const renderItem = (item, index) => (
    <div className="col-lg-3 col-md-4 col-6" key={index}>
      <div className="cake_feature_item" style={{ marginBottom: '30px' }}>
        <div 
          className="cake_img" 
          onClick={() => setSelectedImage(item.image)}
          style={{ cursor: 'pointer' }}
        >
          <img style={{ height: '6cm', width: '100%', objectFit: 'cover' }} src={item.image} alt={item.name} />
        </div>
        <div className="cake_text">
          {/* <h4>{item.price}</h4> */}
          <h3>{item.name}</h3>
          <a 
            className="pest_btn" 
            href={`https://wa.me/923413663416?text=Hi, I want to order ${item.name}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/*================Banner Area =================*/}
      <section className="banner_area">
        <div className="container">
          <div className="banner_text">
            <h3>Menu</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
            </ul>
          </div>
        </div>
      </section>
      {/*================End Banner Area =================*/}

      {/*================Cakes Area =================*/}
      <section className="our_cakes_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>Our Cakes</h2>
            <h5>No matter the occasion, there's a perfect event cake out there waiting to be discovered. Consider the theme, guest preferences, and overall ambiance to choose the one that will make your celebration truly unforgettable.</h5>
          </div>
          <div className="cake_feature_row row">
            {displayedCakes.map(renderItem)}
          </div>
          {!showAllCakes && cakes.length > 8 && (
            <div className="row" style={{ marginTop: '30px' }}>
              <div className="col-lg-12 text-center">
                <button 
                  className="pest_btn" 
                  onClick={() => setShowAllCakes(true)}
                  style={{ cursor: 'pointer', border: 'none' }}
                >
                  View More
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      {/*================End Cakes Area =================*/}

      {/*================Cupcakes Area =================*/}
      <section className="price_list_area p_100" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="main_title">
            <h2>Our Cupcakes</h2>
            <h5>Delightful little treats perfect for any gathering or just a personal indulgence.</h5>
          </div>
          <div className="row">
            {displayedCupcakes.map(renderItem)}
          </div>
          {!showAllCupcakes && cupcakes.length > 8 && (
            <div className="row" style={{ marginTop: '30px' }}>
              <div className="col-lg-12 text-center">
                <button 
                  className="pest_btn" 
                  onClick={() => setShowAllCupcakes(true)}
                  style={{ cursor: 'pointer', border: 'none' }}
                >
                  View More
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      {/*================End Cupcakes Area =================*/}

      {/*================Custom Cake Area =================*/}
      <section className="custom_cake_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>Custom Cake Orders</h2>
            <h5>We can make any custom cake you need! Just tell us your idea, and we will bake it exactly the way you want. Perfect for your special celebrations.</h5>
            <a className="pest_btn" href="https://wa.me/923413663416" target="_blank" rel="noopener noreferrer">Order Custom Cake</a>
          </div>
        </div>
      </section>
      {/*================End Custom Cake Area =================*/}

      {/*================Client Says Area =================*/}
      <section className="client_says_area p_100">
        <div className="container">
          <div className="client_says_inner">
            <div className="c_says_title">
              <h2>What Our Client Says</h2>
            </div>
            <div className="client_says_slider owl-carousel">
              <div className="item">
                <div className="media">
                  <div className="d-flex">
                    <h3>“</h3>
                  </div>
                  <div className="media-body">
                    <p>So in love with the cupcakes the taste was really something to write home about .</p>
                    <h5>Maryam Khalid </h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="d-flex">
                  </div>
                  <div className="media-body">
                    <p>They really came throuhg for my birthday party with the stawberry covered cake will mostly likely use them next year again .</p>
                    <h5>Muhammad Ameer </h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="d-flex">
                  </div>
                  <div className="media-body">
                    <p>My go to cake shop in abuja i stop through  for the donuts and browines </p>
                    <h5>Alishba Shan </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Client Says Area =================*/}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Full view" 
            style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333'
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;