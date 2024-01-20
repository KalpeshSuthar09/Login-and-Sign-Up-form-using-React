import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="logo-box">
          <img src="./google.png" alt="logo" className="logo" />
          <h2>Sign In to Google</h2>
          <button>
            <img src="./twitter.gif" alt="logo" />
            Sign In to Twitter
          </button>
          <button>
            <img src="./apple.gif" alt="logo" />
            Sign In to Apple
          </button>

          <hr />
          <span>Or</span>

          <form action="">
            <input type="text" placeholder="Enter your email" />
            <button className="btn">Next</button>
          </form>

          <a href="/">Forgot Password</a>
          <a href="/">Don't have an Account</a>
        </div>
      </div>
    </>
  );
}

export default App;
