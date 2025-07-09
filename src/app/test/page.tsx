// app/test/page.js

import Image from "next/image";

const TestPage = () => {
  // Use one of the images you know is slow
  const testImageSrc = "/static/book-app/2.webp";

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <h1>Image Performance Test</h1>
      <p>
        All three images below load the exact same source file: {testImageSrc}
      </p>

      <hr />

      {/* This should be fast. It's a direct file request. */}
      <img
        src={testImageSrc}
        alt="Standard HTML img"
        width="500"
        style={{ border: "2px solid blue" }}
      />

      <hr />

      {/* This tells Next.js to use the component for layout, but NOT to process it on the server. */}
      {/* THIS IS THE KEY TEST. It should also be fast. */}
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "300px",
          border: "2px solid green",
        }}
      >
        <Image
          src={testImageSrc}
          alt="Next Image Unoptimized"
          fill
          unoptimized={true}
        />
      </div>

      <hr />

      {/* This is what you're currently using. We expect it to be slow. */}
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "300px",
          border: "2px solid red",
        }}
      >
        <Image src={testImageSrc} alt="Next Image Standard" fill priority />
      </div>
    </div>
  );
};

export default TestPage;
