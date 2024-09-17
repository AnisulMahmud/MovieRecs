import './App.css';
import api from './API/axiosConfig'
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Trailer from './components/Trailer';
import Reviews from './components/review/Reviews';
function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () =>{

    try{
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);

    }catch(e){
      console.log(e);
    }
  }

  // const getMovieData = async (movieId) => {
     
  //   try 
  //   {
  //       const response = await api.get(`/api/v1/movies/${movieId}`);

  //       const singleMovie = response.data;

  //       setMovie(singleMovie);

  //       setReviews(singleMovie.reviews);
        

  //   } 
  //   catch (error) 
  //   {
  //     console.error(error);
  //   }

  // }


  const getMovieData = async (movieId) => {
    try {
        const response = await api.get(`/api/v1/movies/${movieId}`);
        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews || []);  
    } catch (error) {
        console.error(error);
    }
}

  useEffect(()=>{
    getMovies();
  },[]);

  return (
    <div className="App">

      <Header/>

      <Routes>

        <Route path="/" element={<Layout/>}>
        <Route path='/' element={<Home movies={movies}/>}> </Route>
        <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}> </Route>
        <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
           
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
