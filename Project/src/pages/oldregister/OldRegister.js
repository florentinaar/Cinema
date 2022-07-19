// import React, {Component} from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardFooter,
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

// import {Form} from 'react-bootstrap';
// import { Link } from 'react-router-dom'




// export class Register extends Component {
//   constructor(props){
//       super(props);
//       this.state={deps:[]};
//       this.handleSubmit=this.handleSubmit.bind(this);
      
      
//   }


  

//   componentDidMount(){
//       this.refreshList();
//   }

//   refreshPage(){
//     window.location.reload();
//   }
  

//   refreshList(){
//     fetch(process.env.REACT_APP_API+'department')
//       .then(response=>response.json())
//       .then(data=>{
//           this.setState({deps:data});
//       });
//   }

//   backToLogin(){
    
//     this.props.history.push("/login");
    
//   }
  
  


//   handleSubmit(event){
//       event.preventDefault();
//       fetch(process.env.REACT_APP_API+'student',{
//           method: 'POST',
//           headers:{
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//           },
//           body:JSON.stringify({
//               Emri:event.target.Emri.value,
//               Mbiemri:event.target.Mbiemri.value,
//               Mosha:event.target.Mosha.value,
//               Gjinia:event.target.Gjinia.value,
//               Department:event.target.Department.value,
//               Email:event.target.Email.value,
//               Roles:event.target.Roles.value,
//               Password:event.target.Password.value,
              
//           })
//       })
//       .then(res=>res.json())
//       .then((result)=>{
//         this.props.history.push("/login");
//         this.refreshPage();
//           alert(result);
          
          
          
//       },
//       (error)=>{
//           alert('Failed');
//       })
//   }
//   render(){
//   return (
//     <div className="c-app c-default-layout flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md="9" lg="7" xl="6">
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm onSubmit={this.handleSubmit}>
//                   <h1>Register</h1>
//                   <p className="text-muted">Create your account</p>
//                   <CInputGroup className="mb-3" controlId="Emri">
//                     <CInputGroupPrepend>
//                       <CInputGroupText>
//                         <CIcon name="cil-user" />
//                       </CInputGroupText>
//                     </CInputGroupPrepend>
//                     <CInput type="text" placeholder="Emri" required name="Emri" />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3" controlId="Mbiemri">
//                     <CInputGroupPrepend>
//                       <CInputGroupText>
//                         <CIcon name="cil-user" />
//                       </CInputGroupText>
//                     </CInputGroupPrepend>
//                     <CInput type="text" placeholder="Mbiemri" required name="Mbiemri"  />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3" controlId="Mosha">
//                     <CInputGroupPrepend>
//                       <CInputGroupText>
//                         <CIcon name="cil-user" />
//                       </CInputGroupText>
//                     </CInputGroupPrepend>
//                     <CInput type="number" placeholder="Mosha" required name="Mosha"  />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3" controlId="Gjinia">
//                     <CInputGroupPrepend>
//                       <CInputGroupText>
//                         <CIcon name="cil-user" />
//                       </CInputGroupText>
//                     </CInputGroupPrepend>
//                     <Form.Control type="text" as="select" placeholder="Gjinia" required name="Gjinia" >
//                       <option>M</option>
//                       <option>F</option>
//                     </Form.Control>
//                   </CInputGroup>
//                   <CInputGroup className="mb-3" controlId="Department">
//                     <CInputGroupPrepend>
//                     <CInputGroupText>
//                         <CIcon name="cil-user" />
//                       </CInputGroupText>
//                     </CInputGroupPrepend>
//                     <Form.Control type="text" as="select" required name="Department"  >
//                       {this.state.deps.map(dep=>
//                         <option key={dep.DepId}>{dep.DepartmentName}</option>)}
//                     </Form.Control>
//                   </CInputGroup>
//                   <CInputGroup className="mb-3" controlId="Email">
//                     <CInputGroupPrepend>
//                     <CInputGroupText>@</CInputGroupText>
//                     </CInputGroupPrepend>
//                     <CInput type="email" placeholder="Email" required name="Email" />
                      
//                   </CInputGroup>
//                   <CInputGroup className="mb-3" controlId="Roles">
//                     <CInputGroupPrepend>
//                     <CInputGroupText>@</CInputGroupText>
//                     </CInputGroupPrepend>
//                     <CInput type="text" disabled defaultValue="User" placeholder="Roles" required name="Roles" />
//                   </CInputGroup>
//                   <CInputGroup className="mb-4" controlId="Password">
//                     <CInputGroupPrepend>
//                       <CInputGroupText>
//                         <CIcon name="cil-lock-locked" />
//                       </CInputGroupText>
//                     </CInputGroupPrepend>
//                     <CInput type="password" placeholder="Password" required name="Password" minLength="8" />
//                   </CInputGroup>
//                   <CButton color="success" block type="submit" >Create Account</CButton>
//                 </CForm>
//               </CCardBody>
//               <CCardFooter className="p-4">
//                 <CRow>
//                   <CCol xs="12" sm="12">
//                     <Link to="/login">
//                       <CButton className="btn-facebook mb-1" block type="button">Back to Login</CButton>
//                     </Link>
//                   </CCol>
                  
//                 </CRow>
//               </CCardFooter>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }
// }

// export default Register
