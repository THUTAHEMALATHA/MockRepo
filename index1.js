         function CreateData(){
    fetch("https://book-management-app-77392-default-rtdb.asia-southeast1.firebasedatabase.app/book-management-app.json",
        {method:"POST",body:JSON.stringify({
            title:"Harry",
            author:"potter",
            price:50
           
        })
    })
    .then((res)=>res.json())
    .then((data)=>console.log("Data is add",data))
}
function GetData(){
    fetch("https://book-management-app-77392-default-rtdb.asia-southeast1.firebasedatabase.app/book-management-app.json",
        {method:"GET"})
    .then((res)=>res.json())
    .then((data)=>console.log("get data",data))
}
function UpdateData(){
    fetch("https://book-management-app-77392-default-rtdb.asia-southeast1.firebasedatabase.app/book-management-app.json",
        {method:"PUT",body:JSON.stringify({
            title:"ramayanam",
            author:"valmiki",
            price:200
        }),
    })
    .then((res)=>res.json())
    .then((data)=>console.log("updata using put",data));
}
function DeleteData(){
    fetch("https://book-management-app-77392-default-rtdb.asia-southeast1.firebasedatabase.app/book-management-app.json",
        {method:"DELETE",})
        .then((res)=>res.json())
        .then((data)=>console.log("delete the data",data))
    
}