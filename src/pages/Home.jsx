import { useContext } from "react";
import ArticleCategories from "../components/ArticleCategories";
import CategoryContext from "../context/CategoryContext";

const Home = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <>
      <main>
        {categories &&
          categories.map((category) => {
            return (
              <ArticleCategories
                category={category}
                key={"section" + category}
              />
            );
          })}
      </main>
    </>
  );
};

export default Home;
