import { Menu } from 'antd'
import { useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { AppStateType } from '../../Redux/redux-store'

export const Navbar = () => {
  const history = useHistory()
  const href = useLocation().pathname
  const id = useSelector((state: AppStateType) => state.auth.data.id)

  const Url = (id: number | null) => {
    history.push({
      pathname: `/profile`,
      search: `?userId=${id}`,
    })
  }

  return (
    <Menu
      mode='inline'
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
      selectedKeys={[href]}
    >
      <Menu.Item key='/news'>
        <Link to='/news'>News</Link>
      </Menu.Item>
      <Menu.Item key='/users'>
        <Link to={'/users'}>Users</Link>
      </Menu.Item>
      <Menu.Item key='/dialogs'>
        <Link to='/dialogs'>Messages</Link>
      </Menu.Item>
      <Menu.Item key='/chat'>
        <Link to='/chat'>Chat</Link>
      </Menu.Item>

      <Menu.Item key='/music'>
        <Link to='/music'>Music</Link>
      </Menu.Item>
      <Menu.Item key='/profile'>
        <div
          onClick={() => {
            Url(id)
          }}
        >
          Profile
        </div>
      </Menu.Item>
    </Menu>
  )
}
