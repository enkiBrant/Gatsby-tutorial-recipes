import React from "react";
import Layout from "../components/Layout";
import TagsList from "../components/TagsList";

const tags = () => {
  return (
    <Layout>
      <h1>Tags page</h1>
      <TagsList />
    </Layout>
  );
};

export default tags;
