import Article from "../components/Article";
import useFetch from "../hooks/useFetch";

import placeholderImage from "../images/placeholder.jpg";

const Home = () => {
  let articleCategory = ["world", "health", "sports", "business", "travel"];

  const API_URL =
    "http://api.nytimes.com/svc/topstories/v2/" +
    articleCategory[0] +
    ".json?api-key=c50OfFb2PQdT2nTvRhfqbEWJwLAiRH8N";

  const { data, isPending, error } = useFetch(API_URL);

  return (
    <>
      <main>
        {data &&
          data.results.map((result) => {
            console.log(result);
            return (
              <Article
                image={
                  (result.multimedia && result.multimedia[0].url) ||
                  placeholderImage
                }
                title={(result.title && result.title) || "no title available"}
                paragraph={
                  (result.abstract && result.abstract) ||
                  "no paragraph available"
                }
                link={result.url && result.url}
              />
            );
          })}
      </main>
    </>
  );
};

export default Home;
