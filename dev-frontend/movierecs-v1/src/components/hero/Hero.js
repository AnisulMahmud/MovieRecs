import React from 'react'
import './Hero.css'
import  Carousel  from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const Hero = ({movies}) => {
  return (
    <div className='movie-carousel'>
    <Carousel>
      {
        movies.map((movie)=>{
            return(
                <Paper>
                    <div className='movie-container'>
                        <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>

                        <div className='movie-detail'>
                        <div className='movie-poster'>
                            <img src={movie.poster} alt={movie.title}/>
                         </div>     
                        <div className='movie-title'>
                            <h4>{movie.title}</h4>
                         </div>  
                        <div className='movie-buttons-container'>
                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length -11)}`}>
                            <div className='play-button-icon-container'>
                                <FontAwesomeIcon className='play-button-icon'
                                    icon={faCirclePlay}
                                />

                            </div>
                            </Link>

                            <div className='movie-review-button-container'>

                              <Button>
                                
                              </Button>

                            </div>

                        </div>

                        </div>    
                        </div>    

                    </div>

                </Paper>
            )
        })
      }
    </Carousel>
    </div>
  )
}

export default Hero