import React from "react"
import '../src/css/displayTransaction.css'
function DisplayTransaction (props){
 return (
     <div>

        
         {props.list.map((item) => (
         <div style={{marginTop:"5%"}}>
            <h1 style={{paddingTop:"5%"}}>Transaction history</h1>
             {item.transactionType=="Expense"? (
             <div className="transaction-item"  style={{borderRight:"5px solid red"}}>
                 <div>
                     <h4 style={{paddingLeft:'12px',paddingTop:"25px"}}>
                         {item.item}
                     </h4> 
                 </div>

                 <div> 
                     <h4 style={{paddingLeft:'290px',paddingTop:"25px"}}>
                         {item.amount}
                     </h4>
                  </div> 
              
             </div>
              ) : (
             <div className="transaction-item"  style={{borderRight:"5px solid green"}}>
                 <div>
                     <h4 style={{paddingLeft:'12px',paddingTop:"25px"}}>
                         {item.item}
                     </h4> 
                 </div>

                  <div> 
                     <h4 style={{paddingLeft:'290px',paddingTop:"25px"}}>
                         {item.amount}
                     </h4>
                 </div>  
             </div>
              )
          }
         </div>
          ))}
     </div>
    );
}

export {DisplayTransaction};

