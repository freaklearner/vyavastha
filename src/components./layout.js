import { Button } from "primereact/button";
import React from "react";

const Layout = ({ title, children, disableBack }) => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="grid">
      <div className="col-12 md:col-6 lg:col-4 m-auto p-4 ">
        <h3 className="text-center relative">
          {title}
          {!disableBack && (
            <i
              onClick={goBack}
              className="pi pi-arrow-left top-2 left-0 absolute"
              outlined
            ></i>
          )}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Layout;
