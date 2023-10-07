import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProfile } from "../api/user";
function Profile() {
  const { data: userData, isError } = useGetProfile();
  const navigate = useNavigate();

  const onLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  console.log(userData);

  useEffect(() => {
    if (isError) {
      onLogOut();
    }
  }, [isError]);

  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center">
        <MDBCol md="12">
          <header
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "600px",
            }}
          >
            <section className="text-center text-md-start">
              <div
                className="p-5 bg-image"
                style={{
                  height: "300px",
                  backgroundImage:
                    'url("https://mdbootstrap.com/img/new/textures/full/56.jpg")',
                  zIndex: "-1",
                }}
              ></div>

              <div
                className="pb-2"
                style={{ backgroundColor: "background-color: hsl(0, 0%, 98%)" }}
              >
                <MDBContainer>
                  <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol lg="6" md="8" className="mb-4 mb-md-0 pt-4">
                      <img
                        src={userData?.avatar}
                        className="rounded-circle float-none float-md-start me-4 mb-3"
                        alt=""
                        style={{
                          width: "168px",
                          marginTop: "-110px",
                          border: "4px solid hsl(0, 0%, 98%)",
                        }}
                      />
                      <h1 className="fw-bold">{userData?.name}</h1>
                    </MDBCol>
                    <MDBCol
                      lg="6"
                      md="8"
                      className="mb-4 mb-md-0 text-center text-lg-end"
                    >
                      <MDBBtn onClick={onLogOut} rounded>
                        Log out
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </div>
            </section>
          </header>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Profile;
