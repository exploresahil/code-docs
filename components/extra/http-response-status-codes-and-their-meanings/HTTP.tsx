"use client";

import { httpResponseData } from "@/db/http";
import "./style.scss";
import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

const HTTP = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const loaderSize = 20;

  // Filtered categories based on the debounced query
  const filteredCategories = httpResponseData.status.category.map(
    (category) => {
      const filteredCodes = category.codes.filter((code) => {
        const codeString = code.code.toString(); // Convert code.code (number) to string
        return (
          codeString.includes(debouncedQuery) || // Match if code.code contains debouncedQuery
          code.title.toLowerCase().includes(debouncedQuery) // Match title
        );
      });

      return { ...category, codes: filteredCodes };
    }
  );

  // Check if there are no results across all categories
  const noResults = filteredCategories.every(
    (category) => category.codes.length === 0
  );

  return (
    <div id="Docs">
      <div className="date_time"></div>
      <h1>{httpResponseData.title}</h1>
      <p>{httpResponseData.desc}</p>

      <div className="input">
        <input
          type="text"
          placeholder="Search by Code or Title"
          value={searchQuery}
          onChange={handleSearch}
          className="search_input"
        />
        {searchQuery && searchQuery !== debouncedQuery && (
          <span>
            <RefreshCw size={loaderSize} strokeWidth={2} className="loader" />
          </span>
        )}
      </div>

      <div className="content">
        {noResults ? (
          <p className="no_results">No results found</p>
        ) : (
          filteredCategories.map((category, i) => {
            if (category.codes.length === 0) return null;

            return (
              <div key={`${category.title}-${i}`} className="category_table">
                <div className="category_title">
                  <h4>{category.title}</h4>
                  <h4>{category.desc}</h4>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Title</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.codes.map((code, j) => (
                      <tr key={`${code.code}-${j}`}>
                        <td>{code.code}</td>
                        <td>{code.title}</td>
                        <td>{code.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HTTP;
