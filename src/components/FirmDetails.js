//import firms from "../services/firms"

import BarChart from "./BarChart"

const goals = {
    1: 'no poverty',
    2: 'zero hunger',
    3: 'good health and well-being',
    4: 'quality education'
}

const FirmDetails = ({ firm, products, handle }) => {

    if (Object.keys(products).length === 0) {
        return null
    }

    const scaleFactor = products.reduce((sum, object) => {
        return sum + Number(object.revenue_percent)
    }, 0)

    const getSumByGoal = (products, goal) => {
        return products.reduce((accumulator, current) => 
        accumulator + Number(current[`a${goal}`] * Number(current.revenue_percent) / scaleFactor),0)
    }

    const alignments = {}

    for (const goal in goals) {
        const alignment = getSumByGoal(products, goal)
        alignments[goals[goal]] = alignment
    }

    return (
    <div className="FirmDetails">
        <h2>{firm.name}</h2> 
        <p> This firm produces the following products:
            {products.map(product => 
            <li key = {product.name}>{product.name}</li>
            )}
        </p>
        <h3>The alignment of the firm with different UN SDG goals:</h3>
        <div style={{height:'40%',width:'50%'}}>
            <BarChart alignments={alignments} ></BarChart>
        </div>
        <button onClick = {event => {handle(event, firm)}}>return to main page</button>
    </div>
    )
  }

  
  export default FirmDetails

