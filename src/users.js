fetch('https://beniraabrand.herokuapp.com/api/v1/users',  {
        method: 'GET',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
         },
      })
      .then((data)=>{return data.json();
      }).then((values)=>{
         document.getElementById("well").innerHTML = values.map((values)=>
          `
           <table class="table">
           <thead>
               <tr>
                  
                   <th>FirstName</th>
                   <th>LastName</th>
                   <th>Email</th>
                   <th>Phone</th>
                   <th>Date</th>
                   <th>Role</th>
                   <th>Update</th>
                   <th>delete</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   
                   <td data-label="Power">${values.firstname}</td>
                   <td data-label="Expiration">${values.lastname}</td>
                   <td data-label="Value">${values.email}</td>
                   <td data-label="Value">${values.telephone}</td>
                   <td data-label="Value">${values.createdAt}</td>
                   <td data-label="Value">${values.role}</td>
                   <td data-lebel="trash"><a href="updateUser.html#${values._id}"><i class="fa fa-pencil-square-o"></i></a></td>
                   <td data-lebel="trash"><a href="deleteUser.html#${values._id}"><i class="fa fa-trash"></i></a></td>
               </tr>
               
           </tbody>
       </table>
           `
         ).join("")
       }).catch((err) => {
         console.log(err);
       })


       const signup_Form = document.getElementById("addUser")
       signup_Form.addEventListener("submit", async (event) => {
         event.preventDefault()
         // CREATE USER
         const body = {
           firstname: signup_Form.firstname.value,
           lastname: signup_Form.lastname.value,
           email: signup_Form.email.value,
           telephone: signup_Form.telephone.value,
           role: signup_Form.role.value,
           password: signup_Form.password.value

         }
         console.log(body)
         await fetch("https://beniraabrand.herokuapp.com/api/v1/users/signup", {
           method: "POST",
           headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          },
           body: JSON.stringify(body),
         })
           .then((res) => res.json())
           .then((json) => {
             const { error, message, status } = json
             alert(`User  added successfully`);
             location.href = "./Users.html#";
           })
         // CLEAR FORM
         signup_Form.firstname.value = ""
         signup_Form.lastname.value = ""
         signup_Form.email.value = ""
         signup_Form.password.value = ""
         signup_Form.telephone.value = ""
         signup_Form.role.value = ""
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

          
  
