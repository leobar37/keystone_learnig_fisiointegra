const { Text, Password, Checkbox } = require("@keystonejs/fields");

// user schema
module.exports = {
  fields: {
    username: {
      type: Text,
      isRequired: true,
    },
    email: {
      type: Text,
      isRequired: true,
    },
    password: {
      type: Password,
      isRequired: true,
    },
    isAadmin: {
      type: Checkbox,
      defaultValue: false,
    },
  },
  // hooks: {
  //   // for create and update
  //   resolveInput: async ({
  //     operation,
  //     existingItem,
  //     originalInput,
  //     resolveData,
  //     context,
  //     listKey,
  //     fieldPath,
  //   }) => {
  //     // called on all fields, even if they are not defined in the suplied

  //     console.log(operation);
  //     console.log(existingItem);
  //     console.log(originalInput);
  //     console.log(resolveData);
  //     console.log(context);
  //     console.log(listKey);
  //     console.log(fieldPath);
  //     return resolveData;
  //   },

  //   validateInput: async ({
  //     operation,
  //     existingItem,
  //     originalInput,
  //     resolveData,
  //     context,
  //     listKey,
  //     fieldPath,
  //   }) => {
  //     // after all resolverInput call have returned

  //     console.log(operation);
  //     console.log(existingItem);
  //     console.log(originalInput);
  //     console.log(resolveData);
  //     console.log(context);
  //     console.log(listKey);
  //     console.log(fieldPath);
  //     return resolveData;
  //   },
  //   beforeChange: async ({
  //     operation,
  //     existingItem,
  //     originalInput,
  //     resolveData,
  //     context,
  //     listKey,
  //     fieldPath,
  //   }) => {
  //     // after all validate input
  //   },
  // },
};
