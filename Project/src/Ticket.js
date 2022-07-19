import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
 import {AddTicketModal} from './AddTicketModal';
// import {EditMovieModal} from './EditMovieModal';
export class Ticket extends Component{

    constructor(props){
        super(props);
     this.state={tickets:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'ticket')
        .then(response=>response.json())
        .then(data=>{
            this.setState({tickets:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    delete(TicketID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'ticket/'+TicketID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

   
    render(){ 

        const {tickets, TicketID,Seat, Movie,Price}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        // let editModalClose=()=>this.setState({editModalShow:false});
        return(
            
            
            <div >
                 <div className="container">
            <h3 className="m-3 d-flex justify-content-center">
            Ticket
            </h3>
            </div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                        <th>Seat</th>
                        <th>movie</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map(Ticket=>
                            <tr key={Ticket.TicketID}>
                               <td>{Ticket.TicketID}</td>
                                <td>{Ticket.Seat}</td>
                                <td>{Ticket.Movie}</td>
                                <td>{Ticket.Price}</td>
                               
                              
                                <td>
<ButtonToolbar>
    {/* <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        MovieID:Movie.MovieID,Name:Movie.Name,Categories:Movie.Categories,Price:Movie.Price})}>
            Edit
        </Button> */}

        <Button className="mr-2" variant="danger"
    onClick={()=>this.delete(Ticket.TicketID)}>
            Delete
        </Button>

        {/* <EditMovieModal show={this.state.editModalShow}
        onHide={editModalClose}
        MovieID={MovieID}
        Name={Name}
        Categories={Categories}
        Price={Price}/> */}
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add </Button>

                    <AddTicketModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}