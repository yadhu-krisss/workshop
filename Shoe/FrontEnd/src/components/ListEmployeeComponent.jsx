import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { BsFillTrashFill,BsPencilFill,BsFillEyeFill,BsFillPlusCircleFill } from "react-icons/bs";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/edit/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add/_add');
    }

    render() {
        return (
            <div>
                 <div className = "row mt-4">
                    <button className="btn btn-primary pt-2 pb-2 float-right" onClick={this.addEmployee}><BsFillPlusCircleFill/>  Add </button>
                 </div>
                 <br></br>
                 <div className = "card p-5 row cardshadow3" id='t'>
                        <table className = "table table-bordered">

                            <thead>
                                <tr>
                                    <th className='text-center'> PROFILE</th>
                                    <th className='text-center'> BRAND</th>
                                    <th className='text-center'> SIZE</th>
                                    <th className='text-center'> PRICE</th>
                                    <th className='text-center'> ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td className='text-center'><img src={employee.img} className="profile-image" alt="dynamic" /></td>
                                             <td> {employee.brand} </td>   
                                             <td> {employee.size}</td>
                                             <td> {employee.price}</td>
                                             <td className='text-center'>
                                                 <button onClick={ () => this.viewEmployee(employee.id)} className="btn-hover btn-hover-x color-7"><BsFillEyeFill/></button>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="ml-2 btn-hover btn-hover-x color-9"><BsPencilFill/></button>
                                                 <button onClick={ () => this.deleteEmployee(employee.id)} className="ml-2 btn-hover btn-hover-x color-2"><BsFillTrashFill/> </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
