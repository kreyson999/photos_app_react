import React, { Component } from 'react';
import PhotoWidget from './PhotoWidget';
import SinglePhotoWidget from './SinglePhotoWidget';
import { Link } from 'react-router-dom'

class PhotosList extends Component {
  state = {
    photos: [],
    photoId: this.props.photoId,
    singlePhoto: null,
  }
  fetchPhotos() {
    fetch(`https://picsum.photos/v2/list?page=${this.props.page}&limit=12`)
    .then(response => response.json())
    .then(data => this.setState({ photos: data }))
    .catch(e => console.log(e))
  }
  fetchSinglePhoto() {

  }
  componentDidMount() {
    this.fetchPhotos();
  }
  componentDidUpdate() {
    this.fetchPhotos()
    if (this.state.photoId !== undefined) {
      fetch(`https://picsum.photos/id/${this.state.photoId}/info`)
      .then(response => response.json())
      .then(data => this.setState({ singlePhoto: data }))
    }
  }
  handleClickOnPhoto = (photoId) => {
    this.setState({ photoId: photoId });
  }
  handleClosingPhoto = () => {
    this.setState(() => ({ singlePhoto: null, photoId: undefined }));
  }
  render() { 
    return (
      <>
        <div className="photos-list">
          {this.state.photos.length === 0 ? <h1>Loading...</h1> : this.state.photos.map((photo) => {
            return <PhotoWidget key={photo.id} photo={photo} onClick={this.handleClickOnPhoto}/>
          })}
        </div>
        {this.state.singlePhoto !== null && this.state.photoId !== undefined ? <SinglePhotoWidget photo={this.state.singlePhoto} onClick={this.handleClosingPhoto}/> : null}
        <div className="pages-bar">
          {this.props.page > 1 ? <Link to={`/photos/${this.props.page - 1}`}>
            <button onClick={this.props.onClick.bind(this, 'previous')}>
              Previous Page
            </button>
          </Link> : <button className='disabled'>
              Previous Page
            </button>}
          <Link to={`/photos/${Number(this.props.page) + 1}`}>
            <button onClick={this.props.onClick.bind(this, 'next')}>
              Next Page
            </button>
          </Link>
        </div>
      </>
    );
  }
}
 
export default PhotosList;