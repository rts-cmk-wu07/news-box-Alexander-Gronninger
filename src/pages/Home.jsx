import { useContext, useEffect } from "react";
import ArticleCategories from "../components/ArticleCategories";
import CategoryContext from "../context/CategoryContext";

const Home = () => {
  const { categories, setCategories } = useContext(CategoryContext);
  let categorySettings =
    JSON.parse(localStorage.getItem("categorySettings")) || false;
  console.log(categorySettings);
  //categorySettings && setCategories(categorySettings);

  useEffect(() => {
    categorySettings && setCategories(categorySettings);
  }, []);

  let categoriesKeys = [];
  categories.map((category) => {
    categoriesKeys.push(Object.keys(category));
  });

  let selectedCategories = [];
  categories.map((category, i) => {
    category[categoriesKeys[i][0]] &&
      selectedCategories.push(Object.keys(category));
  });

  return (
    <>
      <main>
        {selectedCategories &&
          selectedCategories.map((category) => {
            return <ArticleCategories category={category} key={category} />;
          })}
      </main>
    </>
  );
};

export default Home;
