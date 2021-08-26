import { useDispatch, useSelector } from 'react-redux'
import authSelectors from '../../redux/selectors/auth-selectors'
import { logOut } from '../../redux/operations/auth-operations'
// import { toast, Zoom } from 'react-toastify'
import defaultAvatar from './default-avatar.png'
import { Span, Img, LogOutBtn } from './UserMenu.styled'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
}

const UserMenu = () => {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUserName)
  const avatar = defaultAvatar

  return (
    <div style={styles.container}>
      <Img src={avatar} alt="avatar" width="32" />
      <Span>Welcome, {name}</Span>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOutBtn>
    </div>
  )
}
export default UserMenu
