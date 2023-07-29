import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Your Name - Home</title>
        <meta name="description" content="Welcome to my portfolio home page." />
        {/* Add more relevant meta tags for SEO */}
        <meta name="keywords" content="portfolio, web development, projects, React" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Your Name - Home" />
        <meta property="og:description" content="Welcome to my portfolio home page." />
        <meta property="og:image" content="https://example.com/your-profile-image.jpg" />
        <meta property="og:url" content="https://example.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@your-twitter-handle" />
        <meta name="twitter:title" content="Your Name - Home" />
        <meta name="twitter:description" content="Welcome to my portfolio home page." />
        <meta name="twitter:image" content="https://example.com/your-profile-image.jpg" />
      </Helmet>
      <h2>Home Page</h2>
      <p>Welcome to my portfolio home page.</p>
    </section>
  );
};

export default Home;
