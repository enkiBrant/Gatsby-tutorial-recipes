import { Link } from "gatsby";
import React from "react";
import setupTags from "../utils/setupTags";

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes);
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
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
