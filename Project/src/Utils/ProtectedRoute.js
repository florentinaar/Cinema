// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import {render} from "enzyme";


// const ProtectedRoute = ({currentUser, component: Component, ...rest}) => {
//     return (
//         <Route
//             {...rest}
//             render = {props => {
//               if (!currentUser) {
//                 return <Redirect to="/login" />;
//               }

//               if (currentUser[0].Roles !== "Admin") {
//                 return <Redirect to="/vitistudimit" />;
//               }

//               if(currentUser) {
//                 return Component ? <Component {...props} {...rest} /> : render(props);
//               }
//             }}
//         />
//     )
// }

// export default ProtectedRoute
