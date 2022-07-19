// import React, { useState } from 'react'
// import axios from 'axios';

// import { Link } from 'react-router-dom'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CInput,
//   CInputGroup,
//   CInputGroupPrepend,
//   CInputGroupText,
//   CRow
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { setUserSession } from 'src/Utils/Common';

// const Login = (props) => {

//   const [username,setUsername] = useState('');
//   const [password,setPassword] = useState('');
//   const [error,setError] = useState(null);
//   const [loading,setLoading] = useState(false);
//   const refreshPage = ()=>{
//     window.location.reload();
//  }

//   const handleLogin = () =>{
//     setError(null);
//     setLoading(true);

//     axios.post(process.env.REACT_APP_API+'user',{
//       username : username,
//       password : password,
//     }).then(response => {
//       setLoading(false);
//       setUserSession(response.data.token, response.data.user);
//       localStorage.setItem('currentUser', JSON.stringify(response.data));
//       props.history.push("/dashboard");
//       refreshPage();
//     }).catch(error => {
//       setLoading(false);
//       if (error.response.status === 401 || error.response.status === 400){
//         setError(error.response.data.message);
//       }
//       else{
//         setError("Something went wrong. Please try again later.");
//       }
//     });



   
//   }

//   return (
//     <div className="c-app c-default-layout flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md="8">
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-muted">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-user" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-lock-locked" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                      
//                     </CInputGroup>
//                     {error && <div className="error" style={{color:"red"}}>{error}</div>}
//                     <CRow>
//                       <CCol xs="6">
//                         <CButton color="primary" className="px-4" value={loading ? "loading ..." : "Login"} disabled={loading} onClick={handleLogin}>Login</CButton>
//                       </CCol>
//                       <CCol xs="6" className="text-right">
//                         <CButton color="link" className="px-0">Forgot password?</CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>Regjistrohu në njerin nga kolegjet më prestigjioze në rajon !</p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Login
