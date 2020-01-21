const express = require("express");
const cors = require("cors");
var morgan = require("morgan");
const gitApi = require("@tinacms/api-git");
const port = parseInt(process.env.PORT, 10) || 3000;

const server = express();

server.use(cors());
server.use(morgan("tiny"));

const path = require("path");
const REPO_ABSOLUTE_PATH = path.join(process.cwd(), "../");
console.log("REPO_ABSOLUTE_PATH", REPO_ABSOLUTE_PATH);

const options = {
  pathToRepo: REPO_ABSOLUTE_PATH,
  pathToContent: "www/content",
  defaultCommitMessage: "Edited with TinaCMS",
  defaultCommitName: "TinaCMS",
  defaultCommitEmail: "git@tinacms.org",
  pushOnCommit: false
};

server.use("/___tina", gitApi.router(options));

server.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
