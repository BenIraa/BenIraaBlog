// db.collection("blogs")
//   .orderBy("timestamp", "desc")
//   .onSnapshot((blog) => {
//     const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }))

//     document.getElementById("test").innerHTML = data.map(
//       (blog) => `
//     <div>
//     <img src=${blog.data.ImageUrl} alt=" "/>
//     <p>${blog.data.Blog}</p>
//     </div>
//     `
//     )
//   })