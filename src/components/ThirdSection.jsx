import React from 'react'
import Plane from '../assets/plane.jpg'
import Train from '../assets/train.jpg'
import Bus from '../assets/bus.jpg'
import Bag from '../assets/bag.jpg'
import Laptop from '../assets/laptop.jpg'
import PrimeBanner from '../assets/primebanner.webp'
import { CardGrid, ImageBlock } from './CardGrid'
import './ThirdSection.css'

export const ThirdSection = () => {
    return (
        <div className='category-grid'>
            <CardGrid cardTitle={'Book in advance for holi'}
                image1={Plane}
                image2={Train}
                image3={Bus}
                image4={Bag}
                title1={'Get up to ₹2000 off on flights'}
                title2={'Zero payment gateway fees on trains'}
                title3={'Guaranteed rewards on Bus tickets'}
                title4={'Products for you travel needs'}
            />
            <CardGrid cardTitle={'Book in advance for holi'}
                image1={Plane}
                image2={Train}
                image3={Bus}
                image4={Bag}
                title1={'Get up to ₹2000 off on flights'}
                title2={'Zero payment gateway fees on trains'}
                title3={'Guaranteed rewards on Bus tickets'}
                title4={'Products for you travel needs'}
            />
            <CardGrid cardTitle={'Book in advance for holi'}
                image1={Plane}
                image2={Train}
                image3={Bus}
                image4={Bag}
                title1={'Get up to ₹2000 off on flights'}
                title2={'Zero payment gateway fees on trains'}
                title3={'Guaranteed rewards on Bus tickets'}
                title4={'Products for you travel needs'}
            />
            <div className='fourth-block'>
                <div className='top-card'>
                    <div className='left-block'>
                        <div className='card-header'>
                            <h3 className='mb-1'>Sell on Amazon with 50% off on Selling fee</h3>
                        </div>
                        <div className='footer-block'>
                            <p className=''>See all offers</p>
                        </div>
                    </div>
                    <div className='right-block'>
                        <ImageBlock image={Plane} title={''} />
                    </div>
                </div>
                <div className='bottom-card'>
                    <img src={Laptop} alt='laptop' />
                </div>
            </div>
            <div className='prime-block' style={{ backgroundImage: `url(${PrimeBanner})` }}>
                <div className='overlay'></div>
                <div className='prime-abs'>
                    <div className='prime-header'>
                        <h2 className='text-white m-0'>Prime Video: Recommended for you</h2>
                        <p className='fs-1 strong text-white m-0 mt-1'>Farzi</p>
                    </div>
                    <div className='prime-footer'>
                        <p className='text-white fs-1'>Start watching on prime video</p>
                    </div>
                </div>
            </div>
            <CardGrid cardTitle={'Book in advance for holi'}
                image1={Plane}
                image2={Train}
                image3={Bus}
                image4={Bag}
                title1={'Get up to ₹2000 off on flights'}
                title2={'Zero payment gateway fees on trains'}
                title3={'Guaranteed rewards on Bus tickets'}
                title4={'Products for you travel needs'}
            />
            <CardGrid cardTitle={'Book in advance for holi'}
                image1={Plane}
                image2={Train}
                image3={Bus}
                image4={Bag}
                title1={'Get up to ₹2000 off on flights'}
                title2={'Zero payment gateway fees on trains'}
                title3={'Guaranteed rewards on Bus tickets'}
                title4={'Products for you travel needs'}
            />
        </div>
    )
}
