interface StudentDataProps{
    id:number;
    name:string;
}

const StudentData = ({id,name}:StudentDataProps) => {
    return(
            
            <li>{id} | {name}</li>
    )
}

export default StudentData;