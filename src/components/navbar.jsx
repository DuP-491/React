import React, { Component } from "react";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Items in list {props.count}</a>
      </div>
    </nav>
  );
};

export default Navbar;
// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand">Items in list {this.props.count}</a>
//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar;
