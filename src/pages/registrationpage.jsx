import React from "react";
import Layout from "../compo/layout/layout";
import Rightsidelayout from "../compo/layout/rightsidelayout";
import Registerform from "../compo/registerform/registerform";

function RegistrationPage() {
  return (
    <Layout>
      <Rightsidelayout
        backlink="/"
        pageCount="01"
        pageType="personal info."
        title="Register Individual Account!"
        message="For the purpose of industry regulation, your details are required."
      >
        <Registerform></Registerform>
      </Rightsidelayout>
    </Layout>
  );
}

export default RegistrationPage;
