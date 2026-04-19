import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";
import StudioMessages from "./components/StudioMessages";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2kgn33kv";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "shine-beauty-parlour",
  title: "Shine Beauty Parlour Dashboard",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  tools: (prev) => {
    return [
      ...prev,
      {
        name: "messages",
        title: "Messages",
        component: StudioMessages,
      },
    ];
  },
});
