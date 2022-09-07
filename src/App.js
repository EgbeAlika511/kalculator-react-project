import './App.css';
import Button from './components/button';

// function App() {


//   return (
//     <>
//       {/* REGISTRATION FORM */}
//       {/* <div className="form-container">
//         <h1>Sign Up</h1>
//         <form>
//           <div className="text-field">
//             <input type="text" className="form-control" required/>
//             <label className="label">Username</label>
//           </div>

//           <div className="text-field">
//             <input type="email" className="form-control" required/>
//             <label className="label">Email</label>
//           </div>

//           <div className="text-field">
//             <input type="password" className="form-control" required/>
//             <label className="label">Password</label>
//           </div>

//           <button className = "btn">Register</button>
//         </form>
//       </div> */}
//     </>
//   );
// }

// const App = (() => <div><h1>Hello People</h1></div>);

function App(){
  return (<div className="container">
    <form className="form-container">
      <input className="form-control" type="text" placeholder="Username" />
      <input className="form-control" type="password" placeholder="Password" />
      <input className="form-control" type="password" placeholder="Confirm Password" />
      <div className="btn-container">
        <Button name = {"Back"} classAttrib={"btn back-btn"} />
        <Button name = {"Submit"} classAttrib={"btn submit-btn"} />
      </div>
    </form>
  </div>)
}

export default App