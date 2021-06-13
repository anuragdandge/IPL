var db= firebase.firestore();
function DisplayData(){
    db.collection('users').get().then((snapshot)=>{
        const users=[];
        snapshot.forEach((docs)=>{
          const data =docs.data();
          users.push(data);
        
              var name = docs.UserName;
              var numb = docs.MobileNumber; 
              addItems(name,numb)
         

        })
    });
    
}

function addItems(name,numb){

    var tbody = document.getElementById("tableBody")

    var trow = document.createElement("tr")
    
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = name;
    td2.innerHTML = numb;

    trow.appendChild(td1);
    trow.appendChild(td2);

    tbody.appendChild(trow);


    
}






