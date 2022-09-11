const Firm = ({ selected_firm, firm, handle }) => {
    if (Object.keys(selected_firm).length > 0) {
        return null
    }
    return (
    <li className="firmList">
        {firm.name}  
        <button onClick = {(event) => {handle(event, firm)}}>select</button>
    </li>
    )
  }
  
  export default Firm