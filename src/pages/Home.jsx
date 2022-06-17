import { useContext, useEffect } from "react";
import ArticleCategories from "../components/ArticleCategories";
import CategoryContext from "../context/CategoryContext";

const Home = () => {
  const { categories } = useContext(CategoryContext);

  let categoriesKeys = [];

  categories.map((category) => {
    categoriesKeys.push(Object.keys(category));
  });

  console.log(categories);
  console.log(categoriesKeys);

  return (
    <>
      <main>
        {categoriesKeys &&
          categoriesKeys.map((category) => {
            return <ArticleCategories category={category} key={category} />;
          })}
      </main>
    </>
  );
};

export default Home;
