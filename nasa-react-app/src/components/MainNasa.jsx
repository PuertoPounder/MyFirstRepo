export default function MainNasa({ data }) {
    return (
      <div className="imgContainer">
        {data.media_type === 'image' ? (
          <img
            src={data.hdurl ?? data.url}
            alt={data.title}
            className="bgImage"
          />
        ) : data.media_type === 'video' ? (
          <div className="videoContainer">
            <iframe
              title={data.title}
              src={data.url}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
              className="bgVideo"
            />
          </div>
        ) : null}
      </div>
    )
  }
  
