import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import Button from "./Button/button";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("token");
  return (
    <MDBContainer>
      <div className="d-flex justify-content-end align-items-end">
        <Button className="px-2" icon={<MDBIcon fas icon="home" />} />
        <Button className="px-2" icon={<MDBIcon fas icon="info" />} />
        <Button className="px-2" icon={<MDBIcon fas icon="user" />} />
        {!!isLoggedIn && "Hi" + "Jhon"}
      </div>
    </MDBContainer>
  );
};

export default Navbar;
