import { useEffect, useState } from "react";
import axios from "axios";
import css from '../css/Axios.module.css'
import ArticleList from "./ArticleList";
import {BallTriangle} from 'react-loader-spinner'

const Axios = () => {
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        console.log(response)
        setArticles(response.data.hits)
      } catch (error) {
        
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, []);
  
  return (
    <div className={css.div}>
      <h1>Latest articles</h1>
      {loading && <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#FE5568"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default Axios