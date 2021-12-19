import { Link } from 'react-router-dom'

function PhotoWidget(props) {
  const linkExp = `id/${props.photo.id}`
  return (
    <Link to={linkExp}>
      <div onClick={props.onClick.bind(this, props.photo.id)} className="photo-widget">
        <img src={props.photo.download_url} alt={props.photo.author} />
        <div className="on-hover">
          <h1>{props.photo.author}</h1>
        </div>
      </div>
    </Link>
  );
}
 
export default PhotoWidget;