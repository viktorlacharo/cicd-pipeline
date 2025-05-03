import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  auth: true,

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};
