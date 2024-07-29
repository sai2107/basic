import React, { useState } from 'react';
import assets from '../../assets/assets';
import './Product3.css';

const Product3 = () => {
  // State to hold the selected images
  const [selectedImages, setSelectedImages] = useState([<img src={assets.grp} alt="" key="grp"  style={{width:'900px',height:'500px'}}/>]);

  // Function to handle button click for color selection
  const handleColorSelection = (color) => {
    if (color === 'black') {
        setSelectedImages([
            <img src={assets.black} alt="" key="black" />,
            <img src={assets.blackfront} alt="" key="blackfront" />,
            <img src={assets.blackside} alt="" key="blackside" />
        ]);
    } else if (color==='blue'){
        setSelectedImages([
            <img src={assets.blueleft} alt="" key="blueleft" />,
            <img src={assets.blue} alt="" key="blue" />
        ]); 
    }else if (color==='red'){
        setSelectedImages([
            <img src={assets.redside} alt="" key="redside" />,
            <img src={assets.red} alt="" key="red" />
          ]);
    }
  };

  return (
    <div className='product1-container'>
        <div className='vehicle-div'>
            <div className='vehicle-images'>
                {selectedImages}
            </div>
            <div className='color-div'> 
            <button className='button1' onClick={() => handleColorSelection('red')}>Red</button>
            <button className='button2' onClick={() => handleColorSelection('blue')}>Blue</button>
            <button className='button3' onClick={() => handleColorSelection('black')}>Black</button>
            </div>
        </div>

        <div className="vehicle-details">
            
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Specification</th>
                            <th>Rhyno s03 lite</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Battery</td>
                            <td>1.8Kwh</td>
                        </tr>
                        <tr>
                            <td>Battery-features</td>
                            <td>LFP with
                                1500 cycles
                                Active
                                Balancing
                                Waterproof
                                (IP67)</td>
                        </tr>
                        <tr>
                            <td>Battery-warrenty</td>
                            <td>3 years</td>
                        </tr>
                        <tr>
                            <td>Charging-time</td>
                            <td>3 hours (12A)</td>
                        </tr>
                        <tr>
                            <td>Motor</td>
                            <td>1500W</td>
                        </tr>
                        <tr>
                            <td>Max Speed</td>
                            <td>55km/h</td>
                        </tr>
                        <tr>
                            <td>Warranty on
                            electronics</td>
                            <td>1 year</td>
                        </tr>
                        <tr>
                            <td>Max range
                            (@30km/h)</td>
                            <td>100 km</td>
                        </tr>
                        <tr>
                            <td>Max range
                            (@45km/h)</td>
                            <td>90 km</td>
                        </tr>
                        <tr>
                            <td>Max range
                            (@full speed)</td>
                            <td>60 km</td>
                        </tr>
                        <tr>
                            <td>Other key benefits</td>
                            <td>Fire-safe
                                Battery
                                Range
                                prediction
                                Comfortable
                                ride
                                Stable and
                                safe</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='vehicle-info'><h1>S03-LITE</h1>
            <p>Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
                </p>
                <button><a href="/prebook">Buy Now</a></button></div>
            
            
        </div>
    </div>
  );
}

export default Product3;
