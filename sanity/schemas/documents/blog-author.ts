import { defineField, defineType } from "sanity";

export default defineType({
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  name: "person",
  title: "Blog author",
  type: "document",
});
