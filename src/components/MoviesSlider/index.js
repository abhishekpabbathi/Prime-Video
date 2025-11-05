// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = ({moviesList}) => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <ul>
      <Slider
        {...settings}
        style={{
          width: '90%',
          paddingLeft: '60px',
        }}
      >
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} eachMovie={eachMovie} />
        ))}
      </Slider>
    </ul>
  )
}
export default MoviesSlider
