"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { documentInternationalization } from "@sanity/document-internationalization";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),

    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: "uk", title: "Ukrainian" },
        { id: "en", title: "English" },
      ],
      schemaTypes: ["hero"],
    }),

    internationalizedArray({
      languages: [
        { id: "uk", title: "Ukrainian" },
        { id: "en", title: "English" },
      ],
      defaultLanguages: ["en"],
      fieldTypes: ["string"],
    }),
  ],
});
