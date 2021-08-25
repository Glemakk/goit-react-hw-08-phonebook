import { useDispatch, useSelector } from 'react-redux'
import authSelectors from '../../redux/selectors/auth-selectors'
import { logOut } from '../../redux/operations/auth-operations'
// import { toast, Zoom } from 'react-toastify'
import defaultAvatar from './default-avatar.png'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
}

const UserMenu = () => {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUserName)
  const avatar = defaultAvatar

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  )
}
export default UserMenu
