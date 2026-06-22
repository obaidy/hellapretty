const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "..", "build", "index.html");
let html = fs.readFileSync(indexPath, "utf8");

html = html.replace(/\/material-kit-pro-react\//g, "/");
html = html.replace(/src="\.\/static\//g, 'src="/static/');
html = html.replace(/href="\.\/static\//g, 'href="/static/');
html = html.replace(/href="\.\/favicon/g, 'href="/favicon');
html = html.replace(/href="\.\/apple-icon/g, 'href="/apple-icon');
html = html.replace(/href="\.\/manifest/g, 'href="/manifest');

fs.writeFileSync(indexPath, html);

if (html.includes("material-kit-pro-react")) {
  console.error("build/index.html still contains material-kit-pro-react paths");
  process.exit(1);
}

if (!html.includes("/static/js/main")) {
  console.error("build/index.html is missing /static/js/main bundle reference");
  process.exit(1);
}

console.log("Netlify asset paths verified in build/index.html");
