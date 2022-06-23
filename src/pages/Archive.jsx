import ArchiveCategories from "../components/ArchiveCategories";

const Archive = () => {
  let savedArticles = JSON.parse(localStorage.getItem("savedArticles"));

  let savedCategories = [];
  savedArticles.map((article) => {
    if (!savedCategories.includes(article.category[0])) {
      savedCategories.push(article.category[0]);
    }
  });

  return (
    <>
      <main>
        {savedCategories.map((category) => {
          return <ArchiveCategories category={category} key={category} />;
        })}
      </main>
    </>
  );
};

export default Archive;
