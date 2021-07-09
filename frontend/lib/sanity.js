const sanityClient = require("@sanity/client");

const client = sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "phinh7i9",
  dataset: "production",
  useCdn: true, 
  preview: true
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
});

module.exports = client;