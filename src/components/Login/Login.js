// import React from 'react';
// import './Login.css';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { Link } from 'react-router-dom';

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app();
// }

// const Login = () => {

//     return (
//         <div className="container">
//             <div className="row mt-5">
//                 <div className="col-md-6 offset-md-3">
//                 <h2>Log In</h2>
//             <form action="">
//                 <div class="form-group">
//                     <label for="exampleInputEmail1">Email</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required/>
//                 </div>
//                 <div class="form-group">
//                     <label for="exampleInputEmail1">Password</label>
//                     <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password" required/>
//                 </div>
//                 <input className="account" type="submit" value="Create an Account"/>
//                 <div className="text-center">
//                 <span>Don't have an account?</span>
//                 <Link to="/signup"> Create an account</Link>
//                 </div>
//             </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;