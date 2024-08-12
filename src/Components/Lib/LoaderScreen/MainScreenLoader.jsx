import React from "react";
import HomeContent from "../../Constant/HomeContent";

const MainLoaderScreen = () => {
  const { mainScreenLoading, alt } = HomeContent;

  return (
    <div className="loading-container">
      <img height="auto" width={150} src={mainScreenLoading} alt={alt} />
    </div>
  );
};

export default MainLoaderScreen;
