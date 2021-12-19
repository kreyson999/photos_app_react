import './Photospage.css'
import PhotosList from './PhotosList';
import { useParams } from 'react-router-dom'

function Photospage() {
  let params = useParams();
  const page = params.pageId ?? 1;
  const photoId = params.photoId;
  return (
    <div className="container">
      <div className="filter-menu">
        <button>
          <div className="btn-text">Filtruj</div>
          <div className="btn-icon">
            <span className="material-icons-outlined">
              dashboard
            </span>
          </div>
        </button>
      </div>
      <PhotosList page={page} photoId={photoId}/>
    </div>
  );
}

export default Photospage;