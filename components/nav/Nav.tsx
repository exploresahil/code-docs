"use client";

import "./style.scss";
import { MarkdownFile } from "@/types/types";
import { ChevronDown, ChevronRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import useResponsive from "@/hooks/useResponsive";
import { Suspense } from "react";
import { usePathname } from "next/navigation";

const Nav = ({ data }: { data: MarkdownFile[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const { isMobile } = useResponsive();
  const pathname = usePathname();

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

  const filteredData = data.map((object) => ({
    category: object.category,

    data: object.data
      .filter((item) => {
        console.log(
          item.title,
          debouncedSearchTerm,
          item.title
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
            object.category
              ?.toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase())
        );

        return (
          item.title
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          object.category
            ?.toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase())
        );
      })

      .sort((a, b) => a.title.localeCompare(b.title)),
  }));

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
            filteredData.map(
              (object, i) =>
                object.category &&
                object.data.length > 0 && (
                  <div key={crypto.randomUUID()} className="nav_category">
                    <p>{object.category}:</p>
                    <div className="links">
                      {object.data.map((item) => {
                        {
                          const isNew = isLessThan7Days(item.createdAt);
                          const isUpdated = isLessThan7Days(item.updatedAt);
                          const isActive = pathname === `/${item.id}`;

                          return (
                            <Suspense
                              key={crypto.randomUUID()}
                              fallback={<p>Loading...</p>}
                            >
                              <Link
                                href={`/${item.id}`}
                                onClick={() => setOpenMenu(false)}
                                className={isActive ? "active" : ""}
                              >
                                {item.title}{" "}
                                {isNew ? (
                                  <span>New!</span>
                                ) : isUpdated ? (
                                  <span>Updated!</span>
                                ) : null}
                              </Link>
                            </Suspense>
                          );
                        }
                      })}
                    </div>
                  </div>
                )
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
