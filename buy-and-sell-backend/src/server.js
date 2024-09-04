const Hapi = require("@hapi/hapi");
const admin = require("firebase-admin");
const routes = require("./routes");
const db = require("./database");
const credentials = require("../credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

let server;

const start = async () => {
  server = Hapi.Server({
    port: 8000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"], // Allow all origins. Change to specific domains in production.
        headers: ["Accept", "Content-Type"],
        additionalHeaders: ["cache-control", "x-requested-with"], // Adjust according to your needs.
      },
    },
  });

  routes.forEach((route) => server.route(route));

  db.connect();
  await server.start();
  console.log(`Server is listning on ${server.info.uri}`);
};

process.on("unhandleRejection", (err) => {
  console.log(err);
  process.exit(1);
});

process.on("SIGINT", async () => {
  console.log("Stopping server...");
  await server.stop({ timeout: 10000 });
  db.end();
  console.log("Server stopped");
  process.exit(0);
});

start();
