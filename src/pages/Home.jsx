import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import About from './About';
import Cake from './Cake';


const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Navbar Fixed
    const nav_offset_top = $('header').height();
    function navbarFixed() {
      if ($('.main_header_area, .main_header_three, .box_header_four').length) {
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= nav_offset_top) {
            $(".main_header_area, .main_header_three, .box_header_four").addClass("navbar_fixed");
          } else {
            $(".main_header_area, .main_header_three, .box_header_four").removeClass("navbar_fixed");
          }
        });
      };
    };
    navbarFixed();

    // Cake Feature Slider
    function cake_carousel() {
      if ($('.cake_feature_slider').length) {
        $('.cake_feature_slider').owlCarousel({
          loop: true,
          margin: 30,
          items: 4,
          nav: false,
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 2,
            },
            430: {
              items: 2,
            },
            768: {
              items: 3,
            },
            992: {
              items: 4,
            }
          }
        })
      }
    }
    cake_carousel();

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

    // Events Specials Slider
    function events_specials_slider() {
      if ($('.events_specials_slider').length) {
        $('.events_specials_slider').owlCarousel({
          loop: true,
          margin: 30,
          items: 4,
          nav: false,
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 2,
            },
            576: {
              items: 2,
            },
            768: {
              items: 4,
            },
            992: {
              items: 4,
            }
          }
        })
      }
    }
    events_specials_slider();



  }, []);

  return (
    <div>
      {/*================Slider Area =================*/}
      <section className="main_slider_area">
        <div className="container-fluid p-0 hero-wrapper">
          <img src="/home1.jpg" alt="Home Banner Image" className="img-fluid w-100 hero-banner-image" />
          <div className="hero-banner-text">
            <h1 className="hero-title">
              Dessert Shop ... <br /> with Quality Cakes 
            </h1>
            <p className="hero-description">
              Affordable and delicious Treats by Dr-Yums is a family-owned dessert shop in Pakistan. We are passionate about creating delicious and affordable desserts that will make your taste buds sing.
            </p>
            <Link to="/cake" className="hero-btn">
              Purchase now
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Area */}
      <section className="welcome_bakery_area pink_cake_feature">
        <div className="container">
          <div className="cake_feature_inner">
            <div className="title_view_all">
              <div className="float-left">
                <div className="main_w_title">
                  <h2>Our Featured Cakes</h2>
                  <h5>Best Couture Cakes In Pakistan </h5>
                </div>
              </div>
              <div className="float-right">
                <Link className="pest_btn" to="/cake">View all Products</Link>
              </div>
            </div>
            <div className="cake_feature_slider owl-carousel">
              <div className="item">
                <div className="cake_feature_item">
                  <div className="cake_img">
                    <img src="/Divergent.png" alt="" />
                  </div>
                  <div className="cake_text">
                    <h3>Divergent </h3>
                    <button className="pest_btn" onClick={() => setSelectedImage('/Divergent.png')}>View</button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="cake_feature_item">
                  <div className="cake_img">
                    <img src="/Color.png" alt="" />
                  </div>
                  <div className="cake_text">
                    <h3>Colour Bomb </h3>
                    <button className="pest_btn" onClick={() => setSelectedImage('/Color.png')}>View</button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="cake_feature_item">
                  <div className="cake_img">
                    <img src="/Royal.png" alt="" />
                  </div>
                  <div className="cake_text">
                    <h3>Royalty  </h3>
                    <button className="pest_btn" onClick={() => setSelectedImage('/Royal.png')}>View</button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="cake_feature_item">
                  <div className="cake_img">
                    <img src="/Blue.png" alt="" />
                  </div>
                  <div className="cake_text">
                    <h3>Swiss Blue </h3>
                    <button className="pest_btn" onClick={() => setSelectedImage('/Blue.png')}>View</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>



      {/* New Arrivals Area */}
      <section className="new_arivals_area p_100">
        <div className="container">
          <div className="single_pest_title">
            <h2>Events Specials </h2>
          </div>
          <div className="row arivals_inner">
            <div className="col-lg-12">
              <div className="events_specials_slider owl-carousel">
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/wedding.png" alt="" />
                    </div>
                    <div className="cake_text">
                      <h3>Wedding Cake </h3>
                      <button className="pest_btn" onClick={() => setSelectedImage('/wedding.png')}>View</button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/Birthday.png" alt="" />
                    </div>
                    <div className="cake_text">
                      <h3>Birthday Cake </h3>
                      <button className="pest_btn" onClick={() => setSelectedImage('/Birthday.png')}>View</button>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/Annivarsary.png" alt="" />
                    </div>
                    <div className="cake_text">
                      <h3>Annivarsary Cake</h3>
                      <button className="pest_btn" onClick={() => setSelectedImage('/Annivarsary.png')}>View</button>
                    </div>
                  </div>
                </div>
                
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/Farewall.png" alt="" />
                    </div>
                    <div className="cake_text">
                      <h3>Farewall Cake </h3>
                      <button className="pest_btn" onClick={() => setSelectedImage('/Farewall.png')}>View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Menu Area */}
      {/* <section className="discover_menu_area service_menu">
        <div className="discover_menu_inner">
          <div className="container">
            <div className="s_dis_title">
              <div className="float-left">
                <div className="main_title">
                  <h2>Various Flavors</h2>
                  <h5></h5>
                </div>
              </div>
              <div className="float-right">
                <a className="pest_w_btn" href="https://www.instagram.com/p/CztD2gXItpu/?img_index=1 ">View Full Menu </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="discover_item_inner">
                  <div className="discover_item">
                    <h4>Vanilla </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall 
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
      </section> */}
    {/* Our Mission Area */}
      <section className="our_mission_area p_100">
        <div className="container">
          <div className="row our_mission_inner">
            <div className="col-lg-3">
              <div className="single_m_title">
                 <h2>Our Mission</h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="mission_inner_text">
                <h6>At Dr-Yums, we believe that life’s sweetest moments deserve a touch of magic. We’re not just bakers; we’re creators of joy, crafting treats that spark smiles, fuel laughter, and make lasting memories.</h6>
                <p> At Dr-Yums, we believe that life’s sweetest moments deserve a little extra joy. Whether it’s a birthday cake with glowing candles or the joy of a warm croissant on a Sunday morning, we’re here to make every moment sweeter.<br /><br />
                {/* Our bakery isn’t just a place; it’s a welcoming space where kindness and connection are shared. It’s where laughter and love come together over fresh, homemade treats.<br /><br />
                  We’re always looking for new ideas, experimenting with flavors and textures to bring you exciting new treats that will make your taste buds smile.<br /><br />
                  At Dr-Yums, we care about what we bake. We use the best local ingredients, taking care to treat them well and keep the planet and community in mind.<br /><br /> */}
                 Dr-Yums isn’t just a bakery – it’s our promise to make your life a little sweeter, one delicious bite at a time. Come visit us and enjoy our handcrafted treats, and let us be part of your sweetest memories.</p>
                <ul className="nav">
                  <li><a>Custom cakes</a></li>
                  <li><a>Birthday cakes</a></li>
                  <li><a>Wedding cakes</a></li>
                  <li><a>Thank you Cakes </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Client Says Area */}
      {/* <section className="client_says_area p_100">
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
      </section> */}

  

      {/* Price List Area */}
      {/* <section className="price_list_area p_100">
        <div className="container">
          <div className="price_list_inner">
            <div className="single_pest_title">
              <h2>Our Price List</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="welcome_img">
                   <img className="img-fluid" src="/m1.PNG" alt="" />
                   <img className="img-fluid" src="/m2.PNG" alt="" />
                   <img className="img-fluid" src="/m3.PNG" alt="" />
                   <img className="img-fluid" src="/m4.PNG" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
       {/* New Arrivals Area 2 (Christmas) */}
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
        						<a href="#"></a>
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
										<Link className="pest_btn" to="/cart">Add to cart</Link>
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
										<Link className="pest_btn" to="/cart">Add to cart</Link>
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
										<Link className="pest_btn" to="/cart">Add to cart</Link>
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
										<Link className="pest_btn" to="/cart">Add to cart</Link>
									</div>
								</div>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </section> */}

      {/* Special Area */}
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
                    <p></p>
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
                      <h2>Don't forget to:<br /></h2>
                    </div>
                    <ul className="list_style">
                      <li><a href="#">
                        Tell us your preferred pick-up location (if applicable).<br />
                        Feel free to ask us any questions about our menu or ingredients.<br />
                        We're excited to make your dessert dreams a reality, one WhatsApp message at a time! </a></li>

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

      {/* Image Modal */}
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
            zIndex: 9999
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '30px',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Full size cake" 
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>
      )}
      <div id="about">
        <About />
      </div>
      <div id="cake">
        <Cake />
      </div>

    </div>
  );
};

export default Home;
