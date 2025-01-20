import useAllProperties from "@/components/hooks/PlainProperties"; //useAllProperties hook
import useProperties from "@/components/hooks/PropertiesHook"; //useProperties hook

import { Property } from "@/components/hooks/Property"; //Property interface
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PropertiesList: React.FC = () => {
  const router = useRouter();
  const [message, setMessage] = useState<string>("kabum shalakaka");
  const [page, setPage] = useState(1);
  const limit = 10;
  const {
    data: properties,
    isLoading: propertiesLoading,
    isError: propertiesError,
  } = useProperties(page, limit);

  const { data: allProperties } = useAllProperties();
  const [filteredProperties, setFilteredProperties] = useState([]);

  const searchedName = useRef<HTMLInputElement>(null);
  const searchedLocation = useRef<HTMLInputElement>(null);
  const searchedBedroom = useRef<HTMLInputElement>(null);

  const divRef = useRef<HTMLDivElement>(null);

  //this are used to show when property is loading
  const [propertyLoadingName, setPropertyLoadingName] = useState<string>("");
  const [aPropertyIsLoading, setAPropertyIsLoading] = useState<boolean>(false);

  const handleAPropertyLoading = (name: string) => {
    setAPropertyIsLoading(true);
    setPropertyLoadingName(`Loading ${name}...`);
  };

  useEffect(() => {
    if (properties) {
      setFilteredProperties(properties.properties);
    }
    // return () => {
    //   aPropertyIsLoading = false;
    //   propertyLoadingName = "Loading property...";
    //   showLoader = "hide";
    // };
  }, [properties]);

  const handleNextPage = () => {
    clearSearch();
    setPage((prevPage) => prevPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
    divRef.current?.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  };
  const handlePreviousPage = () => {
    clearSearch();
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
    divRef.current?.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  };

  //search mechanisms
  const handleInputChange = () => {
    handleFilter();
  };
  const handleFilter = () => {
    const message = document.getElementById("message");

    // Extract the search terms
    const locationTerm = searchedLocation.current?.value?.toLowerCase() || "";
    const nameTerm = searchedName.current?.value?.toLowerCase() || "";
    const bedroomTerm = searchedBedroom.current?.value;

    if (!locationTerm && !nameTerm && !bedroomTerm) {
      clearSearch();
    }

    // Convert bedroomTerm to a number if present
    const bedroomNumber = bedroomTerm ? parseInt(bedroomTerm, 10) : NaN;

    // Filter properties based on the provided terms
    const filtered = allProperties.filter((property: Property) => {
      const matchesLocation = locationTerm
        ? property.city.toLowerCase().includes(locationTerm)
        : true;
      const matchesName = nameTerm
        ? property.name.toLowerCase().includes(nameTerm)
        : true;
      const matchesBedrooms = !isNaN(bedroomNumber)
        ? property.bedrooms === bedroomNumber
        : true;

      return matchesLocation && matchesName && matchesBedrooms;
    });

    if (filtered.length > 0) {
      setFilteredProperties(filtered);
      message?.classList.add("hide");
    } else {
      const filterMessage = `
        Cannot find properties matching the provided filters:
        ${locationTerm ? `Location: "${locationTerm}" ` : ""}
        ${nameTerm ? `Name: "${nameTerm}" ` : ""}
        ${!isNaN(bedroomNumber) ? `Bedrooms: "${bedroomTerm}" ` : ""}
      `;
      setMessage(filterMessage.trim());
      message?.classList.remove("hide");
      setFilteredProperties(allProperties); // Reset to all properties if none match
    }
  };

  const clearSearch = () => {
    const message = document.getElementById("message");
    if (searchedName.current) {
      searchedName.current.value = "";
    }
    if (searchedLocation.current) {
      searchedLocation.current.value = "";
    }
    if (searchedBedroom.current) {
      searchedBedroom.current.value = "";
    }
    setMessage("");
    message?.classList.remove("hide");
    setFilteredProperties(properties.properties);
  };

  return (
    <div className="w-screen h-max flex lg:flex-row flex-col justify-items-start items-start gap-5 bg-background text-foreground">
      <div className="filter-side lg:w-1/5 lg:h-[calc(90vh)] w-full h-max flex flex-col justify-start items-start gap-5 p-2">
        <div className="w-full h-max flex flex-row justify-start items-center">
          <h1 className="capitalize font-semi-bold font-heading tracking-wider py-2">
            Filter Properties:{" "}
          </h1>
        </div>
        <div className="by-name w-full h-max flex flex-row justify-start items-center">
          <input
            placeholder="search by name.."
            type="text"
            id="name"
            ref={searchedName}
            onChange={handleInputChange}
            className="w-full h-10 pl-5 rounded-full bg-input text-foreground font-body font-extralight tracking-wide text-sm sm:text-base"
          />
        </div>
        <div className="by-location w-full h-max flex flex-row justify-start items-center">
          <input
            placeholder="search by location..."
            type="text"
            id="location"
            ref={searchedLocation}
            onChange={handleInputChange}
            className="w-full h-10 pl-5 rounded-full bg-input text-foreground font-body font-extralight tracking-wide text-sm sm:text-base"
          />
        </div>
        <div className="by-bedroom w-full h-max flex flex-row justify-start items-center">
          <input
            placeholder="search by bedrooms..."
            type="number"
            id="bedrooms"
            ref={searchedBedroom}
            onChange={handleInputChange}
            className="w-full h-10 pl-5 rounded-full bg-input text-foreground font-body font-extralight tracking-wide text-sm sm:text-base"
          />
        </div>
        <div>
          <p id="message" className="message hide text-red-500 uppercase">
            {message}
          </p>
        </div>
        <div className="clear-search w-full h-max flex flex-row justify-start items-center">
          <button
            onClick={clearSearch}
            className="clear-search-button text-sm bg-header font-body tracking-wide uppercase shadow-md py-3 px-2 rounded-md"
          >
            Clear Search
          </button>{" "}
        </div>
        <div className="pagination w-full h-max flex flex-row justify-between items-center">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="pagination-button text-sm bg-header font-body tracking-wide uppercase shadow-md py-3 px-2 rounded-md"
          >
            Previous Page
          </button>
          {filteredProperties.length > 0 ? (
            <button
              onClick={handleNextPage}
              className="pagination-button text-sm bg-header font-body tracking-wide uppercase shadow-md py-3 px-2 rounded-md"
            >
              Next Page
            </button>
          ) : (
            ""
          )}
        </div>
        <div
          className={`property-loader w-full h-max mt-28 ${
            aPropertyIsLoading ? "" : "hide"
          }`}
        >
          <LoadingSpinner message={`${propertyLoadingName}`} />
        </div>
      </div>

      <div
        className="properties-side h-[calc(90vh)] overflow-y-auto scrollbar-none lg:w-4/5 w-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-5"
        ref={divRef}
      >
        {properties ? (
          filteredProperties.length > 0 ? (
            filteredProperties.map((property: Property, index: number) => (
              <div
                key={index}
                className="property-card flex flex-col w-full h-full bg-card text-foreground rounded-lg   shadow-xl pb-2 "
              >
                <div className="top w-full relative h-[calc(25vh)] overflow-hidden">
                  <div
                    className="w-full h-full overflow-hidden"
                    style={{ borderRadius: "10px 10px 0 0" }}
                  >
                    <Image
                      src={`${property.imagePaths[0]}`}
                      alt="property main image"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    ></Image>
                  </div>
                  <div className="availability w-full h-max flex flex-row justify-end absolute top-0 right-0 p-2">
                    <p
                      className={` py-2 rounded-full shadow-md px-5 text-white ${
                        property.availabilityStatus.toLocaleLowerCase() ===
                        "sold"
                          ? "bg-red-400"
                          : "bg-green-400"
                      }`}
                    >
                      {property.availabilityStatus}
                    </p>
                  </div>
                </div>
                <div className="information w-full h-max px-2 py-1 flex flex-col justify-start items-start gap-2">
                  <div className="name w-full h-max flex flex-row justify-start items-center mb-3">
                    <p className="font-semibold font-body text-2xl tracking-wider">
                      {property.name}
                    </p>
                  </div>
                  <div className="location w-full grid grid-cols-2 gap-2 border-b border-t border-background py-1">
                    <p className="font-bold font-heading">
                      Location: {property.city}
                    </p>
                    <p className="font-bold font-heading">
                      Address: {property.exactAddress}
                    </p>
                  </div>
                  <div className="size w-full grid grid-cols-3 gap-2 border-b  border-background pb-1 text-sm">
                    <p className="font-bold font-heading">
                      Bedrooms: {property.bedrooms}
                    </p>
                    <p className="font-bold font-heading">
                      Bathrooms: {property.bathrooms}
                    </p>
                    <p className="font-bold font-heading">{property.size}</p>
                  </div>
                  <div className="desc w-full h-max flex flex-col justify-start items-start">
                    <p className="font-extralight font-body text-sm">
                      {property.description}
                    </p>
                  </div>
                  <div className="more w-full h-max grid grid-cols-2 gap-2 place-items-center mt-4">
                    <Link
                      href={`/properties/${property.name}`}
                      className="w-full h-max py-2 bg-foreground text-background  text-sm uppercase tracking-wide flex flex-row justify-center items-center rounded-md"
                    >
                      Inquire Agency
                    </Link>
                    <button
                      onClick={() => {
                        handleAPropertyLoading(property.name);
                        router.push(`/properties/${property._id}`);
                      }}
                      disabled={aPropertyIsLoading}
                      className="w-full h-max py-2 border-2 border-foreground text-foreground  text-sm uppercase tracking-wide flex flex-row justify-center items-center rounded-md"
                    >
                      more
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center xl:col-span-3 sm:col-span-2 col-span-1">
              <h1 className="font-bold font-body text-4xl tracking-widest">
                End!
              </h1>
              <p>Property list ended, go to previous page</p>
              <button
                onClick={handlePreviousPage}
                disabled={page === 1}
                className="pagination-button text-sm bg-header font-body tracking-wide uppercase shadow-md py-3 px-2 rounded-md"
              >
                Previous Page
              </button>
            </div>
          )
        ) : propertiesLoading ? (
          <div className="w-full h-full flex flex-col items-center justify-center xl:col-span-3 sm:col-span-2 col-span-1">
            <LoadingSpinner message="Loading properties..." />
          </div>
        ) : propertiesError ? (
          <div className="w-full h-full flex flex-col items-center justify-center xl:col-span-3 sm:col-span-2 col-span-1">
            <p className="font-bold font-body text-4xl tracking-widest text-red-500">
              Server ran to an error while fetching properties !!!
            </p>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center xl:col-span-3 sm:col-span-2 col-span-1">
            <p className="font-bold font-body text-4xl tracking-widest text-red-500">
              Did not initiate fetch !!!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesList;
