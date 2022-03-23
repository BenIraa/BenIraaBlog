fetch('https://localhost:9000/api/v1/users',  {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 
      'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmI0ZDIyODIwNDUyMzIxNDgyZTZmYSIsImlhdCI6MTY0ODAyODg3MiwiZXhwIjoxNjQ4MTE1MjcyfQ.mNdUGGLG328bbA61I7sBqo2PrKk508S14J4Px_YZQT0'}})
      .then((data)=>{return data.json();
      }).then((values)=>{
         document.getElementById("well").innerHTML = values.map((values)=>
          `
           <table class="table">
           <thead>
               <tr>
                   <th>ID</th>
                   <th>FirstName</th>
                   <th>LastName</th>
                   <th>Email</th>
                   <th>Phone</th>
                   <th>Password</th>
                   <th>Role</th>
                   <th>Update</th>
                   <th>delete</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td data-label="Contact ID">${values._id}</td>
                   <td data-label="Power">${values.firstname}</td>
                   <td data-label="Expiration">${values.lastname}</td>
                   <td data-label="Value">${values.email}</td>
                   <td data-label="Value">${values.telephone}</td>
                   <td data-label="Value">${values.password}</td>
                   <td data-label="Value">${values.role}</td>
                   <td data-lebel="trash"><button  ><i class="fa fa-pencil-square-o"></i></button></td>
                   <td data-lebel="trash"><button class="delete" ><i class="fa fa-trash"></i></button></td>
               </tr>
               
           </tbody>
       </table>
           `
         )
       }).catch((err) => {
         console.log(err);
       })


        


                
            
            
        
        


















































// //adding users logic
// const addUsersButton = document.querySelector('#addUser');
// const editUsersButton = document.querySelector('#editUsers');
// addUsersButton.addEventListener("click", ()=>{
//     addUsers();
//     const addUsers = ()=>{
//         // access input for users 
//            let firstname = document.getElementById("firstname");
//            let lastname =  document.getElementById("lastname");
//            let email = document.getElementById("email");
//            let telphone = document.getElementById("telphone");
//            let password = document.getElementById("password");
//            let role = document.getElementById("role");
        
//            const user =  {
//                 firstname: firstname.values,
//                 lastname: lastname.values,
//                 email: email.values,
//                 telphone: telphone.values,
//                 password: password.values,
//                 role:  role.values
//             }
        
//             //addd users
        
//             fetch('https://beniraabrand.herokuapp.com/api/v1/users',{
//                 method:"POST",
//                 body:JSON.stringify(user)
//             })
//                 .then(res=>res.json())
//                 .then(json=>console.log(json))
//         }
// })

// // editUsersButton.addEventListener("click", ()=>{
// //     editUsers();
// // })




// // for edit users
// const editUsers = ()=>{
//     const user =  {
//          email: '',
//          name: 13.5,
//          description: 'lorem ipsum set',
//          image: 'https://i.pravatar.cc',
//          category: 'electronic'
//      }
 
//      //addd users
 
//      fetch('http://localhost:9000/api/v1/users',{
//          method:"POST",
//          body:JSON.stringify(user)
//      })
//          .then(res=>res.json())
//          .then(json=>console.log(json))
//  }

//  //for delete users
//  const deleteUsers = ()=>{
//     const user =  {
//          email: '',
//          name: 13.5,
//          description: 'lorem ipsum set',
//          image: 'https://i.pravatar.cc',
//          category: 'electronic'
//      }
 
//      //addd users
 
//      fetch('http://localhost:9000/api/v1/users',{
//          method:"POST",
//          body:JSON.stringify(user)
//      })
//          .then(res=>res.json())
//          .then(json=>console.log(json))
//  }



// to call my users

          
  
