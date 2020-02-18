const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://www.pipesort.com/",
    gaTrackingId: null,
  },
  header: {
    logo: "",
    logoLink: "/",
    title: "Lights",
    githubUrl: "https://github.com/pipesort/react-native-lights",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/codeblock"],
    collapsedNav: ["/codeblock"],
    links: [{ text: "Pipesort", link: "https://www.pipesort.com/" }],
    frontline: false,
    ignoreIndex: true,
  },
  siteMetadata: {
    title: "Lights | Pipesort",
    description: "Documentation for Lights",
    ogImage: null,
    docsLocation:
      "https://github.com/pipesort/react-native-lights/tree/master",
    favicon: "",
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Lights",
      short_name: "Lights",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
}

module.exports = config
