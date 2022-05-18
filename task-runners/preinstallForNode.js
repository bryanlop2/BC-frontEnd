if (process.env.npm_execpath.indexOf('yarn') === -1) {
    console.error("You can't node to install dependencies:");
    process.exit(1);
  }