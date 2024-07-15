
import css from '../css/Axios.module.css'

const ArticleList = ({ items }) => {
  return(
  <ul className={css.ul}>
    {items.map(({ objectId, url, title }) => (
      <li
        className={css.li} 
        key={objectId}>
        <a
          href={url}
          className={css.a}
          target="_blank"
          rel='noreferrer noopener'>
          {title}
        </a>
      </li>
    ))}
    </ul>
  )
}

export default ArticleList