import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, InputForm, Text } from "../..";
import { EMAIL_REGEX, PASSWORD_REGEX, ROUTES } from "../../../utils";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../store/login/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit() {
    if (!EMAIL_REGEX.test(email)) {
      setErrorEmail(true);
    }
    if (!PASSWORD_REGEX.test(password)) {
      setErrorPassword(true);
    }
    if (EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) {
      dispatch(setLogin(true));
      navigate(ROUTES.overview);
    }
  }

  return (
    <div>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="white"
        width="380px"
        height="582px"
        borderRadius="10px"
      >
        <Text
          fontSize="19px"
          fontFamily="Mulish"
          fontWeight="bold"
          textAlign="center"
          lineHeight="24px"
          color="mediumText"
        >
          Dashboard Kit
        </Text>
        <Text
          fontSize="24px"
          fontFamily="Mulish"
          fontWeight="bold"
          textAlign="center"
          lineHeight="30px"
          color="black"
          letterSpacing="0.3px"
          marginTop="32px"
        >
          Log in to Dashboard Kit
        </Text>
        <Text
          fontSize="14px"
          fontFamily="Mulish"
          fontWeight="normal"
          textAlign="center"
          lineHeight="20px"
          color="subtitleText"
          letterSpacing="0.3px"
          marginTop="12px"
          marginBottom="48px"
        >
          Enter your email and password below
        </Text>
        <InputForm
          labelText="EMAIL"
          name="Email"
          placeholder="Email address"
          width="316px"
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorEmail(false);
          }}
          error={errorEmail ? "Errore email" : undefined}
        ></InputForm>
        <InputForm
          labelText="PASSWORD"
          name="Password"
          placeholder="Password"
          width="316px"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorPassword(false);
          }}
          error={errorPassword ? "Errore password" : undefined}
        ></InputForm>
        <Button
          width="316px"
          marginTop="24px"
          marginBottom="32px"
          onClick={() => handleSubmit()}
        >
          Log In
        </Button>
        <Text
          fontSize="14px"
          fontFamily="Mulish"
          fontWeight="normal"
          textAlign="center"
          lineHeight="20px"
          color="subtitleText"
          letterSpacing="0.3px"
        >
          Don't have an account?
        </Text>
      </Flex>
    </div>
  );
};
export default Login;
