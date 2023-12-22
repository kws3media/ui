module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-gitinfo");
  grunt.loadNpmTasks("grunt-text-replace");
  grunt.loadNpmTasks("grunt-sftp-deploy");

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    gitinfo: {
      options: {},
    },

    replace: {
      dist: {
        src: ["build/index.html", "build/iframe.html"],
        overwrite: true,
        replacements: [
          {
            from: "<title>@storybook/cli - Storybook</title>",
            to: "<title>UI | KWS3 Media</title>",
          },
          {
            from: "<title>@storybook/cli - Storybook</title>",
            to: "<title>UI | KWS3 Media</title>",
          },
          {
            from: '<link rel="icon" type="image/svg+xml" href="./favicon.svg" />',
            to:
              '<link rel="shortcut icon" href="favicon.png?v=' +
              "<%= gitinfo.local.branch.current.shortSHA %>" +
              '" />',
          },
          {
            from: /\.js"/g,
            to: ".js?v=" + "<%= gitinfo.local.branch.current.shortSHA %>" + '"',
          },
        ],
      },
    },

    "sftp-deploy": {
      dist: {
        auth: {
          host: "kws3.media",
          port: 22,
          authKey: "livekey",
        },
        cache: false,
        src: "./build/",
        dest: "/var/www/html/ui.kws3.media/", // this is on the remote host
        exclusions: ["./build/**/.DS_Store", "./build/**/Thumbs.db"],
        serverSep: "/",
        concurrency: 20,
        progress: true,
      },
    },
  });

  grunt.registerTask("dist", ["gitinfo", "replace:dist"]);

  grunt.registerTask("deploy:dist", ["sftp-deploy:dist"]);
};
