import React, { useState } from 'react';
import './Compare.css'
import assets from '../../assets/assets';

const Compare = () => {
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
                            <th>Rhyno s03 </th>
                            <th>Rhyno s03 max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Battery</td>
                            <td>1.8Kwh</td>
                            <td>2.7Kwh</td>
                            <td>2.7Kwh</td>
                        </tr>
                        <tr>
                            <td>Battery-features</td>
                            <td>LFP with
                                1500 cycles
                                Active
                                Balancing
                                Waterproof
                                (IP67)</td>
                            <td>LFP with 1500
                                cycles
                                Active
                                Balancing
                                Waterproof
                                (IP67)
                                </td>
                            <td>LFP with 1500
                                cycles
                                Active
                                Balancing
                                Waterproof
                                (IP67)
                                </td>
                        </tr>
                        <tr>
                            <td>Battery-warrenty</td>
                            <td>3 years</td>
                            <td>3 Years</td>
                            <td>3 Years</td>
                        </tr>
                        <tr>
                            <td>Charging-time</td>
                            <td>3 hours (12A)</td>
                            <td>4 hours (12A)</td>
                            <td>4 hours (12A)</td>
                        </tr>
                        <tr>
                            <td>Motor</td>
                            <td>1500W</td>
                            <td>1500W</td>
                            <td>2000W</td>
                        </tr>
                        <tr>
                            <td>Max Speed</td>
                            <td>55km/h</td>
                            <td>55 km/h</td>
                            <td>65 km/h
                            </td>
                        </tr>
                        <tr>
                            <td>Warranty on
                            electronics</td>
                            <td>1 year</td>
                            <td>1 year</td>
                            <td>1 year</td>
                        </tr>
                        <tr>
                            <td>Max range
                            (@30km/h)</td>
                            <td>100 km</td>
                            <td>150 km</td>
                            <td>120 km</td>
                        </tr>
                        <tr>
                            <td>Max range
                            (@45km/h)</td>
                            <td>90 km</td>
                            <td>110 km</td>
                            <td>100 km</td>
                        </tr>
                        <tr>
                            <td>Max range
                            (@full speed)</td>
                            <td>60 km</td>
                            <td>90 km</td>
                            <td>80 km</td>
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
                            <td>Fire-safe
                                battery
                                Range
                                prediction
                                Comfortable
                                ride
                                Stable and
                                safe
                                </td>
                            <td>
                                Fire-safe
                                battery
                                Range
                                prediction
                                Comfortable
                                ride
                                Stable and
                                safe
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className='buy-now'>
            <button> <a href="/prebook">Buy Now</a></button>
        </div>
        
    </div>
  );
}

export default Compare;
