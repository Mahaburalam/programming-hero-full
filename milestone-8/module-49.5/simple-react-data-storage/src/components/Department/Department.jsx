/* eslint-disable react/prop-types */
import React from 'react';

const Department = () => {
    const deptData = [
        {id:'1', name:"Information Technology", location:"DT5 Building"},
        {id:'2', name:"Social Science", location:"DU Building"},
        {id:'3', name:"Cultural Event", location:"JU Building, Dhaka"},
        {id:'4', name:"Management And Information Technologies", location:"MIST Building"},
        {id:'5', name:"Marketing And Business", location:"BUET Building"}
    ]
    return (
        <div>
            <h3>Call data from an array of object</h3>
            {deptData.map( department => <ViewDept 
            deptInfo={department}
            key={department.id}
            ></ViewDept>)}
        </div>
    );
};

const ViewDept = (props) =>{
    // console.log(props.data);
    const {name, location, id} = props.deptInfo;
    return(
        <div style={{border:"2px solid gray", margin:"7px"}}>
            <p>ID : {id}</p>
            <p>Department Name : {name}</p>
            <p>Department Location : {location}</p>
        </div>
    )
}

export default Department;