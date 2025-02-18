
interface CustomerProps{
    name:string;
    address:string;
    salary?:string;
    status?:boolean;
}
const CustomerView = ({name,address,salary}:CustomerProps)=>{
    return (
        <div style={{border: '1px solid red', padding: '10px', borderRadius: '5px'}}>
            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Salary</td>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{salary}</td>
                </tr>
            </table>
        </div>
    )
}
export default CustomerView;