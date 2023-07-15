import styled from "styled-components";
import { mobile } from "../Responsive";
import img4 from "../assets/Pics/img4.jpg";
import useFormValidation from "../components/Common/userFormValidation";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const { isRegistering, isError, isSucces } = useSelector(
    (state) => state.register
  );
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    validate,
    setValues,
    setErrors,
    setIsSubmitting,
  } = useFormValidation();
  const { retypePassword, ...others } = values;
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      // Perform form submission or any other action here
      registerUser(dispatch, others);
      navigate("/login");
      console.log("Form is valid");
      setValues({});
      setErrors({});
      setIsSubmitting(true);
    }
  };
  console.log(others);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <InputSection>
            <InnerDiv>
              <Input
                placeholder="name"
                type="text"
                name="name"
                value={values.name || ""}
                onChange={handleChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </InnerDiv>
            <InnerDiv>
              <Input
                placeholder="last name"
                type="text"
                name="lastname"
                value={values.lastname || ""}
                onChange={handleChange}
              />
              {errors.lastname && <p>{errors.lastname}</p>}
            </InnerDiv>
            <InnerDiv>
              <Input
                placeholder="email"
                type="text"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </InnerDiv>
            <InnerDiv>
              <Input
                placeholder="username"
                type="text"
                name="username"
                value={values.username || ""}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </InnerDiv>
            <InnerDiv>
              <Input
                placeholder="password"
                type="password"
                name="password"
                value={values.password || ""}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </InnerDiv>
            <InnerDiv>
              <Input
                placeholder="confirm password"
                type="password"
                name="retypePassword"
                value={values.retypePassword || ""}
                onChange={handleChange}
              />
              {errors.retypePassword && <p>{errors.retypePassword}</p>}
            </InnerDiv>
          </InputSection>
          <Aggrement>
            By creating an account , I consent to the processing of my personal
            data in acordance with the <b>PRIVACY POLICY</b>
          </Aggrement>
          {isError && <Error>Somthing is Wrong... </Error>}
          {isSucces && <Success>Somthing is Wrong... </Success>}
          <Button type="submit">Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
const Error = styled.span`
  color: red;
`;
const Success = styled.span`
  color: green;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    url(${img4}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  /* ${mobile({ width: "75%" })} */
`;

const Wrapper = styled.div`
  width: 40vw;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font: 24px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  p {
    color: red;
  }
`;
const InputSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 70%;
  width: auto;
  padding: 10px;
  margin: 20px 10px 0px 0px;
`;

const InnerDiv = styled.div`
  flex: 1;
  width: 100%;
  padding: 0;
  margin: 0;
`;
const Aggrement = styled.span`
  font-style: 15px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0eb683;
  }
`;

export default Register;
