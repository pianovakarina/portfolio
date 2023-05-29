import { aboutMeData } from "./data/data";

const AboutMePage = () => {
  return (
    <main>
      <section>
        <div>Image</div>
        <div>
          <h2>{aboutMeData.title}</h2>
          <p>{aboutMeData.body}</p>
        </div>
      </section>
      <section>
        <p>{aboutMeData.highlightedBody}</p>
      </section>
      <section>
        <div>
          <p>{aboutMeData.body2} </p>
        </div>
        <div>Image</div>
      </section>
    </main>
  );
};

export default AboutMePage;
