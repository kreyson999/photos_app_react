import './Photospage.css'
import PhotosList from './PhotosList';
import { useParams } from 'react-router-dom'
import React from 'react';

function Photospage() {
  let params = useParams();
  const [page, setPage] = React.useState(params.pageId ?? 1);
  const photoId = params.photoId;

  const changePage = (text) => {
    if (text === 'previous' && params.pageId > 1) {
      setPage(Number(params.pageId) - 1)
    } else if (text === 'next') {
      setPage(Number(params.pageId) + 1)
    }
  }
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
      <PhotosList page={page} photoId={photoId} onClick={changePage}/>
    </div>
  );
}

export default Photospage;