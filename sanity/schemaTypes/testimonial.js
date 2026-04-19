const testimonial = {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role / Title",
      type: "string",
      description: 'e.g. "Regular Client", "Beauty Blogger"',
    },
    {
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "photo",
      title: "Client Photo",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default testimonial;
