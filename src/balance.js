
import '../src/css/balance.css'
function Budgetbalance(props){
    return(
        <div>
            <h4>Balance</h4>
            <h2>R{props.income - props.expense}</h2>
              
         <div className="balance">
             <div>
                 <h3 >Income</h3>
                 <h3 style={{color:"green "}}>R{props.income}</h3>
             </div>
              <div className="line">
                 <div>
                      <h3 >Expense</h3>
                      <h3 style={{color:"red "}}>R{props.expense}</h3>
                 </div>
             </div>      
          </div>
        </div>
    );
}

export {Budgetbalance}

