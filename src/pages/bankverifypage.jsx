import React from 'react';
import Layout from '../compo/layout/layout';
import Rightsidelayout from '../compo/layout/rightsidelayout';
import Bankverifyform from '../compo/bankverifyform/bankverifyform';

function Bankverifypage() {
  return (
    <Layout>
        <Rightsidelayout
            backlink="/profile-fill"
            pageCount="03"
            pageType="Bank Verification"
            title="Complete Your Profile!"
            message="For the purpose of industry regulation, your details are required."
        >
            <Bankverifyform></Bankverifyform>
        </Rightsidelayout>
    </Layout>
  )
}

export default Bankverifypage