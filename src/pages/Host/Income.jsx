import {Link} from "react-router-dom";

export default function Income() {
    const transactionsData = [
        {amount: "$720", date: "July 4, '23"},
        {amount: "$560", date: "Jan 3, '23"},
        {amount: "$980", date: "Dec 12, '22"}
    ]

    return (
        <div className="income-container">
            <h1>Income</h1>
            <p>Last <span>30 days</span></p>
            <h1>$3,250</h1>
            <img src="src/images/income-graph.png" />
            
            <h3>Your transactions (3)</h3>
            <p>Last <span>30 days</span></p>
            {transactionsData.map( (transaction, index) => (
                <div key={index} className="transaction">
                    <h1>{transaction.amount}</h1>
                    <h2>{transaction.date}</h2>
                </div>
            ))}
                    
            

        </div>
    )
}
