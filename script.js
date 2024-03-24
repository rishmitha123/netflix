let movie=[
    {
        name:'animal',
        poster:'https://m.media-amazon.com/images/I/91zTlD7AY1L.jpg',
        rating:9.0,
        characters:"RanbirKapoor,Rashmika"  
    },
    {
        name:'bahubali',
        poster:'https://rukminim2.flixcart.com/image/850/1000/kzygpzk0/poster/r/q/s/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imagbukjsjtksjsg.jpeg?q=20&crop=false',
        rating:10,
        characters:"Prabhas,Anushka"
    },
    {
        name:'hi naana',
        poster:'https://m.media-amazon.com/images/M/MV5BMjZkNTdhOTMtYzg0Yy00YjA4LTljOTQtZWRkNTZkMTY3Y2Y3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
        rating:10,
        characters:"Nani,Mrunal"
    },
    {
        name:'kgf',
        poster:'https://rukminim2.flixcart.com/image/850/1000/l3bx5e80/poster/p/x/m/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8qchumcz8k.jpeg?q=20&crop=false',
        rating:9.5,
        characters:"Yash,srinidhi"
    },
    {
        name:'love story',
        poster:'https://files.prokerala.com/movies/pics/800/birthday-poster-of-sai-pallavi-movie-113601.jpg',
        rating:9.2,
        characters:"nagachaitanys,saipallavi"
    },
    {
        name:'winner',
        poster:'https://mellowplex.s3.amazonaws.com/uploads/item_media/asset/16937/Winner-Telugu-Movie-Posters-1.jpg',
        rating:6.8,
        characters:"saidharamtej,rakul"
    },
    {
        name:'pushpa',
        poster:'https://telugubullet.com/wp-content/uploads/2020/04/Pushpa-Movie-Poster-1.jpg',
        rating:8.2,
        characters:"alluarjun,rashmika"
    },
    {
        name:'baby',
        poster:'https://upload.wikimedia.org/wikipedia/en/4/46/Baby_theatrical_poster.jpg',
        rating:7.0,
        characters:"anandh,vaishnavi"
    },
    {
        name:'guntur karam',
        poster:'https://imgcdn.ragalahari.com/may2023/designs/gunturkaaram-posters/gunturkaaram-posters1t.jpg',
        rating:6.7,
        characters:"maheshbabu,sreeleela"
    },
    {
        name:'varudu kavalenu',
        poster:'https://static.moviecrow.com/gallery/20210413/184987-Ey2u5gRVIAQcnOc.jpg',
        rating:9.0,
        characters:"shourya,rithuvarma"
    },
    {
        name:"premalu",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7uTpEsrTV3jirdD9n9W3e8lvy0WslwLvM8KASXXm1jkzp4Q3mnzAGvr28b_Rb9bAKZ68a",
        rating:9,
        characters:"mamitha,sachin"
    },
    {
        name:"ustadbhagatsingh",
        poster:"https://upload.wikimedia.org/wikipedia/en/d/d3/Ustaad_Bhagat_Singh_Poster.jpg",
        rating:7,
        characters:"pawan,sreelela"
    }

]


// function displayMovies(){
//     let movie=document.createElement("div");//creation of div in js
//     movie.classList.add("movie");//giving a class name using js
//     let overlay=document.createElement("div");
//     overlay.classList.add("overlay");//classname is overlay ie <div class="overlay"></div>
//     movie.appendChild(overlay);//appending overlay into movie
//     console.log(movie);



    

// }
// displayMovies();
function displayMovies(data)
{
    document.getElementById("movies").innerHTML="";
    let htmlString=``;
    for(i=0;i<data.length;i++){
        htmlString=htmlString+`
        <div class="movie">
            <div class="overlay">
                <div class="video"></div>
                <div class="details">
                    <h1>${data[i].name}</h1>
                    <h2>${data[i].rating}</h2>
                    <h3>${data[i].characters}</h3>
                </div>
            </div>
            <img src="${data[i].poster}" class="poster">
        </div>`;
        
    }
    console.log(htmlString);
        

 document.getElementById("movies").innerHTML=htmlString;
}
displayMovies(movie);

function searchMovie(){
    // console.log("button");
    let movieName=document.getElementById("search-value").value;
    if(movieName!==""){
        let result=movie.filter(function(movies){
            return movies.name.toUpperCase().includes(movieName.toUpperCase())

        })
        displayMovies(result);
        }
        else{
            displayMovies(movie);
        }
    }
    
