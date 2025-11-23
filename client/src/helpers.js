const getTags = (form) => {
  const selectedtags = [];
  const tags = ["nature", "mountains", "hiking", "beach", "sun"];

  tags.forEach((tag) => {
    if (form[tag] === true) {
      selectedtags.push(tag);
    }
  });
  return selectedtags;
};

export { getTags };
