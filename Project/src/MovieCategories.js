import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddMovieCategoriesModal} from './AddMovieCategoriesModal';
import {EditMovieCategoriesModal} from './EditMovieCategoriesModal';

export class MovieCategories extends Component{

    constructor(props){
        super(props);
        this.state={Categories:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'moviecategories')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Categories:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    delete(CID){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'moviecategories/'+CID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){ 

        const {Categories, CID,Name}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            
            
            <div >
                 <div className="container">
            <h3 className="m-3 d-flex justify-content-center">
            MovieCategories
            </h3>
            </div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                        <th>Name</th>
                      
                        </tr>
                    </thead>
                    <tbody>
                        {Categories.map(Category=>
                            <tr key={Category.CID}>
                               <td>{Category.CID}</td>
                                <td>{Category.Name}</td>
                              
                               
                              
                                <td>
 <ButtonToolbar>
   <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        CID:Category.CID,Name:Category.Name})}>
            Edit
        </Button>

          <Button className="mr-2" variant="danger"
    onClick={()=>this.delete(Category.CID)}>
            Delete
        </Button>

        <EditMovieCategoriesModal show={this.state.editModalShow}
        onHide={editModalClose}
        CID={CID}
        Name={Name}/>
</ButtonToolbar> 

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                { <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add </Button>

                    <AddMovieCategoriesModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar> }
            </div>
        )
    }
}