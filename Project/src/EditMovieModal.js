import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditMovieModal extends Component{
    constructor(props){
       
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={Categories:[]};
    }
    componentDidMount(){
        fetch(process.env.REACT_APP_API+'moviecategories')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Categories:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Movie',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                MovieID:event.target.MovieID.value,
                Name:event.target.Name.value,
                Categories:event.target.Categories.value,
                Price:event.target.Price.value
            
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
        
    }
    
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit 
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="MovieID">
                        <Form.Label>MovieID</Form.Label>
                        <Form.Control type="text" name="MovieID" required
                        disabled
                        defaultValue={this.props.MovieID} 
                        placeholder="MovieID"/>
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        defaultValue={this.props.Name}
                        placeholder="Name"/>
                    </Form.Group>
                    <Form.Group controlId="Categories">
                        <Form.Label>Categories</Form.Label>
                        <Form.Control as="select">
                        {this.state.Categories.map(dep=>
                            <option key={dep.CID}>{dep.Name}</option>)}
                        </Form.Control>
                        
                    </Form.Group>
                    <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="Price" required 
                        defaultValue={this.props.Price}
                        placeholder="Price"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update 
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}