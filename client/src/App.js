import './App.css';
import React from 'react';

class App extends React.Component{
  constructor()
  {
    super();
    this.state = 
    {
      dates : [
                "03-Aug-2020",
                "09-Sep-2020",
                "08-Jun-2020",
                "08-Feb-2020"
              ]
    } 
    
  }

  render(){
    /* var months = ["Jan", "Feb", "Mar","Apr","May","Jun","July","Aug","Sep","Oct",
  "Nov","Dec"] */
    return(
      <div>
    
        <ol>
          {this.state.dates.map((subDates, sIndex) => {
           
             /* this.state.dates.indexOf('03-Dec-2020'); */
             /* this.state.dates.splice(this.state.dates.indexOf('03-Dec-2020'));
           <div>{subDates}</div> */

          /* for(var i=0 ;i<=months.length;i++){
            var res1 = subDates.replace(months[i], i);
          } */
          var res1 = subDates.replace("Jan", "01");
          var res2 = subDates.replace("Feb", "02");
          var res3 = subDates.replace("Mar", "03");

          var res4 = subDates.replace("Apr", "04");
          var res5 = subDates.replace("May", "05");
          var res6 = subDates.replace("Jun", "06");
          var res7 = subDates.replace("July", "07");
          var res8 = subDates.replace("Aug", "08");
          var res9 = subDates.replace("Sep", "09");
          var res10 = subDates.replace("Oct", "10");
          var res11 = subDates.replace("Nov", "11");
          var res12 = subDates.replace("Dec", "12");
          

    
          return <div> <div> <div>{res1} {res2} </div> <div>{res3} {res4} </div> </div>
          <div> <div>{res5} {res6} </div> <div>{res7} {res8} </div> </div>
          <div> <div>{res9} {res10} </div> <div>{res11} {res12} </div> </div> 
           <div>------------------------------------</div> </div> 
          /*  return <div>{res1}</div> */
          
            }
          )
        }
        </ol>
       
        
 
      
      </div>
      

    )
  }
  
}

export default App;
