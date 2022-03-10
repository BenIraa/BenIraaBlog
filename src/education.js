db.collection("education")
    .onSnapshot((education) => {
      const data = education.docs.map((doc) => ({ id: doc.id, data: doc.data()}))
      console.log(data)
      document.getElementById("timeline").innerHTML = data.map(
          (education) => 
          `
          <div class="container-timeline left">
            <div class="content">
                <i class="fa fa-graduation-cap" style="font-size: 60px; color: darkgoldenrod;"></i>
                <h2 class="text-white"><span>${education.data.startedYear}</span>-<span>${education.data.endedYear}</span></h2>
                <p class="text-white">${education.data.school}<br>
                    <h6 class="text-white">${education.data.courses}</h6>
                </p>
            </div>
        

        </div>
   
          `
      )

  })