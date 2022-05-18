if (process.env.npm_execpath.match('yarn')) {
    console.error("You can't use Yarn to install dependencies:");
    process.exit(1);
  }

 /*{
  "name": "test",
  "version": "1.0.0",
  "scripts": {
    "preinstall": "node -e 'if(!/yarn\\.js$/.test(process.env.npm_execpath))throw new Error(\"Use yarn\")'"
  }
}*/