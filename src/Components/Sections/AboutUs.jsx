const Image = React.lazy(() => import("./YourImageComponent"));

const AboutSection = () => {
  return (
    <section className="about">
      <h2 className="text-end bg-secondary-subtle p-2 text-uppercase rounded-3 shadow mb-4">
        About Me
      </h2>
      <p>{aboutDescription}</p>
    </section>
  );
};
