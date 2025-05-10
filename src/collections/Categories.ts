import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    create: () => true,

    update: () => true,
  },
  auth: false,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug (used in URL)",
      type: "text",
      required: true,
      unique: true,
    },

    {
      name: "description",
      type: "textarea",
      required: false,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "parentCategory",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
    {
      name: "subcategories",
      type: "join",
      collection: "categories",
      on: "parentCategory",
      hasMany: true,
    },
  ],
};
