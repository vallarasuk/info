import React from "react";
import { Helmet } from "react-helmet-async";

const SeoMetaTags = ({ name, role, titleIcon }) => {
  return (
    <Helmet>
      <title>{name}</title>
      <meta
        name="description"
        content="Welcome to the portfolio home page of Vallarasu Kanthasamy, a React Front End Developer."
      />
      {/* Add more relevant meta tags for SEO */}
      <meta
        name="keywords"
        content="portfolio, web development, projects, React, frontend developer, Vallarasu Kanthasamy"
      />
      <meta name="author" content={`${name} - ${role}`} />
      <meta property="og:title" content={`${name}`} />
      <meta
        property="og:description"
        content="Explore my portfolio and skills in web development. Contact me for collaboration or inquiries."
      />
      <meta property="og:image" content={titleIcon} />
      <meta property="og:url" content="https://vallarasuk.com/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your-twitter-handle" />
      <meta name="twitter:title" content={`${name} - ${role}`} />
      <meta
        name="twitter:description"
        content="Explore my portfolio and skills in web development. Contact me for collaboration or inquiries."
      />
      <meta name="twitter:image" content={titleIcon} />
      <link rel="icon" href={titleIcon} type="image/png" />
      <link
        rel="shortcut icon"
        href="./Assects/Profile.jpg"
        type="image/x-icon"
      />
      {/* Set favicon */}
    </Helmet>
  );
};

export default SeoMetaTags;
