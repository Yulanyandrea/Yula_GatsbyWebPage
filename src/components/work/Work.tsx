import * as React from "react";
import { IKImage } from "imagekitio-react";
import { useSitedata } from "../../hooks/useSitedata";

import "./style.scss";

export type SectionRefs = {
  WorkRef: React.RefObject<HTMLElement | null>;
};
const Work = () => {
  const nodes = useSitedata();

  return (
    <main className="containerSectionThree" id="SoftwareDevelopment">
      <h2 className="sectionTwo__title">Software development</h2>
      {nodes.map(({ node }: any) => {
        return (
          <section className="containerSectionThree_main" key={node.id}>
            <h2 className="containerSectionThree__title">{node.name}</h2>
            <p className="containerSectionThree__about">{node.about}</p>
            <section className="containerSectionThree__imageLogo">
              <IKImage
                className="containerSectionThree__image"
                urlEndpoint={process.env.IMAGEKIT}
                path={node.image}
                width="200"
                height="200"
                alt={node.name}
              />
            </section>
          </section>
        );
      })}
    </main>
  );
};

export default Work;
