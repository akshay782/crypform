import React from "react";
import Layout from "../compo/layout/layout";
import Rightsidelayout from "../compo/layout/rightsidelayout";
import Profileform from "../compo/profileform/profileform";

function ProfileFillPage() {
  return (
    <Layout>
      <Rightsidelayout
        backlink="/register"
        pageCount="02"
        pageType="residency info."
        title="complete your profile!"
        message="For the purpose of industry regulation, your details are required."
      >
        <Profileform></Profileform>
      </Rightsidelayout>
    </Layout>
  );
}

export default ProfileFillPage;
