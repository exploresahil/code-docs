"use client";

import "./style.scss";
import { MarkdownFile } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = ({ data }: { data: MarkdownFile[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <nav id="Nav">
      <button onClick={() => setOpenMenu(!openMenu)}>Menu</button>

      {openMenu && (
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
                <Link
                  key={object.id}
                  href={`/${object.id}`}
                  onClick={() => setOpenMenu(false)}
                >
                  {object.title}
                </Link>
              ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
