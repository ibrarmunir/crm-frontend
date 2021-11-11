import React from "react";
import BreadCrumb from "react-bootstrap/Breadcrumb";

const Breadcrumb = ({ items = [] }) => {
  return (
    <BreadCrumb>
      <BreadCrumb.Item href="/">Home</BreadCrumb.Item>
      {items.map((item, index) => (
        <BreadCrumb.Item key={index} href={item.routerLink}>
          {item.name}
        </BreadCrumb.Item>
      ))}
    </BreadCrumb>
  );
};

export default Breadcrumb;
