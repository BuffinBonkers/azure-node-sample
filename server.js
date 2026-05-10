const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });

  response.end(`
    <html>
      <head>
        <title>Azure Node.js Web App</title>
      </head>
      <body>
        <h1>Azure App Service Web App</h1>
        <p>This is a sample Node.js app deployed to Azure App Service.</p>
        <p>Created by Macy Stevenson for the Azure assignment.</p>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
