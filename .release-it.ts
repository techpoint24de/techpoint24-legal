import type { Config } from "release-it";

export default {
  plugins: {
    "@release-it/conventional-changelog": {
      preset: {
        name: "conventionalcommits",
        types: [
          {
            type: "feat",
            section: "Features",
          },
          {
            type: "fix",
            section: "Bug Fixes",
          },
          {},
        ],
      },
      infile: "CHANGELOG.md",
    },
  },
} satisfies Config;
