import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg" 
            alt=""
            />
            <div className="home_row">
            <Product id={1} title="Walker's Game Ear Razor Slim Electronic Muff" price={11.50} rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41lNRxW2IhL._AC_US160_.jpg"
         /> 
            <Product id={2} title="Flashlights, LED Tactical Flashlight S1000 - High Lumen, 5 Modes, Zoomable, Water Resistant, Handheld Light - Best Camping/Outdoor/Hiking/Flashlights/Gift-Giving/Emergency(Batteries Not Included)" price={17.50} rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71y3z7GQQRL._AC_SL1500_.jpg"
         /> 
            </div>

            <div className="home_row">
            <Product id={3} title="Swift SW380T 40X-2500X Magnification, Siedentopf Head, Research-Grade Trinocular Compound Lab Microscope with Wide-Field 10X/25X Eyepieces, Mechanical Stage, Ultra-Precise Focusing, Camera-Compatible" price={20.00} rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71zaMfMXtNL._AC_SL1500_.jpg"
         /> 
            <Product id={4} title="Wireless Rechargeable Battery Powered WiFi Camera, Home Security Camera, Night Vision, Indoor/Outdoor, 1080P Video with Motion Detection, 2-Way Audio, Waterproof, compatible with Cloud Storage/SD Slot" price={30.50} rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51f5gfmmkjL._AC_SL1200_.jpg"
         /> 
              <Product id={5} title="Jeecoo V22 Gaming Headset for PC- Deep Bass 3D Surround Sound- USB Headphones with Noise Cancelling Microphone RGB Lights Plug & Play for Laptops Computers" price={10.00} rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51CPDIFMf4L._AC_SL1000_.jpg" 
         /> 
            </div>

            <div className="home_row">
            <Product id={6} title="LG 65SM8100AUA Alexa Built-in Nano 8 Series 65 4K Ultra HD Smart LED NanoCell TV (2019)" price={20.50} rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/917oBlE6xbL._AC_SL1500_.jpg"
         /> 
                </div>
      
        </div>
    )
}

export default Home
