import { Link } from 'react-router-dom'

const SinglePhotoWidget = (props) => {
  return (
    <div className="single-photo-widget">
      <div className="container">
        <div className="img-container">
          <img src={props.photo.download_url} alt="" />
        </div>
        <aside>
          <Link to="/photos/"><button onClick={props.onClick}><span className="material-icons-outlined">close</span></button></Link>
          <h1>{props.photo.author}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, magnam?</p>
        </aside>
      </div>
    </div>
  )
}
export default SinglePhotoWidget