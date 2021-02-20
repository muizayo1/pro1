import React from "react";
import { Container, FormButton, FormInput, FormLabel, Formwrap, Icon } from "./ServiceElements"

const SignIn = () => {
    return (
        <>
         <Container>
               <Formwrap>
                  <Icon to="/">target</Icon>
                     <FormContent>
                     <Form action="#">
                        <FormH1>Sign into your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required/>
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                       </Form>
                   </FormContent>
                </Formwrap>
          </Container>
        </>

    );
};

export default SignIn;