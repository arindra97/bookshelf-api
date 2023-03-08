const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server start on ${server.info.uri}`);
};

init();