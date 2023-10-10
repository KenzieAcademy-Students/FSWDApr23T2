import "./App.css";

const App = () => {
  // This function should be called with a photo id to fetch a photo.
  const getPhotoFromId = (photoId) => {
    return `https://picsum.photos/id/${photoId}/200/200`;
  };
  // This URL can be used to get an array of objects that contain information about various photos.
  const PHOTO_LIST_URL = "https://picsum.photos/list";

  return (
    <div className="App">
      <header>
        <h1>Photo Wall</h1>
        <p>
          Follow the instructions to finish this activity. Then, delete this
          paragraph.
        </p>
      </header>
      <div className="collage">
        {/* {photos &&
          photos.map((photo) => {
            console.log(photo);
            return (
              <img
                alt="3. Fill me in with the photo's filename"
                key="4. Fill me in with the photo's id"
                src="5. Call the getPhotoFromId function"
              />
            );
          })} */}
      </div>
    </div>
  );
};

export default App;
