import React from "react";
import GoogleMapReact from "google-map-react";
import { rentalProperties, saleProperties } from "../Service/apiData";

const defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 16,
};

const Details = ({ match }) => {
    const {
        params: { id },
    } = match;
    const type = localStorage.getItem("type");

    const getTypeData = (type) => {
        console.log(type);
        if (type === "rent") return rentalProperties;
        if (type === "sale") return saleProperties;
    };

    return (
        <section className="details-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="mt-3 d-flex align-items-start justify-content-between">
                            <h3 className="mb-0 price">
                                <span>
                                    <sup>$</sup>
                                    {getTypeData(type)[id].price}
                                </span>
                                <span>/per month</span>
                            </h3>
                            <p className="mb-0 info d-flex">
                                <span>
                                    <svg
                                        className="mr-1"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 16 14"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="Symbols"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                            opacity="0.799897693"
                                        >
                                            <g
                                                id="Group-3"
                                                transform="translate(-266.000000, -269.000000)"
                                                fill="#817F96"
                                            >
                                                <g
                                                    id="Group-2"
                                                    transform="translate(20.000000, 245.000000)"
                                                >
                                                    <g
                                                        id="Group-4"
                                                        transform="translate(246.000000, 0.000000)"
                                                    >
                                                        <g
                                                            id="Artboard-Copy"
                                                            transform="translate(0.000000, 23.000000)"
                                                        >
                                                            <g
                                                                id="2oun_Bed_1578249"
                                                                transform="translate(0.000000, 1.760000)"
                                                            >
                                                                <path
                                                                    d="M15.4666667,6.016 L15.4666667,3.2 C15.4666667,1.4326888 14.0339779,0 12.2666667,0 L3.73333333,0 C1.96602213,0 0.533333333,1.4326888 0.533333333,3.2 L0.533333333,6.016 C0.205285828,6.20538912 0.00228635867,6.5545482 0,6.93333333 L0,9.6 C0.00190099505,10.2764026 0.428944695,10.8785342 1.06666667,11.104 L1.06666667,12.2666667 C1.06666667,12.5612185 1.30544813,12.8 1.6,12.8 C1.89455187,12.8 2.13333333,12.5612185 2.13333333,12.2666667 L2.13333333,11.2 L13.8666667,11.2 L13.8666667,12.2666667 C13.8666667,12.5612185 14.1054481,12.8 14.4,12.8 C14.6945519,12.8 14.9333333,12.5612185 14.9333333,12.2666667 L14.9333333,11.104 C15.5710553,10.8785342 15.998099,10.2764026 16,9.6 L16,6.93333333 C15.9977136,6.5545482 15.7947142,6.20538912 15.4666667,6.016 Z M3.73333333,1.06666667 L12.2666667,1.06666667 C13.4448741,1.06666667 14.4,2.02179253 14.4,3.2 L14.4,5.86666667 L13.8666667,5.86666667 L13.8666667,5.33333333 C13.8666667,4.44967773 13.1503223,3.73333333 12.2666667,3.73333333 L10.1333333,3.73333333 C9.24967773,3.73333333 8.53333333,4.44967773 8.53333333,5.33333333 L8.53333333,5.86666667 L7.46666667,5.86666667 L7.46666667,5.33333333 C7.46666667,4.44967773 6.75032227,3.73333333 5.86666667,3.73333333 L3.73333333,3.73333333 C2.84967773,3.73333333 2.13333333,4.44967773 2.13333333,5.33333333 L2.13333333,5.86666667 L1.6,5.86666667 L1.6,3.2 C1.6,2.02179253 2.55512587,1.06666667 3.73333333,1.06666667 Z M12.8,5.86666667 L9.6,5.86666667 L9.6,5.33333333 C9.6,5.03878147 9.83878147,4.8 10.1333333,4.8 L12.2666667,4.8 C12.5612185,4.8 12.8,5.03878147 12.8,5.33333333 L12.8,5.86666667 Z M6.4,5.86666667 L3.2,5.86666667 L3.2,5.33333333 C3.2,5.03878147 3.43878147,4.8 3.73333333,4.8 L5.86666667,4.8 C6.16121853,4.8 6.4,5.03878147 6.4,5.33333333 L6.4,5.86666667 Z M14.9333333,9.6 C14.9333333,9.89455187 14.6945519,10.1333333 14.4,10.1333333 L1.6,10.1333333 C1.30544813,10.1333333 1.06666667,9.89455187 1.06666667,9.6 L1.06666667,6.93333333 L14.9333333,6.93333333 L14.9333333,9.6 Z"
                                                                    id="Shape"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    {getTypeData(type)[id].bedrooms} bd
                                </span>
                                <span>
                                    <svg
                                        className="mx-2"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="Symbols"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                            opacity="0.799897693"
                                        >
                                            <g
                                                id="Group-3"
                                                transform="translate(-266.000000, -247.000000)"
                                                fill="#817F96"
                                            >
                                                <g
                                                    id="Group-2"
                                                    transform="translate(20.000000, 245.000000)"
                                                >
                                                    <g
                                                        id="Group-4"
                                                        transform="translate(246.000000, 0.000000)"
                                                    >
                                                        <g
                                                            id="Artboard"
                                                            transform="translate(0.000000, 2.000000)"
                                                        >
                                                            <g
                                                                id="1noun_bathtub_1563403"
                                                                transform="translate(0.480000, 0.480000)"
                                                            >
                                                                <path
                                                                    d="M0.626666667,8.77333333 L1.25333333,8.77333333 L1.25333333,10.6533333 C1.25521903,11.8974925 1.99304066,13.0226705 3.13333333,13.5203333 L3.13333333,14.4133333 C3.13333333,14.7594318 3.41390156,15.04 3.76,15.04 C4.10609844,15.04 4.38666667,14.7594318 4.38666667,14.4133333 L4.38666667,13.7866667 L10.6533333,13.7866667 L10.6533333,14.4133333 C10.6533333,14.7594318 10.9339016,15.04 11.28,15.04 C11.6260984,15.04 11.9066667,14.7594318 11.9066667,14.4133333 L11.9066667,13.5203333 C13.0469593,13.0226705 13.784781,11.8974925 13.7866667,10.6533333 L13.7866667,8.77333333 L14.4133333,8.77333333 C14.7594318,8.77333333 15.04,8.49276511 15.04,8.14666667 C15.04,7.80056822 14.7594318,7.52 14.4133333,7.52 L5.01333333,7.52 L5.01333333,1.88 C5.01333333,1.53390156 5.29390156,1.25333333 5.64,1.25333333 L8.14666667,1.25333333 C8.49276511,1.25333333 8.77333333,1.53390156 8.77333333,1.88 L8.77333333,2.56933333 C7.31424574,2.86716831 6.26636273,4.150825 6.26666667,5.64 C6.26666667,5.98609844 6.54723489,6.26666667 6.89333333,6.26666667 L11.9066667,6.26666667 C12.2527651,6.26666667 12.5333333,5.98609844 12.5333333,5.64 C12.5336373,4.150825 11.4857543,2.86716831 10.0266667,2.56933333 L10.0266667,1.88 C10.0266667,0.84170467 9.184962,6.95739762e-17 8.14666667,0 L5.64,0 C4.60170467,-6.95739762e-17 3.76,0.84170467 3.76,1.88 L3.76,7.52 L0.626666667,7.52 C0.280568223,7.52 6.95739762e-17,7.80056822 0,8.14666667 C-3.47869881e-17,8.49276511 0.280568223,8.77333333 0.626666667,8.77333333 Z M11.1719,5.01333333 L7.6281,5.01333333 C7.89415257,4.26303432 8.60392678,3.76164089 9.4,3.76164089 C10.1960732,3.76164089 10.9058474,4.26303432 11.1719,5.01333333 Z M12.5333333,8.77333333 L12.5333333,10.6533333 C12.5333333,11.6916287 11.6916287,12.5333333 10.6533333,12.5333333 L4.38666667,12.5333333 C3.34837134,12.5333333 2.50666667,11.6916287 2.50666667,10.6533333 L2.50666667,8.77333333 L12.5333333,8.77333333 Z"
                                                                    id="Shape"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    {getTypeData(type)[id].bathrooms} ba
                                </span>
                            </p>
                        </div>
                        <hr />
                        <h2 className="mb-4">
                            {type === "rent"
                                ? rentalProperties[id].address
                                : saleProperties[id].address}
                        </h2>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <img
                                    className="img-fluid mb-4"
                                    src={getTypeData(type)[id].thumbnail}
                                    alt="property"
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                <p>
                                    Lorem ipsum is placeholder text commonly
                                    used in the graphic, print, and publishing
                                    industries for previewing layouts and visual
                                    mockups.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Massa tincidunt dui ut ornare lectus sit
                                    amet est. Nulla facilisi cras fermentum odio
                                    eu feugiat pretium. Diam phasellus
                                    vestibulum lorem sed risus ultricies. Morbi
                                    leo urna molestie at elementum. Vitae proin
                                    sagittis nisl rhoncus. Luctus venenatis
                                    lectus magna fringilla urna porttitor
                                    rhoncus dolor. Cum sociis natoque penatibus
                                    et magnis dis parturient. Faucibus a
                                    pellentesque sit amet. Neque aliquam
                                    vestibulum morbi blandit cursus risus at.
                                </p>
                                <p>
                                    Lacus suspendisse faucibus interdum posuere
                                    lorem ipsum dolor sit amet. A diam
                                    sollicitudin tempor id eu nisl nunc mi
                                    ipsum. Viverra nibh cras pulvinar mattis
                                    nunc sed blandit libero. Urna nec tincidunt
                                    praesent semper. Amet cursus sit amet
                                    dictum. Id eu nisl nunc mi ipsum faucibus
                                    vitae aliquet. Duis tristique sollicitudin
                                    nibh sit amet commodo nulla. Arcu non
                                    sodales neque sodales. A diam sollicitudin
                                    tempor id. Duis ultricies lacus sed turpis.
                                    Sed libero enim sed faucibus turpis. Eu
                                    consequat ac felis donec et odio
                                    pellentesque. Nullam non nisi est sit amet
                                    facilisis. At augue eget arcu dictum. Mollis
                                    nunc sed id semper risus in hendrerit
                                    gravida. Non nisi est sit amet facilisis
                                    magna. Viverra nibh cras pulvinar mattis.
                                    Est placerat in egestas erat. In
                                    pellentesque massa placerat duis ultricies
                                    lacus sed. Mi eget mauris pharetra et. Cras
                                    tincidunt lobortis feugiat vivamus at augue
                                    eget. Risus viverra adipiscing at in tellus
                                    integer feugiat. Nibh tellus molestie nunc
                                    non blandit. Quis hendrerit dolor magna eget
                                    est lorem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <GoogleMapReact
                            style={{ height: "100vh" }}
                            bootstrapURLKeys={{
                                key: `${process.env.REACT_APP_MAP_KEY}`,
                                language: "en",
                            }}
                            defaultCenter={defaultProps.center}
                            center={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
