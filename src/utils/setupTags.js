const setupTags = recipes => {
  const tagsArr = [];

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      tagsArr.push(tag);
    });
  });

  const allTags = tagsArr.reduce(
    (cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt),
    {}
  );

  return allTags;
};

export default setupTags;
