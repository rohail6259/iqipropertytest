
import React, { useState, useEffect } from "react";
import Search from "../Components/Search";
import Rental from '../Components/Rental';
import Sale from "../Components/Sale";
import { rentalProperties, saleProperties } from "../Service/apiData";

const Home = () => {
    const [propertyType, setPropertyType] = useState({
        rent: true,
        buy: false,
    });
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        setSearchData(propertyType.rent ? rentalProperties : saleProperties);
    }, [propertyType.rent]);
    return (
        <>
            <div className="vertical-gap"></div>
            <Search
                propertyType={propertyType}
                setPropertyType={setPropertyType}
                setSearchData={setSearchData}
            />
            <div className="vertical-gap"></div>
            {propertyType.rent ? (
                <Rental data={searchData} />
            ) : (
                <Sale data={searchData} />
            )}
            <div className="vertical-gap"></div>
        </>
    );
};

export default Home;
