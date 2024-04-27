// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


//components  using variable
var navbar = (
  <nav>
    <h1>Hello World</h1>
  </nav>
)


// component creation
function NavBar() {
  return(
    <h1>Hello World</h1>
  )
}
// React 17
// ReactDOM.render(navbar , document.getElementById("root"));

//React 18
// ReactDOM.createRoot(document.getElementById("root")).render(navbar);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in 10 days
        </a>
      </header>
    </div>
  );
}

export default App;
