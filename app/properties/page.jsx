"use client";

import { useState, useEffect } from "react";
import { client } from "@libs/sanity";
import BreadCrumb from "@components/BreadCrumb";
import PropertiesCard from "@components/PropertiesCard";
import Pagination from "@components/Pagination";
import "@styles/propertieslist.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // Total count of properties
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [selectedType, setSelectedType] = useState("All");
  const itemsPerPage = 6; // Items to display per page

  // Fetch data from Sanity
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Query to get the total count of properties
        const totalCountQuery =
          selectedType === "All"
            ? `count(*[_type == "property"])`
            : `count(*[_type == "property" && propertytype->name == "${selectedType}"])`;

        const totalItemsCount = await client.fetch(totalCountQuery);

        // Paginated query for properties
        const propertiesQuery = selectedType === "All"
          ? `*[_type == "property"] | order(_createdAt desc) [${
              (currentPage - 1) * itemsPerPage
            }...${currentPage * itemsPerPage}] {
              _id,
              area,
              addressOne,
              addressTwo,
              beds,
              baths,
              price,
              "type": propertytype->name,
              "slug": slug.current,
              "status": status->name,
              garages,
              "imageUrl": images[0].asset->url
            }`
          : `*[_type == "property" && propertytype->name == "${selectedType}"] | order(_createdAt desc) [${
              (currentPage - 1) * itemsPerPage
            }...${currentPage * itemsPerPage}] {
              _id,
              area,
              addressOne,
              addressTwo,
              beds,
              baths,
              price,
              "type": propertytype->name,
              "slug": slug.current,
              "status": status->name,
              garages,
              "imageUrl": images[0].asset->url
            }`;

        const fetchedProperties = await client.fetch(propertiesQuery);

        setProperties(fetchedProperties);
        setFilteredProperties(fetchedProperties);
        setTotalItems(totalItemsCount); // Update total items count
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [currentPage, selectedType]); // Add selectedType and currentPage to dependencies

  // Handle filtering by type
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <main id="main">
      <BreadCrumb
        title="Our Properties"
        subtitle="Properties List"
        page="Properties"
      />

      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="grid-option">
                <select
                  value={selectedType}
                  onChange={handleFilterChange}
                  className="custom-select"
                >
                  <option value="All">All</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Boarding House">Boarding House</option>
                  <option value="Farm Land">Farm Land</option>
                  <option value="Houses">Houses</option>
                  <option value="Offices">Offices</option>
                  <option value="Shops">Shops</option>
                  <option value="Warehouse">Warehouse</option>
                </select>
              </div>
            </div>
            {filteredProperties && filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div className="col-md-4" key={property._id}>
                  <PropertiesCard data={property} />
                </div>
              ))
            ) : (
              <div className="col-sm-12 text-center">
                <h3 className="text-danger">No properties found</h3>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Properties;
