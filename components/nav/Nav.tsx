"use client";

import "./style.scss";
import { MarkdownFile } from "@/types/types";
import { ChevronDown, ChevronRight } from "lucide-react";
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
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title"
            />
          </div>
          {data &&
            data
              .filter((object) =>
                object.title
                  .toLowerCase()
                  .includes(debouncedSearchTerm.toLowerCase())
              )
              .map((object) => (
                <Suspense fallback={<p>Loading...</p>}>
                  <Link
                    key={object.id}
                    href={`/${object.id}`}
                    onClick={() => setOpenMenu(false)}
                  >
                    {object.title}
                  </Link>
                </Suspense>
              ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
