var prouductName = document.getElementById("prouductName"); // hold all input 
var prouductprice = document.getElementById("prouductPrice");
var prouductcat = document.getElementById("prouductCat");
var prouductdis = document.getElementById("prouductdis");
var searchPr = document.getElementById("searchPr");
var store = [];


// to display the data stored in the local storge\
if (localStorage.getItem("proudct") !=null ) // already has products to display 
{
    store=JSON.parse(localStorage.getItem("proudct"));
    displyProuduct(store)
}


// function to add the values 
function addProuduct()
{

    //object to pu the values inn
    var proudct = {
        pname : prouductName.value,
        pprice :prouductprice.value,
        prouductcat :prouductcat.value,
        prouductdis:prouductdis.value
    }
      
    store.push(proudct)
     displyProuduct(store)
     localStorage.setItem("proudct", JSON.stringify(store))
     clearForm()
}


function clearForm()
{
    prouductName.value="";
    prouductprice.value="";
    prouductcat.value="";
    prouductdis.value="";

}



function displyProuduct(arr)
{
    var cartona ="";
    for (let i = 0; i < arr.length; i++)
     {
       
         cartona += 
         ` 
         <tr> 
         <td>${store[i].pname} </td>
         <td>${store[i].pprice}</td>
         <td>${store[i].prouductcat}</td>
         <td>${store[i].prouductdis}</td>
         <td> <button  class="btn btn-light"> Update</button></td>
         <td> <button   class="btn btn-danger" onclick="deleteProudct(${i})" >Delete</button></td>
         
         
         </tr>
            `
    }
    
    document.getElementById("tBody").innerHTML= cartona;
}

function deleteProudct(prouductIndex)
{
    store.splice(prouductIndex,1)
    localStorage.setItem("proudct", JSON.stringify(store))
    displyProuduct(store)
}


function searchName(term)

{
    var matchedProudcts = [];
    for (var i = 0; i < store.length; i++)
    
    {
        if (store[i].pname.toLowerCase().includes(term.toLowerCase())===true)
        
        {

            matchedProudcts.push(store[i])
        }

    }

    displyProuduct(matchedProudcts);
}
