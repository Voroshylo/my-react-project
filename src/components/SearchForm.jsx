import css from '../css/SearchForm.module.css'


const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    onSearch(topic);
    form.reset()
  }
  return (
    <div className={css.div}>
      <form onSubmit={handleSubmit}>
    <label className={css.label}>
      <span className={css.cpan}>
        Search
      </span>
    </label>
    < input
    className={css.input}
          placeholder='search'
          type='text'
          name='topic'/>
      </form>
    </div>
  )
}

export default SearchForm