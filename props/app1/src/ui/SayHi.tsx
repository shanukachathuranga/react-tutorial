interface GreetingProps{
    name:string;
    status:boolean;
    message:string;
}

const SayHi=({name,status,message}:GreetingProps)=>{
    return(
        <h1>
            {message} {name} ,status is {status?'active':'inactive'}
        </h1>
    )
}
export default SayHi;