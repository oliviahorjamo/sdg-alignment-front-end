const FirmDetails = ({ firm, products, handle }) => {
    console.log('firm in component', firm)
    console.log(products)

    if (Object.keys(firm).length === 0) {
        return null
    }
    return (
    <div className="FirmDetails">
        {firm.name} 
        <br></br>
        <button onClick = {event => {handle(event, firm)}}>return to main page</button>
    </div>
    )
  }
  
  export default FirmDetails