import * as React from "react";
import { IKImage } from "imagekitio-react";
import { useSitedata } from "../../hooks/useSitedata";
import "./style.scss";

const SectionThree = () => {
  const nodes = useSitedata();

  return (
    <main className="containerSectionThree" id="SoftwareDevelopment">
      {nodes.map(({ node }: any) => {
        console.log("node JSON:", JSON.parse(JSON.stringify(node)));
        return (
          <div key={node.id}>
            <h2 className="containerSectionThree__title">{node.name}</h2>
            <p>{node.about}</p>

            <IKImage
              urlEndpoint={process.env.IMAGEKIT}
              path={node.image}
              width="500"
              height="500"
              alt={node.name}
            />
          </div>
        );
      })}
    </main>
  );
};

export default SectionThree;
