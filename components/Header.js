import React from "react";
import Link from "next/link";

const Header = () => (
  <ul className="list">
    <li className="list-item">
      <Link href="/">
        <a className="list-link">Home</a>
      </Link>
    </li>
    <li className="list-item">
      <Link href="/about">
        <a className="list-link">About</a>
      </Link>
    </li>
    <li className="list-item">
      <Link href="/contacts">
        <a className="list-link">Contacts</a>
      </Link>
    </li>
    <style jsx>
      {`
        .list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          width: 100%;
          background-color: #ccc;
          align-items: center;
          justify-content: center;
        }

        .list-item {
          padding: 8px;
        }

        .list-link {
        }
      `}
    </style>
  </ul>
);

export default Header;
