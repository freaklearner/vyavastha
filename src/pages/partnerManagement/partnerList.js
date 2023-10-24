import React from "react";
import CardItem from "../../components./cardItem";
import Layout from "../../components./layout";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const list = [
  {
    name: "Sapna Tea",
  },
  {
    name: "Rajvir Tea",
  },
  {
    name: "AGN",
  },
];

const PartnerList = () => {
  const navigate = useNavigate();
  const onSelect = () => {
    alert("Selected");
  };
  return (
    <Layout title="Partner Management">
      {list.map((item, index) => {
        return (
          <CardItem
            key={index}
            name={item.name}
            // onSelect={onSelect}
            isSelected={index === 0 ? true : false}
          />
        );
      })}
      <div className="flex align-items-center justify-content-center">
        <Button className="" rounded outlined icon="pi pi-plus"></Button>
      </div>
    </Layout>
  );
};

export default PartnerList;
