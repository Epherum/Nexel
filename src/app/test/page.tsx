// app/test/page.js

import Image from "next/image";

const TestPage = () => {
  // Use one of the images you know is slow
  const testImageSrc1 = "/static/book-app/2.webp";
  const testImageSrc2 = "/static/book-app/3.webp";
  const testImageSrc3 = "/static/book-app/4.webp";

  return (
    <main>
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1>Image Performance Test1</h1>
        <hr />

        {/* This should be fast. It's a direct file request. */}
        <img
          src={testImageSrc1}
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
            src={testImageSrc1}
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
          <Image src={testImageSrc1} alt="Next Image Standard" fill priority />
        </div>
      </div>
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1>Image Performance Test2</h1>
        <hr />

        {/* This should be fast. It's a direct file request. */}
        <img
          src={testImageSrc2}
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
            src={testImageSrc2}
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
          <Image src={testImageSrc2} alt="Next Image Standard" fill priority />
        </div>
      </div>
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1>Image Performance Test3</h1>
        <hr />

        {/* This should be fast. It's a direct file request. */}
        <img
          src={testImageSrc3}
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
            src={testImageSrc3}
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
          <Image src={testImageSrc3} alt="Next Image Standard" fill priority />
        </div>
      </div>
    </main>
  );
};

export default TestPage;
