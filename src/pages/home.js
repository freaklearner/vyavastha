import React, { Fragment } from "react";
import { Image } from "primereact/image";
import NavItems from "../routing/navItems";
import Layout from "../components./layout";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const onSelect = (path) => {
    navigate(path);
  };
  return (
    <Fragment>
      <Layout disableBack={true} title="Kitchen Management System">
        {/* <div className="grid">
        <div className="col-12 md:col-6 lg:col-4 m-auto p-4 textCenter"> */}
        {/* <h3>Kitchen Management System</h3> */}
        <div className="flex align-item-center justify-content-center">
          <Image src="/images/home.png" width="200" />
        </div>
        <div className="flex flex-column card-container mt-4">
          {NavItems.map((item) => {
            return (
              <div
                onClick={() => onSelect(item.path)}
                className="flex align-items-center justify-content-center h-4rem font-bold border-1 border-round text-black m-2"
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </Layout>
      {/* </div>
      </div> */}
    </Fragment>
  );
};

export default Home;
