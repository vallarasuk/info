import React from "react";
import { Helmet } from "react-helmet-async";

const SeoMetaTags = ({
  name,
  role,
  titleIcon,
  keywords,
  cardImage,
  twitterHandle  ,
  siteUrl , 
}) => {
  return (
    <Helmet>
      <title>{name} | Software Developer</title>
      <meta
        name="description"
        content={`Explore the portfolio of ${name}, a skilled software developer specializing in front-end development using React.`}
      />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={`${name} - ${role}`} />
      <meta property="og:title" content={`${name} | Software Developer`} />
      <meta
        property="og:description"
        content={`Explore the portfolio of ${name}, a skilled software developer specializing in front-end development using React.`}
      />
      <meta property="og:image" content={cardImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta
        property="og:vallarasu_kanthasamy"
        content="Vallarasu Kanthasamy's Portfolio"
      />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={`${name} | Software Developer`} />
      <meta
        name="twitter:description"
        content={`Explore the portfolio of ${name}, a skilled software developer specializing in front-end development using React.`}
      />
      <meta name="twitter:image" content={cardImage} />
      <link rel="icon" href={cardImage} type="image/png" />
      <link rel="icon" href={cardImage} type="image/x-icon" />
    </Helmet>
  );
};

export default SeoMetaTags;
