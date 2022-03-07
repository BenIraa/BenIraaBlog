db.collection("ContactPage")
//   .orderBy("timestamp", "desc")
  .onSnapshot((contact) => {
    const data = contact.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
    console.log(data)
    document.getElementById("well").innerHTML = data.map(
      (contact) => `
      
      <table class="table">
      <thead>
          <tr>
              <th>Contact ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Contact/Mesage</th>
              <th>Update</th>
              <th>delete</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td data-label="Contact ID">${contact.id}</td>
              <td data-label="Power">${contact.data.firstname}</td>
              <td data-label="Expiration">${contact.data.lastname}</td>
              <td data-label="Value">${contact.data.email}</td>
              <td data-label="Value">${contact.data.telephone}</td>
              <td data-label="Value">${contact.data.message}</td>
              <td data-lebel="trash"><button class="btn"><i class="fa fa-pencil-square-o"></i></button></td>
              <td data-lebel="trash"><button class="btn"><i class="fa fa-trash"></i></button></td>
          </tr>
          
      </tbody>
  </table>
  
    
    `
    )
  })































// fetch('http://localhost:8000/api/v1/users',{mode: "no-cors"})
// .then((data) => {
//     console.log(data)
//     return data;
// }).then((completedata) => {
    
//     // console.log(completedata[2].title);
//     // document.getElementById('root'). 
//     // innerHTML=completedata[2].title;
//     let data1 = "";
//     completedata.map((values) =>{
//         data1+= ` 
//         <div class="well">
//         <table class="table">
//         <thead>
//             <tr>
//                 <th>Contact ID</th>
//                 <th>FirstName</th>
//                 <th>LastName</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Contact/Mesage</th>
//                 <th></th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td data-label="Contact ID">${values.name}</td>
//                 <td data-label="Power">${values.email}</td>
//                 <td data-label="Expiration"></td>
//                 <td data-label="Value"></td>
//                 <td data-label="Value"></td>
//             </tr>
            
//         </tbody>
//     </table>
//     </div>`
//     });
//     document.getElementById("well").innerHTML=data1;
// }).catch((err) => {
//     console.log(err)
// });


        