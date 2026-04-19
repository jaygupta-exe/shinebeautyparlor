const teamMember = {
  name: "teamMember",
  title: "Team Members",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role / Specialization",
      type: "string",
      description: 'e.g. "Hair Specialist", "Nail Designer"',
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook URL", type: "url" },
        { name: "instagram", title: "Instagram URL", type: "url" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
      ],
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    },
  ],
};

export default teamMember;
