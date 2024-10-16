"use client";

import "./style.scss";
import { MarkdownFile } from "@/types/types";
import { ChevronDown, ChevronRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import useResponsive from "@/hooks/useResponsive";
import { Suspense } from "react";

const Nav = ({ data }: { data: MarkdownFile[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const { isMobile } = useResponsive();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflowY = openMenu ? "hidden" : "auto";
    }
  }, [openMenu, isMobile]);

  const chevSize = 20;

  const handleMenuToggle = () => {
    if (isMobile) {
      setOpenMenu((prevOpenMenu) => !prevOpenMenu);
    }
  };

  const isLessThan7Days = (date: string) => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return new Date(date) > sevenDaysAgo;
  };

  const filteredData = data.filter((object) =>
    object.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const loaderSize = 20;

  return (
    <nav id="Nav" className={openMenu && isMobile ? "open" : ""}>
      {isMobile && (
        <button onClick={handleMenuToggle}>
          {openMenu ? (
            <span>
              <ChevronDown size={chevSize} />
            </span>
          ) : (
            <span>
              <ChevronRight size={chevSize} />
            </span>
          )}
          Menu
        </button>
      )}
      {(openMenu || !isMobile) && (
        <div className="menu">
          <div className="search">
            <h5>Code:</h5>
            <div className="input">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title"
              />
              {searchTerm && searchTerm !== debouncedSearchTerm && (
                <span>
                  <RefreshCw
                    size={loaderSize}
                    strokeWidth={2}
                    className="loader"
                  />
                </span>
              )}
            </div>
          </div>
          {filteredData.length === 0 ? (
            <span className="notFound">Not Found!</span>
          ) : (
            filteredData.map((object) => {
              const isNew = isLessThan7Days(object.createdAt);
              const isUpdated = isLessThan7Days(object.updatedAt);

              return (
                <Suspense fallback={<p>Loading...</p>} key={object.id}>
                  <Link
                    href={`/${object.id}`}
                    onClick={() => setOpenMenu(false)}
                  >
                    {object.title}{" "}
                    {isNew ? (
                      <span>New!</span>
                    ) : isUpdated ? (
                      <span>Updated!</span>
                    ) : null}
                  </Link>
                </Suspense>
              );
            })
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
