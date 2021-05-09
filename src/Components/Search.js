import React, { useState } from "react";
import { rentalProperties, saleProperties } from "../Service/apiData";

const Search = ({ propertyType, setPropertyType, setSearchData }) => {
    const [room, setRooms] = useState({
        studio: false,
        one: false,
        two: false,
        three: false,
        four: false,
    });

    const searchBoxFilter = (e) => {
        let value = e.target.value.toLowerCase();
        let filteredData = [];
        if (propertyType.rent) {
            filteredData = rentalProperties.filter((property) => {
                return property.address.toLowerCase().search(value) !== -1;
            });
        } else {
            filteredData = saleProperties.filter((property) => {
                return property.address.toLowerCase().search(value) !== -1;
            });
        }

        setSearchData(filteredData);
    };
    const priceRangeBoxFilter = (e) => {
        let value = e.target.value;
        let filteredData = [];

        if (propertyType.rent) {
            filteredData = rentalProperties.filter(
                (property) => property.price <= Number(value)
            );
            setSearchData(
                filteredData.length > 0 ? filteredData : rentalProperties
            );
        } else {
            filteredData = saleProperties.filter(
                (property) => property.price <= Number(value)
            );
            setSearchData(
                filteredData.length > 0 ? filteredData : saleProperties
            );
        }
    };
    const roomFilter = (e) => {
        const value = e.currentTarget.value;
        setRooms({
            studio: value === 0 ? true : false,
            one: value === 1 ? true : false,
            two: value === 2 ? true : false,
            three: value === 3 ? true : false,
            four: value === 4 ? true : false,
        });
        let filteredData = [];
        if (propertyType.rent)
            filteredData = rentalProperties.filter(
                (property) => property.bedrooms === value
            );
        else {
            filteredData = saleProperties.filter(
                (property) => property.bedrooms === value
            );
        }
        setSearchData(filteredData);
    };
    const onClickPropertyTypeButton = (type) => {
        setPropertyType({
            rent: type === "rent" ? true : false,
            buy: type === "sale" ? true : false,
        });
    };

    return (
        <section className="search">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="mb-3">
                            Apartments for {propertyType.rent ? "Rent" : "Sale"}
                        </h1>
                        <button
                            className={propertyType.rent ? "active" : ""}
                            onClick={() => onClickPropertyTypeButton("rent")}
                        >
                            Rent
                        </button>
                        <button
                            className={propertyType.buy ? "active" : ""}
                            onClick={() => onClickPropertyTypeButton("sale")}
                        >
                            Buy
                        </button>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 px-md-2 px-lg-3 mb-2 mb-xl-0">
                        <div className="search-filter keyword px-3">
                            <input
                                placeholder="Neighborhood"
                                type="text"
                                onChange={(e) => searchBoxFilter(e)}
                            />
                            <svg
                                className="neighbourhood-searchbar-input-icon"
                                width="20px"
                                height="20px"
                                viewBox="0 0 16 16"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g
                                        id="Sale"
                                        transform="translate(-516.000000, -144.000000)"
                                        fill="#A5A3B8"
                                        fillRule="nonzero"
                                    >
                                        <g
                                            id="noun_Search_705166"
                                            transform="translate(516.000000, 144.000000)"
                                        >
                                            <path
                                                d="M15.9244214,14.5136202 L12.699733,11.2889319 C13.8082197,9.82774499 14.3120772,7.96347205 14.0097627,5.94804184 C13.5562909,2.87451078 11.0370031,0.455994532 7.96347205,0.0529084908 C3.37836833,-0.501334816 -0.501334816,3.37836833 0.0529084908,7.96347205 C0.455994532,11.0370031 2.87451078,13.5562909 5.94804184,14.0097627 C7.96347205,14.3120772 9.82774499,13.7578339 11.2889319,12.699733 L14.5136202,15.9244214 C14.6143917,16.0251929 14.765549,16.0251929 14.8663205,15.9244214 L15.9244214,14.8663205 C16.0251929,14.765549 16.0251929,14.6143917 15.9244214,14.5136202 Z M7.05652846,12.095104 C4.28531192,12.095104 2.01795294,9.82774499 2.01795294,7.05652846 C2.01795294,4.28531192 4.28531192,2.01795294 7.05652846,2.01795294 C9.82774499,2.01795294 12.095104,4.28531192 12.095104,7.05652846 C12.095104,9.82774499 9.82774499,12.095104 7.05652846,12.095104 Z"
                                                id="Shape"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 px-md-2 px-lg-3 mb-2 mb-xl-0">
                        <div className="search-filter price px-3">
                            <input
                                placeholder="$ Minimum Price"
                                min="0"
                                type="number"
                                onChange={(e) => priceRangeBoxFilter(e)}
                                onBlur={(e) => e.preventDefault()}
                                onFocus={(e) => e.preventDefault()}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 px-md-2 px-lg-3 mb-2 mb-xl-0">
                        <div className="search-filter rooms px-3">
                            <ul className="list-unstyled d-flex align-items-center justify-content-around w-100 mb-0">
                                <li
                                    value="0"
                                    onClick={(e) => roomFilter(e)}
                                    className={room.studio ? "active" : ""}
                                >
                                    <span>Studio</span>
                                </li>
                                <li
                                    value="1"
                                    onClick={(e) => roomFilter(e)}
                                    className={room.one ? "active" : ""}
                                >
                                    <span>1</span>
                                </li>
                                <li
                                    value="2"
                                    onClick={(e) => roomFilter(e)}
                                    className={room.two ? "active" : ""}
                                >
                                    <span>2</span>
                                </li>
                                <li
                                    value="3"
                                    onClick={(e) => roomFilter(e)}
                                    className={room.three ? "active" : ""}
                                >
                                    <span>3</span>
                                </li>
                                <li
                                    value="4"
                                    onClick={(e) => roomFilter(e)}
                                    className={room.four ? "active" : ""}
                                >
                                    <span>4+</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;
