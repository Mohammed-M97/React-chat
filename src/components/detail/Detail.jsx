import './detail.css'

const detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="avatar.png" alt="" />
        <h2>Saleh Osama</h2>
        <p>Lorem ipsum, dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1446" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1446" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1446" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1446" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="download.png" alt="" className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photo</span>
            <img src="arrowDown.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default detail
