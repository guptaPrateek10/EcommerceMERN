import styled from "styled-components";
import { mobile } from "../Responsive";
import img4 from "../assets/Pics/img4.jpg";
import useFormValidation from "../components/Common/userFormValidation";

const Register = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormValidation();
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
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
          <Aggrement>
            By creating an account , I consent to the processing of my personal
            data in acordance with the <b>PRIVACY POLICY</b>
          </Aggrement>
          <Button type="submit" disabled={isSubmitting}>
            Register
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    url(${img4}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font: 24px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  p {
    color: red;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  width: auto;
  padding: 10px;
  margin: 20px 10px 0px 0px;
`;

const InnerDiv = styled.div`
  flex: 1;
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
