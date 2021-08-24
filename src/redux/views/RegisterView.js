const RegisterView = () => (
  <form>
    <div>
      <label>
        Name <input type="text" name="name"></input>
      </label>
    </div>
    <div>
      <label>
        Login <input type="text" name="login"></input>
      </label>
    </div>
    <div>
      <label>
        Password<input type="text" name="password"></input>
      </label>
    </div>

    <button type="button">Sign in</button>
  </form>
)

export default RegisterView
