import React, { useState, useEffect } from 'react';
import { BiSearch, BiCurrentLocation } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { BiRightArrow } from 'react-icons/bi';
import ahmedabad from "../Asset/Brands-Logos/ahmedabad.png"
import banglore from "../Asset/Brands-Logos/bangalore.png"
import chandigarh from "../Asset/Brands-Logos/chandigarh.png"
import chennai from "../Asset/Brands-Logos/chennai.png"
import delhiNCR from "../Asset/Brands-Logos/delhi-ncr.png"
import gurgaon from "../Asset/Brands-Logos/gurgaon.png"
import hyderabad from "../Asset/Brands-Logos/hyderabad.png"
import jaipur from "../Asset/Brands-Logos/jaipur.png"
import mumbai from "../Asset/Brands-Logos/mumbai.png"
import newDelhi from "../Asset/Brands-Logos/new-delhi.png"
import noida from "../Asset/Brands-Logos/noida.png"
import pune from "../Asset/Brands-Logos/pune.png"


const LocationSelector = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [userLocation, setUserLocation] = useState(null);
    const [locationError, setLocationError] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(false);
    const [cityFilter, setCityFilter] = useState(null);


    const cities = [
        { name: 'Ahmedabad', icon: <img src={ahmedabad} alt=""/> },
        { name: 'Bangalore', icon: <img src={banglore} alt=""/> },
        { name: 'Chandigarh', icon: <img src={chandigarh} alt=""/> },
        { name: 'Chennai', icon: <img src={chennai} alt=""/> },
        { name: 'Delhi NCR', icon: <img src={delhiNCR} alt=""/> },
        { name: 'Gurgaon', icon: <img src={gurgaon} alt=""/> },
        { name: 'Hyderabad', icon: <img src={hyderabad} alt=""/> },
        { name: 'Jaipur', icon: <img src={jaipur} alt=""/> },
        { name: 'Mumbai', icon: <img src={mumbai} alt=""/> },
        { name: 'New Delhi', icon: <img src={newDelhi} alt=""/> },
        { name: 'Noida', icon: <img src={noida} alt=""/> },
        { name: 'Pune', icon: <img src={pune} alt=""/> },
    ];
    const otherCities = [
        "a",
        "aa",
        "aaa",
        "aaaa",
        "aaaaa",
        "aaaaaa",
        "aaa",
        "aaaa",
        "aaaaa",
        "aaa",
        "aaaaa",
        "aaaaaa",
        "aaaaa",
        "aaaaaa",
        "aaaaaaa",
        "aaaaaaaa",
        'Bansi',
        'Banswara',
        'Bantwal',
        'Bapatla',
        'Barabanki',
        'Baramati',
        'Baramulla',
        'Baran',
        'Barara',
        'Bansur', 'Bari Sadri', 'Barh', 'Barkagaon', 'Barkhera',
        'Barmer', 'Barnala', 'Barpeta', 'Barrackpore', 'Barshi',
        'Basavakalyan', 'Basti', 'Batala', 'Bathinda', 'Bawal',
    ]

    const handleCityClick = (city) => {
        setSelectedCity(city);
    };

    const handleInputChange = (e) => {
        setSelectedCity(e.target.value);
        if(e.target.value) {
            setCityFilter(e.target.value[0].toUpperCase())
        }
        else{
            setCityFilter(null)
        }
    }

    const handleDetectLocation = async () => {
        setLoadingLocation(true);
        setLocationError(null);

        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser.");
            setLoadingLocation(false);
            return;
        }

        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const { latitude, longitude } = position.coords;

            console.log(latitude, longitude);
            const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
             if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json();


           if (data.city) {
                setSelectedCity(data.city);
            } else if (data.locality) {
                setSelectedCity(data.locality)
           }
            setUserLocation({latitude,longitude});

        } catch (error) {
             console.log(error)
            setLocationError("Unable to retrieve your location.");
        } finally {
            setLoadingLocation(false);
        }
    };


    const filteredOtherCities = cityFilter
        ? otherCities.filter(city => city[0].toUpperCase() === cityFilter)
        : otherCities;


    return (
        <div className="bg-[white] rounded-3xl px-[15px] md:px-[60px] py-[20px] md:py-[40px] shadow-[2px_2px_8px_rgba(0,0,0,.15)] drop-shadow-sm relative w-[360px] md:w-[720px] text-[#24272C]">
            <h2 className="text-[20px] font-semibold mb-2 ">What is your location?</h2>
            <p className="text-[12px] text-[#66686B] mb-4">
                In which city are you looking to buy your car?
            </p>
            <div className='flex max-md:flex-col gap-4'>
                <div className="relative md:w-[65%]">
                    <div className="absolute inset-y-0 left-0 top-2 md:-top-3 flex items-center pl-3 pointer-events-none">
                        <BiSearch size="18" className="text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Select your City"
                        value={selectedCity}
                        onChange={handleInputChange}
                        className=" rounded-md py-2 pl-10 pr-3 w-full bg-[#F2F3F7] font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    className="md:w-[34%] text-[#3281D1] font-semibold rounded-md py-2 px-4 flex items-center border border-[#F2F3F7] gap-1 mb-4 disabled:cursor-not-allowed"
                    onClick={handleDetectLocation}
                    disabled={loadingLocation}
                >
                    <BiCurrentLocation size="1.2em" className="text-[#3281D1]" />
                    {loadingLocation ? 'Detecting...' : 'Detect my location'}
                </button>
            </div>
             {locationError && (
                 <p className="text-red-500 text-sm mb-2">{locationError}</p>
                )}

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2  mb-4">
                {cities.map((city) => (
                    <button
                        key={city.name}
                        onClick={() => handleCityClick(city.name)}
                        className={` rounded-md overflow-clip bg-[white] shadow-sm flex flex-col items-center justify-center gap-1 cursor-pointer`}
                    >
                        <div className=" ">{city.icon}</div>
                        <p className='text-[12px]'>{city.name}</p>
                    </button>
                ))}
            </div>

            <div className="flex justify-between items-center text-sm font-semibold  mb-2">
                <h3 className='text-base'>Other Cities</h3>
                <span className=" border border-[#24272C] border-opacity-10 rounded-sm px-[6px] py-[1px] bg-[#24272C] bg-opacity-10">{cityFilter || "A"}</span>
            </div>

            <div className="grid grid-cols-3 gap-1 overflow-y-auto max-h-40 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {filteredOtherCities.map((city, index) => (
                    <button
                        key={index}
                        className="py-1 rounded-sm text-[12px] md:text-[15px] text-left">
                        <span className='flex items-center gap-1 '> {city}</span>
                    </button>
                ))}
            </div>

        </div>
    );
};

export default LocationSelector;