import ArticleCategories from "../components/ArticleCategories";

const Home = () => {
  let articleCategory = ["world", "health", "sports", "business", "travel"];

  return (
    <>
      <main>
        {articleCategory.map((articleCategory) => {
          return (
            <ArticleCategories
              category={articleCategory}
              key={articleCategory}
            />
          );
        })}
      </main>
    </>
  );
};

export default Home;
