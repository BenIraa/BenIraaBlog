// fetch('https://beniraabrand.herokuapp.com/api/v1/blogs', {mode: 'no-cors',method: 'get',headers: {Accept: 'application/json'}})
//     .then(res=>res.json())
//     .then(json=>console.log(json))

  

async function fetchText() {
  let response = await fetch('beniraabrand.herokuapp.com/api/v1/blogs');

  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
      let data = await response.text();
      // handle data
  }
}

































//    const request = new Request('https://beniraabrand.herokuapp.com/api/v1/blogs', {
//     mode: 'no-cors',
//     method: 'get',
//     headers: {
//         Accept: 'application/json'
//     }
// });

// fetch(request)
//     .then(function(response) {  
//         console.log('Response: ', response);

//         return response.text();  
//     })
//     .then(function(data) {
//         // _this.setState({ data: data });

//         console.log('Success: ', data);
//         console.log('Request succeeded with JSON response', data);
//     }).catch(function(error) {
//         console.log('Request failed', error);
//     });
