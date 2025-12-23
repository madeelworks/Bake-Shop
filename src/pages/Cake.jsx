import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cake = () => {
  const [visibleCount, setVisibleCount] = useState(8);

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

  const handleViewMore = () => {
    setVisibleCount(cakes.length);
  };

  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Arivals Slider
    function arivals_slider() {
      if ($('.arivals_slider').length) {
        $('.arivals_slider').owlCarousel({
          loop: true,
          margin: 30,
          items: 2,
          nav: false,
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            420: {
              items: 2,
            },
          }
        })
      }
    }
    arivals_slider();

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

  return (
    <div>
      {/*================Banner Area =================*/}
      <section className="banner_area">
        <div className="container">
          <div className="banner_text">
            <h3>Our Cakes</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cake">Cakes</Link></li>
            </ul>
          </div>
        </div>
      </section>
      {/*================End Banner Area =================*/}

      {/*================Blog Main Area =================*/}
      <section className="our_cakes_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>Our Cakes</h2>
            <h5>No matter the occasion, there's a perfect event cake out there waiting to be discovered. Consider the theme, guest preferences, and overall ambiance to choose the one that will make your celebration truly unforgettable.
              We invite you to step into our haven of handcrafted delights and experience the difference that quality, passion, and dedication make. Whether you're planning a special occasion, seeking a sweet afternoon treat, or simply looking to connect with your community over a shared love of deliciousness. </h5>
          </div>
          <div className="cake_feature_row row">
            {cakes.slice(0, visibleCount).map((cake, index) => (
              <div className="col-lg-3 col-md-4 col-6" key={index}>
                <div className="cake_feature_item">
                  <div className="cake_img">
                    <img style={{ height: '6cm', width: '6cm' }} src={cake.image} alt={cake.name} />
                  </div>
                  <div className="cake_text">
                    <h3>{cake.name}</h3>
                    <Link className="pest_btn" to="#">Add to cart</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleCount < cakes.length && (
            <div className="row" style={{ marginTop: '30px', textAlign: 'center' }}>
              <div className="col-lg-12">
                <button className="pest_btn" onClick={handleViewMore}>View More</button>
              </div>
            </div>
          )}
        </div>
      </section>
      {/*================End Blog Main Area =================*/}

      {/*================Discover Menu Area =================*/}
      <section className="discover_menu_area service_menu">
        <div className="discover_menu_inner">
          <div className="container">
            <div className="s_dis_title">
              <div className="float-left">
                <div className="main_title">
                  <h2>Various Flavors</h2>
                  <h5>You can also tell us what flavour you prefer </h5>
                </div>
              </div>
              {/* <div className="float-right">
                <a className="pest_w_btn" href="https://www.instagram.com/p/CztD2gXItpu/?img_index=1 ">View Full Menu </a>
              </div> */}
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="discover_item_inner">
                  <div className="discover_item">
                    <h4>Vanilla </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall 
                       {/* <span>N18k -N100k </span> */}
                       </p>
                  </div>
                  <div className="discover_item">
                    <h4>Red Velvet </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  </p>
                  </div>
                  <div className="discover_item">
                    <h4> Nutmeg </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  </p>
                  </div>
                  <div className="discover_item">
                    <h4>Lemon </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="discover_item_inner">
                  <div className="discover_item">
                    <h4>Orea</h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  </p>
                  </div>
                  <div className="discover_item">
                    <h4>Coffee</h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  </p>
                  </div>
                  <div className="discover_item">
                    <h4>Blueberry </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  </p>
                  </div>
                  <div className="discover_item">
                    <h4> Coconut </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Discover Menu Area =================*/}

      {/*================New Arivals Area =================*/}
      {/* <section className="new_arivals_area p_100">
        <div className="container">
          <div className="single_pest_title">
            <h2> Christmas-themed flavored cakes </h2>
          </div>
          <div className="row arivals_inner">
            <div className="col-lg-6 col-sm-7">
              <div className="arivals_chocolate">
                <div className="arivals_pic">
                  <img className="img-fluid" src="/c3.PNG" alt="" />
                  <div className="price_text">
                    <h5>N73k</h5>
                  </div>
                </div>
                <div className="arivals_text">
                  <h4> Christmas cakes</h4>
                  <Link to="#"></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="arivals_slider owl-carousel">
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/c1.PNG" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>N67k </h4>
                      <h3> Christmas cakes</h3>
                      <Link className="pest_btn" to="#">Add to cart</Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/c2.PNG" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>N80k </h4>
                      <h3>Christmas cakes </h3>
                      <Link className="pest_btn" to="#">Add to cart</Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/c3.PNG" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>N260k</h4>
                      <h3>Christmas cakes </h3>
                      <Link className="pest_btn" to="#">Add to cart</Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/c1.PNG" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>N67k </h4>
                      <h3> Christmas cakes </h3>
                      <Link className="pest_btn" to="#">Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*================End New Arivals Area =================*/}

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
                    <h5>- Kelly </h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="d-flex">
                  </div>
                  <div className="media-body">
                    <p>They really came throuhg for my birthday party with the stawberry covered cake will mostly likely use them next year again .</p>
                    <h5>- Anna </h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="d-flex">
                  </div>
                  <div className="media-body">
                    <p>My go to cake shop in abuja i stop through  for the donuts and browines </p>
                    <h5>- Ebuka </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Client Says Area =================*/}

      {/*================Special Area =================*/}
      {/* <section className="special_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>Treats by Mimi is now taking orders via WhatsApp. </h2>
            <h5>Send a message to [+234 8170245555].<br />
              Browse our menu or tell us your cravings.<br />
              Specify quantities, flavors, and any special requests.<br />
              Choose your preferred pick-up time or delivery option (if available).<br />
              We'll confirm your order and send you payment details.<br />
              Sit back, relax, and await your sweet treat! </h5>
          </div>
          <div className="special_item_inner">
            <div className="specail_item">
              <div className="row">
                <div className="col-lg-4">
                  <div className="s_left_img">
                    <img className="img-fluid" src="/img/special/special-1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="special_item_text">
                    <h4>Call Or A Send Message </h4>
                    <a className="pink_btn" href="https://wa.me/c/2348170245555 ">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="specail_item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="s_item_left">
                    <div className="main_title">
                      <h2>Don't forget to:</h2>
                    </div>
                    <ul className="list_style">
                      <li>
                        <Link to="#">
                          Tell us your preferred pick-up location (if applicable).<br />
                          Feel free to ask us any questions about our menu or ingredients.<br />
                          We're excited to make your dessert dreams a reality, one WhatsApp message at a time!
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="s_right_img">
                    <img className="img-fluid" src="/img/product/product-details-1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*================End Special Area =================*/}
    </div>
  );
};

export default Cake;
