import React from "react";
import { Link } from "gatsby";
import slugify from "slugify";
import setupTags from "../utils/setupTags";

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes);
  // console.log(recipes);
  // console.log(newTags);
  // for (const tag in newTags) {
  //   console.log(`${tag} : ${newTags[tag]}`);
  // }

  // Object.entries(newTags).map(tag => console.log(tag));

  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {Object.entries(newTags).map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
