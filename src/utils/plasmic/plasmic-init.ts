import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
import yn from 'yn';

export const PLASMIC = initPlasmicLoader({
  projects: [
    // {
    //   id: "5yPd8PFaZQ97XJoi2y2pe8",  // ID of a project you are using
    //   token: "ALR3UyTTFsbRLx7UopWBmSUbsog0bLntk4ErpzYG4lp4a3YzGqmehy1gVhEObGg6rloKegvQoTajjFirp12Q"  // API token for that project
    // },
    {
      id: process.env.PLASMIC_PROJECT_ID!,  // ID of a project you are using
      token: process.env.PLASMIC_API_TOKEN!  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: yn(process.env.PLASMIC_PREVIEW),
})


