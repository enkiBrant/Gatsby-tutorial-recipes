import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import TagsList from "../components/TagsList";
import setupTags from "../utils/setupTags";

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes);
  console.log(Object.entries(newTags));
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {Object.entries(newTags).map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};
export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;
export default Tags;
