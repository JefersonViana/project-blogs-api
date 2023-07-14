const checkRequiredField = (object, arrRequireFields) => {
  for (let i = 0; i < arrRequireFields.length; i += 1) {
    const currentField = arrRequireFields[i];
    if (!(currentField in object)) {
      return `"${currentField}" is required!`;
    }
  }
};

module.exports = {
  checkRequiredField,
};
