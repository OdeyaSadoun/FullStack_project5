import React, { useState, useEffect } from 'react';
import Server from './Server';
import '../CSS/Album.css';
import ApplicationPage from './ApplicationPage';
const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState(10);
  const [hasMorePhotos, setHasMorePhotos] = useState(true);

  // Fetch albums for the active user
  useEffect(() => {
    const fetchAlbums = async () => {
      // Retrieve the active user from local storage
      const user = JSON.parse(localStorage.getItem('user'));

      if (user) {
        const userAlbums = await Server.getAlbumsByUserId(user.id);
        setAlbums(userAlbums);
      }
    };

    fetchAlbums();
  }, []);

 // Fetch photos for the selected album
 useEffect(() => {
  const fetchPhotos = async () => {
    if (selectedAlbum && photos.length === 0) { // Add condition to check if photos haven't been fetched yet
      setLoading(true);
      const albumPhotos = await Server.getPhotosByAlbumId(selectedAlbum.id);
      setPhotos(albumPhotos);
      setLoading(false);
      setVisiblePhotos(10);
      setHasMorePhotos(true);
    }
  };

  fetchPhotos();
}, [selectedAlbum, photos]);

  // Load more photos
  const loadMorePhotos = () => {
    const totalVisiblePhotos = visiblePhotos + 10;
    if (totalVisiblePhotos >= photos.length) {
      setVisiblePhotos(photos.length);
      setHasMorePhotos(false);
    } else {
      setVisiblePhotos(totalVisiblePhotos);
    }
  };

  // Handle album selection
  const handleAlbumSelect = (album) => {
    setSelectedAlbum(album);
  };

  // Generate photo grid
  const generatePhotoGrid = () => {
    const gridPhotos = photos.slice(0, visiblePhotos);
    const grid = [];

    for (let i = 0; i < gridPhotos.length; i += 4) {
      const row = gridPhotos.slice(i, i + 4).map((photo) => (
        <div key={photo.id} className="grid-item">
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ));
      grid.push(<div key={i} className="grid-row">{row}</div>);
    }

    return grid;
  };

  return (
    <><ApplicationPage></ApplicationPage><div className="albums-comtainer">
      <h1>Albums</h1>
      {albums.map((album) => (
        <div key={album.id}>
          <button onClick={() => handleAlbumSelect(album)}>
            {album.title}
          </button>
        </div>
      ))}
      {selectedAlbum && (
        <div>
          <h2>Photos</h2>
          {loading ? (
            <p>Loading photos...</p>
          ) : (
            <div className="grid-container">
              {generatePhotoGrid()}
            </div>
          )}
          {hasMorePhotos && (
            <button onClick={loadMorePhotos}>Load More Photos</button>
          )}
        </div>
      )}
    </div></>
  );
};

export default Albums;
