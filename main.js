
// window.onload= movies

// let movie=""
//  function movies () {

//    fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&with_genres=10749")
//    .then(data=>data.json())
//    .then(data=>{
//      let social= data.results;
// //    console.log(data) 
//      for (let i = 0; i <social.length; i++){
//        let title= social[i].title
//         fetch ("http://www.omdbapi.com/?s="+title+"&page1=&apikey=6e2550ac")
//           .then (data=>data.json())
//           .then (data =>{ 
//             movie=data
//         //    console.log(movie) 
//         document.getElementById("crime").addEventListener("click", () =>{
//            document.getElementById("root").innerHTML +=  `<img src=${data.Search[0].Poster}>  ${data.Search[0].Title} ${data.Search[0].Year} ${data.Search[0].Type}`
//            document.getElementById("root_one").style.display=none;
//            documen
//           })

//         })

//        }
//      });
//     };
   




 //peliculas sobre drogadicción

 document.getElementById("drug").addEventListener("click", () => {
 socialMovie ()
 document.getElementById("cover_page").style.display = "none";
 document.getElementById("root2").style.display = "none";
 document.getElementById("root").style.display = "block";
})


const dataThemes =['tt0097240', 'tt0087913', 'tt0120788', 'tt0112461', 'tt0181865', 'tt0117951', 'tt0896986']

function socialMovie () {dataThemes.map( function(item) {
fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
  .then(res => res.json())
   .then(data => {

<<<<<<< HEAD
         document.getElementById('root').innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}`
       /*   `
        <div class="col-3 card">
          <img src="${data.Poster}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.Title}</h5>
            <p class="card-text">Año: ${data.Year}</p>
            <p class='card-text">Tipo:${data.Type}</p>
          </div>
        </div>
        
      ` */
=======
         document.getElementById("root").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}`
>>>>>>> upstream/master
   })
   
})
}
<<<<<<< HEAD
/* const dataThemes2 = ['tt0995829', 'tt0467406', ]
=======

// aqui se muestran las peliculas sobre sexualidad

  document.getElementById("sexuality").addEventListener("click", () =>{
  socialMovie2();
  document.getElementById("cover_page").style.display = "none";
  document.getElementById("root2").style.display = "block";
 })

>>>>>>> upstream/master

const dataThemes2 = ['tt0995829', 'tt0467406', 'tt1847731', 'tt1659337', 'tt0159097']

function socialMovie2 () {dataThemes2.map( function(item) {
  fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
    .then(res => res.json())
     .then(data => {
  
           document.getElementById("root2").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}`
     })
<<<<<<< HEAD
     
  }) */

  document.getElementById('drug').addEventListener("click", () =>{
    socialMovie ()
    document.getElementById("cover_page").style.display = "none";
    document.getElementById("root").style.display = "block";
=======
  })
}


document.getElementById("bullying").addEventListener("click", () =>{
  socialMovie3
  document.getElementById("cover_page").style.display = "none";
  document.getElementById("root3").style.display = "block";
 })

const dataThemes3 = []

function socialMovie3 () {dataThemes.map( function(item) {
  fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=6e2550ac')
    .then(res => res.json())
     .then(data => {
  
           document.getElementById("root3").innerHTML += `<img src=${data.Poster}>  ${data.Title} ${data.Year} ${data.Type}`
     })
>>>>>>> upstream/master
  })
}


  
   