import { useStaticQuery, graphql } from "gatsby";

export const useSitedata = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMongodbProjectsWork {
        edges {
          node {
            id
            name
            about
            image
            myLink
          }
        }
      }
    }
  `);
  return data.allMongodbProjectsWork.edges;
};
