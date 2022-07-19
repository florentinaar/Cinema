import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddMovieModal} from './AddMovieModal';
import {EditMovieModal} from './EditMovieModal';
export class Events extends Component{

    constructor(props){
        super(props);
        this.state={events:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'events')
        .then(response=>response.json())
        .then(data=>{
            this.setState({events:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    delete(EventID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'events/'+EventID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

   
    render(){ 

        const {events, EventID,Title, Image,Date,Movie}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        // let editModalClose=()=>this.setState({editModalShow:false});
        return(
            
            
            <div >
                 <div className="container">
            <h3 className="m-3 d-flex justify-content-center">
            Movies
            </h3>
            </div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Movie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(Event=>
                            <tr key={Event.EventID}>
                               <td>{Event.EventID}</td>
                                <td>{Event.Image}</td>
                                <td>{Event.Date}</td>
                                <td>{Event.Movie}</td>
                               
                              
                                <td>
<ButtonToolbar>
    {/* <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        MovieID:Movie.MovieID,Name:Movie.Name,Categories:Movie.Categories,Price:Movie.Price})}>
            Edit
        </Button> */}

        <Button className="mr-2" variant="danger"
    onClick={()=>this.delete(Movie.MovieID)}>
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

                {/* <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add ContactForm</Button>

                    <AddMovieModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar> */}
            </div>
        )
    }
}