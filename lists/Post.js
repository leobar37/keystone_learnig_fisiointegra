const {
  Text,
  Uuid,
  Checkbox,
  Relationship,
  DateTime,
  CalendarDay,
} = require("@keystonejs/fields");

const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
module.exports = {
  fields: {
    title: { type: Text, isRequired: true },
    content: {
      type: Wysiwyg,
    },
    ispublished: { type: Checkbox, isRequired: true },
    extract: {
      type: Text,
      isMultiline: true,
    },
    categories: {
      type: Relationship,
      ref: "Category.posts",
      many: false,
    },
  },
};
