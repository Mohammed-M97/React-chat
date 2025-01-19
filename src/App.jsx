import List from "./components/list/list"
import Chat from "./components/chat/chat"
import Detail from "./components/detail/Detail"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"


const App = () => {
  let user = false
  return (
    <div className='container'>
      {
        user ?
          <>
            <List />
            <Chat />
            <Detail />
          </>
          :
          <Login />
      }
      <Notification />
    </div>
  )
}

export default App