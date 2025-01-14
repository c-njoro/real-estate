import useAllProperties from "@/components/hooks/PlainProperties"; //useAllProperties hook
import useProperties from "@/components/hooks/PropertiesHook"; //useProperties hook

import { Property } from "@/components/hooks/Property"; //Property interface
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const PropertiesList: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const {
    data: properties,
    isLoading: propertiesLoading,
    isError: propertiesError,
    error,
  } = useProperties(page, limit);
  const {
    data: allProperties,
    isLoading: allLoading,
    isError: allError,
  } = useAllProperties();
  const [filteredProperties, setFilteredProperties] = useState([]);

  const searchedName = useRef<HTMLInputElement>(null);
  const searchedLocation = useRef<HTMLInputElement>(null);
  const searchedBedroom = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (properties) {
      setFilteredProperties(properties);
    }
  }, [properties]);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () =>
    setPage((prevPage) => Math.max(prevPage - 1, 1));

  //search mechanisms
  const handleLocationSearch = () => {
    const message = document.getElementById("message");
    const searchTerm = searchedLocation.current?.value;

    if (!searchTerm) {
      setFilteredProperties(properties);
      message?.classList.add("hide");
      return;
    } else if (!searchTerm && searchedName) {
      handleNameSearch();
      message?.classList.add("hide");
      return;
    } else if (!searchTerm && searchedBedroom) {
      handleBedroomSearch();
      message?.classList.add("hide");
      return;
    }

    if (filteredProperties.length < 1) {
      console.log("No products rn");

      return;
    }

    if (searchedName.current) {
      searchedName.current.value = "";
    }
    if (searchedBedroom.current) {
      searchedBedroom.current.value = ""; // Only assign if current exists
    }

    const searchedData = allProperties.filter((pr: Property) =>
      pr.city.toLowerCase().includes(searchTerm)
    );
    if (searchedData.length > 0) {
      setFilteredProperties(searchedData);
      message?.classList.add("hide");
      return;
    }
    message?.classList.remove("hide");
    setFilteredProperties(properties);
  };
  const handleNameSearch = () => {
    const message = document.getElementById("message");
    const searchTerm = searchedName.current?.value;

    if (!searchTerm) {
      setFilteredProperties(properties);
      message?.classList.add("hide");
      return;
    } else if (!searchTerm && searchedLocation) {
      handleLocationSearch();
      message?.classList.add("hide");
      return;
    } else if (!searchTerm && searchedBedroom) {
      handleBedroomSearch();
      message?.classList.add("hide");
      return;
    }

    if (filteredProperties.length < 1) {
      console.log("No products rn");

      return;
    }

    if (searchedLocation.current) {
      searchedLocation.current.value = ""; // Only assign if current exists
    }

    if (searchedBedroom.current) {
      searchedBedroom.current.value = ""; // Only assign if current exists
    }

    const searchedData = allProperties.filter((pr: Property) =>
      pr.name.toLowerCase().includes(searchTerm)
    );
    if (searchedData.length > 0) {
      setFilteredProperties(searchedData);
      message?.classList.add("hide");
      return;
    }
    message?.classList.remove("hide");
    setFilteredProperties(properties);
  };
  const handleBedroomSearch = () => {
    const message = document.getElementById("message");
    const searchTerm = searchedBedroom.current?.value;

    if (!searchTerm) {
      setFilteredProperties(properties);
      message?.classList.add("hide");
      return;
    } else if (!searchTerm && searchedLocation) {
      handleLocationSearch();
      message?.classList.add("hide");
      return;
    } else if (!searchTerm && searchedName) {
      handleNameSearch();
      message?.classList.add("hide");
      return;
    }

    if (filteredProperties.length < 1) {
      console.log("No products rn");

      return;
    }

    if (searchedLocation.current) {
      searchedLocation.current.value = ""; // Only assign if current exists
    }

    const searchTermNumber = searchTerm ? parseInt(searchTerm, 10) : NaN; // Convert to number

    if (!isNaN(searchTermNumber)) {
      const searchedData = allProperties.filter(
        (pr: Property) => pr.bedrooms === searchTermNumber
      );
      if (searchedData.length > 0) {
        setFilteredProperties(searchedData);
        message?.classList.add("hide");
        return;
      }
    } else {
      message?.classList.remove("hide");
      setFilteredProperties(properties);
      return;
    }
  };

  return (
    <div>
      <div className="filter-side">
        <div className="by-name">
          <input
            placeholder="search by name.."
            type="text"
            id="name"
            ref={searchedName}
            onChange={handleNameSearch}
          />
        </div>
        <div className="by-location">
          <input
            placeholder="search by location..."
            type="text"
            id="location"
            ref={searchedLocation}
            onChange={handleLocationSearch}
          />
        </div>
        <div className="by-bedroom">
          <input
            placeholder="search by bedrooms..."
            type="number"
            id="bedrooms"
            ref={searchedBedroom}
            onChange={handleBedroomSearch}
          />
        </div>
        <div>
          <p id="message" className="message hide">
            No such item
          </p>
        </div>
      </div>
      <div className="properties-side">
        {properties ? (
          filteredProperties.length > 0 ? (
            filteredProperties.map((property: Property, index: any) => (
              <div key={index} className="property-card">
                <div className="top">
                  <Image
                    src={`${property.imagePaths[0]}`}
                    alt="property main image"
                    width={500}
                    height={500}
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  ></Image>
                  <p>{property.availabilityStatus}</p>
                </div>
                <div className="information">
                  <div className="name">
                    <p>{property.name}</p>
                  </div>
                  <div className="location">
                    <p>{property.city}</p>
                    <p>{property.exactAddress}</p>
                  </div>
                  <div className="size">
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>Bathrooms: {property.bathrooms}</p>
                    <p>{property.size}</p>
                  </div>
                  <div className="desc">{property.description}</div>
                  <div className="more">
                    <Link href={`/properties/${property.name}`}>More</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>End of properties</div>
          )
        ) : propertiesLoading ? (
          <div>Loading</div>
        ) : propertiesError ? (
          <div>Error fetching properties</div>
        ) : (
          <div>Could not execute properties fetch</div>
        )}
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="pagination-button"
          >
            Previous
          </button>
          <button onClick={handleNextPage} className="pagination-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
