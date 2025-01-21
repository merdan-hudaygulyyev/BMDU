import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar/Sidebar";
import TopNavbar from "./TopNavbar/TopNavbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="box-border flex-1 h-screen bg-slate-200 dark:bg-[#092635] overflow-y-auto flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopNavbar />
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
