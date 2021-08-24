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
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, </span>
      <button
        type="button" //onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  )
}
export default UserMenu
