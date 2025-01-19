import { useState, useRef, useEffect } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

const chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const handleEmoji = e => {
    setText((perv) => perv + e.emoji)
    setOpen(false)
  }
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])
  
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <span>Saleh Osama</span>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="phone.png" alt="" />
          <img src="video.png" alt="" />
          <img src="info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Excepturi debitis tempore fugit mollitia rerum possimus, similique voluptates velit minima perspiciatis. Doloribus perferendis error ab, earum consequatur beatae asperiores?</p>
            <span>1 min ago</span>
          </div>
        </div>
        
        <div className="message own">
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Excepturi debitis tempore fugit mollitia rerum possimus, similique voluptates velit minima perspiciatis. Doloribus perferendis error ab, earum consequatur beatae asperiores?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1446" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Excepturi debitis tempore fugit mollitia rerum possimus, similique voluptates velit minima perspiciatis. Doloribus perferendis error ab, earum consequatur beatae asperiores?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium. Excepturi debitis tempore fugit mollitia rerum possimus, similique voluptates velit minima perspiciatis. Doloribus perferendis error ab, earum consequatur beatae asperiores?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="img.png" alt="" />
          <img src="camera.png" alt="" />
          <img src="mic.png" alt="" />
        </div>
        <input type="text" value={text} placeholder='type a message.' onChange={(e) => setText(e.target.value)}/>
        <div className="emoji">
          <img src="emoji.png" alt="" onClick={() => setOpen((perv) => !perv)} />
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default chat
