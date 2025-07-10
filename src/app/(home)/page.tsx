// src/app/page.tsx

import HomePageClient from "./HomePageClient"; // Import the new client component

// Node.js modules are safe to use here
import fs from "fs";
import path from "path";

export default function Page() {
  // 1. This code runs ONLY on the server.
  const logosDirectory = path.join(process.cwd(), "public/static/nexel/logos");
  const logoFilenames = fs.readdirSync(logosDirectory);
  const logoPaths = logoFilenames.map(
    (filename) => `/static/nexel/logos/${filename}`
  );

  // 2. It renders the Client Component and passes the server-fetched data as a prop.
  return <HomePageClient logoPaths={logoPaths} />;
}
