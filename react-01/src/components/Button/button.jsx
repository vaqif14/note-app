import { MDBBtn } from "mdb-react-ui-kit";
const Button = ({ icon, onClick, props }) => {
  return (
    <MDBBtn onClick={onClick} {...props}>
      {icon}
    </MDBBtn>
  );
};

export default Button;
