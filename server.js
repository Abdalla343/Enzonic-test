const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Always return JSON so you can test the deployment from a browser.
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === "/" || req.url === "/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      success: true,
      message: "Node.js backend is running!",
      service: "Enzonic deployment test",
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime())
    }, null, 2));
  }

  if (req.url === "/api/test") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      success: true,
      message: "API endpoint works",
      method: req.method,
      nodeVersion: process.version,
      timestamp: new Date().toISOString()
    }, null, 2));
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    success: false,
    message: "Route not found",
    availableRoutes: ["/", "/health", "/api/test"]
  }, null, 2));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Test backend listening on port ${PORT}`);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
  process.exit(1);
});
