import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";

const OrderItemCard = ({}) => {
  const [mode, setMode] = useState("read"); //read,edit

  return (
    <div className="grid p-5 card-container surface-200">
      <Column className="col-6 flex justify-content-center align-items-center">
        Veg Momos
      </Column>
      <Column className="col-3 col-offset-1 flex align-items-center justify-content-center">
        <Form>
          <InputText></InputText>
        </Form>
      </Column>
      <Column className="col-1 col-offset-1 flex align-items-center justify-content-around">
        <i className="pi pi-pencil"></i>
        <i className="pi pi-check"></i>
      </Column>
    </div>
  );
};
export default OrderItemCard;
