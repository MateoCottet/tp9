// pages/register.js
export default function Register() {
    return (
      <div className="register-page">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  