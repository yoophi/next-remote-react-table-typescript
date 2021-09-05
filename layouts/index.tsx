import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="p-4">
      <div className="bg-yellow-200 p-4">
        <ul className="list-none flex flex-row items-center justify-start">
          <li className="flex items-center mr-4">
            {" "}
            <Link href="/dashboard">
              <a className="">Dashboard</a>
            </Link>{" "}
          </li>
          <li className="flex items-center mr-4">
            {" "}
            <Link href="/todos">
              <a className="">Todo List</a>
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Layout;
