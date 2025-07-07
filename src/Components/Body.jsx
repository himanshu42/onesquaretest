import React from 'react'
import mainibanner from '../assets/Desktop/mainbanner.png'
import Form from './Form'
import YoutubePreview from './YoutubePreview'
import ImageGalary from './ImageGalary'
import Map from './Map'
import nmlogo from '../assets/logo and rera/nmlogo.png'
import Distances from './Distances'
import Footer from './Footer'

const Body = () => {
    return (
        <div>
            <img className='mainibanner' src={mainibanner} alt='logo' />
            <div className='titlediv'>
                <div>
                    <div>
                        <h1 className='bodytitle'>Where</h1>
                        <h1 className='bodytitle'>prestige</h1>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
                        <h1 className='bodytitle'>takes</h1>
                        <div className='line'></div>
                    </div>
                    <div className='tabtitlediv'>
                        <h1 className='bodytitle'>residence</h1>
                        <p className='titlepara'>
                            Royal living is reimagined as Astoria Royals, a luxurious project of
                            spacious 4 & 3 BHK homes. Thoughtful layout and optimal use of space
                            are not the only defining attributes of this gem of a residence; it
                            also boasts a massive array of amenities. Tucked in a fast-developing
                            location and constructed with precision in mind to bring to you a
                            lifestyle that resonates with the name of the project itself.
                        </p>
                    </div>
                </div>
            </div>
            <Form />
            <YoutubePreview title='Walkthrough' />
            <div className='titlediv'>
                <div>
                    <div>
                        <h1 className='bodytitle'>A Stellar</h1>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
                        <h1 className='bodytitle'>lineup</h1>
                        <div className='line'></div>
                    </div>
                    <div className='tabtitlediv'>
                        <h1 className='bodytitle'>of luxuries</h1>
                        <p className='titlepara'>
                            Luxury isn't a label at Astoria Royals, it is a full-blown experience. From indulgent leisure spaces and wellness facilities to top-tier entertainment, every amenity is designed to surpass expectations.
                            Whatever you desire, chances are, it's already waiting for you.
                        </p>
                    </div>
                </div>
            </div>
            <ImageGalary />
            <YoutubePreview title='Sample Flat' />
            <div className='titlediv'>
                <div>
                    <div>
                        <h1 className='bodytitle'>A landmark</h1>
                        <h1 className='bodytitle'>destination for</h1>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
                        <h1 className='bodytitle'>elevated</h1>
                        <div className='line'></div>
                    </div>
                    <div className='tabtitlediv'>
                        <h1 className='bodytitle'>living</h1>
                        <p className='titlepara'>
                            Ravet is where Pune's future is unfolding.
                            Tucked between the Pune-Mumbai Expressway and the Katraj-Dehu Bypass, this rapidly developing suburban neighbourhood connects you to wherever you want to be without the usual hassle. It owes its incredible connectivity to the old and new Mumbai highways, the Aundh-Ravet BRTS road, and Akurdi Railway Station. Top schools, business hubs, entertainment enclaves, healthcare facilities and other essentials are all within close proximity. This isn't just a convenient location, but a smart one.
                        </p>
                    </div>
                </div>
            </div>
            <Map />
            <div className='titlediv'>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
                        <h1 className='bodytitle'>From the trusted</h1>
                        <div className='line' style={{ width: '30%' }}></div>
                    </div>
                    <div className='tabtitlediv'>
                        <img src={nmlogo} />
                        <p className='titlepara'>
                            Nirman Greens is a dynamic force in Pune's
                            real estate sector with 30+ years of expertise. With 15 million square feet delivered and even more in the pipeline, every project they undertake is a testament to masterful craftsmanship and a relentless pursuit for excellence. Driven by innovation and an eye for detail, they remain steadfast in their commitment to conceiving spaces that adapt to nature and evolve with time.
                        </p>
                    </div>
                </div>
            </div>
            <Distances />
        </div>
    )
}

export default Body