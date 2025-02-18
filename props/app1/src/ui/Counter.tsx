

interface CounterProps{
    count:number;
}
const Counter = ({count}:CounterProps)=>{
    return(
        <div>
            <mark>Counter:{count}</mark>
            <br/>
            <p>we are trying to edit the count inside of the child component.</p>
        </div>
    )
}
export default Counter;