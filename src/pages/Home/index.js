import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Bennar from '../../components/Bennar'
import GigCard from '../../components/Cards/GigCard'
import PopularCard from '../../components/Cards/PopularCard'

function Index() {

   const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

  return (
    <div className='home' >
        <Bennar />

        <section className='section popular-category' >
           <div className='container' >
              <div className='popular-category__wrapper' >

                <div className='section-header' >
                  <h2 className='section-title' > Popular category </h2>
                </div>

                <div className='section-body' >
                   <div className='popular-cards__wrapper' >
                      <div className='row' >

                        <div className='col-md-3 mb-3 mb-md-0' >
                           <PopularCard to='/' src='/images/ads.jpg' title='Ads &amp; PR' /> 
                        </div>
                        
                        <div className='col-md-3 mb-3 mb-md-0' > 
                          <PopularCard to='/' src='/images/web-trafic.jpg' title='Web Traffic' /> 
                        </div>
                        
                        <div className='col-md-3 mb-3 mb-md-0' > 
                          <PopularCard to='/' src='/images/backlink.jpg' title='Backlinks' />
                        </div>
                        
                        <div className='col-md-3 mb-3 mb-md-0' > 
                          <PopularCard to='/' src='/images/social-media.jpg' title='Social media &amp; SMM' /> 
                        </div>
                      
                      </div>
                   </div>
                </div>

              </div> 
           </div>
        </section>


        <section className='section gig-section' >
           <div className='container' >
              <div className='gig-wrapper' >

                 <div className='section-header' > 
                   <h2 className='section-title' > Inspired by Your Browsing Activity </h2>
                 </div> 

                 <div className='section-body' >
                    <div className='gig-card__wrapper' >
                        <Carousel responsive={responsive} >

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/d2Mh5"
                              username='raihanhosen011'
                              review={{point : "4.1", count : "11"}}
                              price="20"
                              online={true}
                              fav={true}
                           />

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/bP7KH"
                              username='mohammedraihan'
                              review={{point : "5.0", count : "24"}}
                              price="24"
                              online={false}
                              fav={false}
                           />

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/FA3Dw"
                              username='raihanmohammed'
                              review={{point : "4.1", count : "11"}}
                              price="20"
                              online={true}
                              fav={true}
                           />

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/Mn3Qg"
                              username='relhan016'
                              review={{point : "4.1", count : "11"}}
                              price="20"
                              online={true}
                              fav={true}
                           />

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/T1Nf1"
                              username='helloworld'
                              review={{point : "3.1", count : "4"}}
                              price="55"
                              online={false}
                              fav={false}
                           />

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/Ow6z5"
                              username='morkelon'
                              review={{point : "4.1", count : "11"}}
                              price="20"
                              online={true}
                              fav={true}
                           />

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/Ow6z5"
                              username='rajsekhor'
                              review={{point : "4.1", count : "11"}}
                              price="20"
                              online={true}
                              fav={true}
                           />
                             
                        </Carousel>
                    </div>
                 </div> 

              </div>
           </div>
        </section>


        <section className='section gig-section' >
           <div className='container' >
              <div className='gig-wrapper' >

                 <div className='section-header' > 
                   <h2 className='section-title' > Favorite Kworks </h2>
                 </div> 

                 <div className='section-body' >
                    <div className='gig-card__wrapper' >
                        <Carousel responsive={responsive} >

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/d2Mh5"
                              username='raihanhosen011'
                              review={{point : "4.1", count : "11"}}
                              price="20"
                              online={true}
                              fav={true}
                           />

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/bP7KH"
                              username='mohammedraihan'
                              review={{point : "5.0", count : "24"}}
                              price="24"
                              online={false}
                              fav={true}
                           />

                           <GigCard
                              title='I will build do follow SEO backlinks and 600 words guest blog post' 
                              src="https://fliplink.io/FA3Dw"
                              username='raihanmohammed'
                              review={{point : "4.1", count : "11"}}
                              price="20"
                              online={true}
                              fav={true}
                           />
                             
                        </Carousel>
                    </div>
                 </div> 

              </div>
           </div>
        </section>
    </div>
  )
}

export default Index