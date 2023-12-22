import React, { useState } from 'react'
import './Volunteer.css'
import Navbar from '../navbar/Navbar'

const Volunteer = () => {
    const [selectedProvince, setSelectedProvince] = useState(' ');
    const [selectedDistrict, setSelectedDistrict] = useState(' ');

    const provinceData = ['Province 1', 'Province 2', 'Province 3'];
    const districtData = ['District 1', 'District 2', 'District 3'];

    const handleProvinceChange = (e) => {
        setSelectedProvince(e.target.value);
    }
    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    }

    return (
        <>
            <Navbar />
            <div className="cardContainer">
                <div className="cardTitle"><i class="fa-solid fa-user-plus"></i>  Sign up as <span>Volunteers</span></div>
                <div className="underLine"></div>
                <div className="cardPersonal"><i class="fa-solid fa-user"></i>   Personal Information</div>
                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className="input">
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="input">
                        <input type="password" placeholder='Confirm Password' />
                    </div>
                    <div className="input">
                        <input type="text" placeholder='First Name' />
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div className="input">
                        <input type="text" placeholder='About Yourself' />
                    </div>
                    <div className="input">
                        <input type="text" placeholder='National Identity Number' />
                    </div>
                    <div className="input">
                        <input type="number" placeholder='Mobile Number' />
                    </div>
                </div>
                <div className="cardAddress"><i class="fa-solid fa-map-location"></i>   Address Information</div>
                <div className="dropdowns">
                    <div className="provinceDropdown">
                        <select name="province" id="province" value={selectedProvince} onChange={handleProvinceChange}>
                            {/* <option value="">Select a province:</option> */}
                            {provinceData.map((province, index) => (
                                <option key={index} value={province}>
                                    {province}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="districtDropdown">
                        <select name="district" id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                            {/* <option value="">Select a province:</option> */}
                            {districtData.map((district, index) => (
                                <option key={index} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Volunteer