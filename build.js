const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  platform: "browser",
  outfile: "dist/index.js",
  tsconfig: "tsconfig.json",
});
