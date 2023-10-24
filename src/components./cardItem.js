import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const CardItem = ({ name, onSelect, isSelected }) => {
  const header = (
    <div className="p-card-title">
      <h5>{name}</h5>
    </div>
  );

  const footer = (
    <div className="p-card-footer">
      {onSelect && (
        <Button
          label={isSelected ? "Selected" : "Select"}
          severity={isSelected ? "success" : "primary"}
          onClick={onSelect}
        ></Button>
      )}
    </div>
  );

  return (
    <div className="flex flex-row flex-nowrap justify-content-between align-items-center card-container m-4 border-1 border-round p-2 py-4">
      <div className="flex justify-content-center text-xl font-medium">
        {name}
      </div>
      <div>
        {onSelect && (
          <Button
            icon="pi pi-check"
            severity="primary"
            x
            outlined={isSelected ? false : true}
            onClick={onSelect}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default CardItem;
