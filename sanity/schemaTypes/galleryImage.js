const galleryImage = {
  name: "galleryImage",
  title: "Gallery Images",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Haircut", value: "haircut" },
          { title: "Makeup", value: "makeup" },
          { title: "Nails", value: "nails" },
          { title: "Skincare", value: "skincare" },
          { title: "Massage", value: "massage" },
          { title: "Bridal", value: "bridal" },
        ],
      },
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    },
  ],
};

export default galleryImage;
