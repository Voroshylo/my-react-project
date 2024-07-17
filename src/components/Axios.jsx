import { useEffect, useState } from "react";
import axios from "axios";
import css from '../css/Axios.module.css'
import ArticleList from "./ArticleList";
import { BallTriangle } from 'react-loader-spinner'
import { fetchArticlesWithTopic } from "../articles-api";
import SearchForm from "./SearchForm";

const Axios = () => {
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        
        const data = await fetchArticlesWithTopic('react')
        setArticles(data);
      
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, []);
  
  return (
    <div className={css.div}>
      <h1>Latest articles</h1>
      <SearchForm onSearch={handleSearch}/>
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