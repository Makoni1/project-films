function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
  <div className="card movie">
    <div className="card-image waves-effect waves-block waves-light">

      {
        poster=== 'N/A' ?
        <img className="activator" src={`https://placehold.co/300x400?text=${title}`}/> 
        :
        <img className="activator" alt="dcs" src={poster}/>
      }
    </div>  
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p></p>
    </div>
  </div>

  )

}
export { Movie }
