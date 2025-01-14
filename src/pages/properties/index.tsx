import useProperties from "@/components/hooks/PropertiesHook"; // Import useProperties hook
import { Property } from "@/components/hooks/Property"; // Import Property interface
import React, { useState } from "react";

interface PropertiesListProps {
  properties: Property[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  isError: boolean;
  error: any;
}

const PropertiesList: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 10; // Number of properties per page
  const {
    data: properties,
    isLoading,
    isError,
    error,
  } = useProperties(page, limit);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () =>
    setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div>
      <div className="property-list">
        {properties?.map((property: Property) => (
          <div key={property.exactAddress} className="property-card">
            <h2>{property.name}</h2>
            <p>{property.description}</p>
            <p>Location: {property.city}</p>
            <p>Address: {property.exactAddress}</p>
            <p>Availability: {property.availabilityStatus}</p>
            <p>Size: {property.size}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <div className="images">
              {property.imagePaths.map((image, index) => (
                <img key={index} src={image} alt={`property-image-${index}`} />
              ))}
            </div>
          </div>
        ))}
      </div>

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
  );
};

export default PropertiesList;
