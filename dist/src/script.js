// db.collection("ContactPage")
// //.orderBy("timestamp", "desc")
//   .onSnapshot((contact) => {
//     const data = contact.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
//     console.log(data)
//     document.getElementById("well").innerHTML = data.map(
//       (contact) => `
      
//       <table class="table">
//       <thead>
//           <tr>
//               <th>Contact ID</th>
//               <th>FirstName</th>
//               <th>LastName</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Contact/Mesage</th>
//               <th>Update</th>
//               <th>delete</th>
//           </tr>
//       </thead>
//       <tbody>
//           <tr>
//               <td data-label="Contact ID">${contact.id}</td>
//               <td data-label="Power">${contact.data.firstname}</td>
//               <td data-label="Expiration">${contact.data.lastname}</td>
//               <td data-label="Value">${contact.data.email}</td>
//               <td data-label="Value">${contact.data.phone}</td>
//               <td data-label="Value">${contact.data.message}</td>
//               <td data-lebel="trash"><button  ><i class="fa fa-pencil-square-o"></i></button></td>
//               <td data-lebel="trash"><button class="delete" ><i class="fa fa-trash"></i></button></td>
//           </tr>
          
//       </tbody>
//   </table>
  
    
//     `
//     )
//   })
  
// Add Contact Form

// const addContactForm = document.querySelector('.add')
// addContactForm.addEventListener('submit', (e) =>{
//     e.preventDefault()
//     addDoc(colRef, {
//         firstname: addContactForm.firstname.value,
//         lastname: addContactForm.lastname.value,
//         email: addContactForm.email.value,
//         message: addContactForm.message.value,
//         phone: addContactForm.phone.value,
//     })
//     .then(() => {
//         addContactForm.reset() // Add new doc and stay on the same page
//         alert("Data sent succesfully!")
//     })

// })

//deleting contact
const deleteContactForm = document.querySelector('.delete')
deleteContactForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const docRef = doc(db, 'ContactPage', deleteContactForm.id.value)

    deleteDoc(docRef)
  .then(() =>{
      deleteContactForm.reset()
  })
  .catch((err) =>{
      console.log(err)
  })

})


































        