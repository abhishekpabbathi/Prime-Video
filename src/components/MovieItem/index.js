import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = ({eachMovie}) => {
  const {thumbnailUrl, videoUrl} = eachMovie

  return (
    <li className="each-list-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
      >
        {close => (
          <div
            style={{
              backgroundColor: 'black',
              padding: '10px',
              width: '80vw',
              maxWidth: '900px',
            }}
          >
            <button
              data-testid="closeButton"
              type="button"
              onClick={close}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                float: 'right',
              }}
            >
              <IoMdClose size={28} color="white" />
            </button>

            <div
              style={{
                marginTop: '40px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="400px"
              />
            </div>
          </div>
        )}
      </Popup>
    </li>
  )
}

export default MovieItem
