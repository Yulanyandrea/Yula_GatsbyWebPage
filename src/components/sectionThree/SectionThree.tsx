import * as React from "react";
import { IKImage } from "imagekitio-react";

import { useStaticQuery, graphql } from "gatsby";
import "./style.scss";

const SectionThree = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMongodbProjectsWork {
        edges {
          node {
            id
            name
            about
          }
        }
      }
    }
  `);

  const nodes = data.allMongodbProjectsWork.edges;
  return (
    <main className="containerSectionThree" id="SoftwareDevelopment">
      {nodes.map(({ node }: any) => {
        console.log(node);
        return (
          <div key={node.id}>
            <h2 className="containerSectionThree__title">{node.name}</h2>
            <p>{node.about}</p>

            <IKImage
              urlEndpoint={process.env.IMAGEKIT}
              path="/logo.png" // o `src` si es URL completa
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
