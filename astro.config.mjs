// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://hessamcheraghi.github.io/",
  base: "my-journey-in-learning-german",
  integrations: [
    starlight({
      title: "Learn German",
      social: {
        github: "",
        email: "hessam.ch.rose@gmail.com",
      },
      sidebar: [
        {
          label: "Motivation",
          link: "/motivation",
        },
        {
          label: "A1 (beginners)",
          autogenerate: { directory: "beginner" },
          collapsed: true,
        },
        {
          label: "A2 (pre intermediate)",
          autogenerate: { directory: "pre-intermediate" },
          collapsed: true,
        },
        {
          label: "B1 (intermediate)",
          autogenerate: { directory: "intermediate" },
          collapsed: true,
        },
        {
          label: "B2 (upper intermediate)",
          autogenerate: { directory: "upper-intermediate" },
          collapsed: true,
        },
        {
          label: "C1 (advanced)",
          autogenerate: { directory: "advanced" },
          collapsed: true,
        },
      ],
    }),
  ],
});
