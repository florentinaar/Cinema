import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddMovieModal} from './AddMovieModal';
import {EditMovieModal} from './EditMovieModal';
export class Movie extends Component{

    constructor(props){
        super(props);
        this.state={movies:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'movie')
        .then(response=>response.json())
        .then(data=>{
            this.setState({movies:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    delete(MovieID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'movie/'+MovieID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

   
    render(){ 

        const {movies, MovieID,Name, Categories,Price}=this.state;
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
                        <th>Name</th>
                        <th>Categories</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(Movie=>
                            <tr key={Movie.MovieID}>
                               <td>{Movie.MovieID}</td>
                                <td>{Movie.Name}</td>
                                <td>{Movie.Categories}</td>
                                <td>{Movie.Price}</td>
                               
                              
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        MovieID:Movie.MovieID,Name:Movie.Name,Categories:Movie.Categories,Price:Movie.Price})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.delete(Movie.MovieID)}>
            Delete
        </Button>

        <EditMovieModal show={this.state.editModalShow}
        onHide={editModalClose}
        MovieID={MovieID}
        Name={Name}
        Categories={Categories}
        Price={Price}/>
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add ContactForm</Button>

                    <AddMovieModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}