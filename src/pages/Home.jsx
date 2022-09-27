import React, {useState, useEffect} from 'react';
import MovieBox from '../components/MovieBox';
import Navigation from '../components/Navigation';
import ReactPaginate from 'react-paginate';

const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=d3a32c5601ee179958911ddfe2fedfb2&query";
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr&page=1"
const Home = () => {
    const [movies, setMovies]=useState([]);
    const [query, setQuery] = useState('');
    const [pageCount, setPageCount] = useState(0)

  //   useEffect(() => {
  //  /* Fetch() est une méthode utilisée pour récupérer les ressources d'un serveur. */
  //   fetch(API_URL)
  //   /* Une fonction de rappel qui est appelée lorsque la promesse est résolue. */
  //   .then((res)=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     /* Définition de l'état du tableau des films sur le tableau data.results. */
  //     setMovies(data.results);
  //   })
  // }, [])
  useEffect(() =>{
    const getMovies = async() => {
      const res = await fetch(API_URL);
        const data = await res.json();
        const total = res.headers.get('total_results');
        console.log(data);
        console.log(total)
        setMovies(data.results);
    };
    getMovies();
  }, [])

    // Barre de recherche
  const searchMovies = async(e)=>{
    /* Il empêche l'action par défaut de l'événement de se produire. */
    e.preventDefault();
    try{
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr&query=${query}`;
        const res= await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
    }catch(e){
        console.log(e);
    }
  }
    const changeHandler=(e)=>{
      setQuery(e.target.value);
    }
    // Pagination

    const fetchMovies = async(currentPage)=>{
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr&page=${currentPage}`
      );
      const data = await res.json();
      return data;
    }
    const handlePageClick = async (data) =>{
      console.log(data.selected);

      let currentPage = data.selected + 1;
      const moviesFormServer = await fetchMovies(currentPage);
      setMovies(moviesFormServer);
    };
    

  return (
        <><Navigation />
        <form action="" onSubmit={searchMovies} autoComplete="off">
            <input type="search" placeholder="Rechercher un film" aria-label="search" name="query" value={query} onChange={changeHandler}/>
            <button type='submit'>Rechercher</button>
        </form>
        
          <div>
            {movies.length > 0 ?(
              <><div className="movies text-center mt-6">
            {/* Une boucle qui affichera les films dans le tableau. */}
            {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}

          </div><div className="pagination">
              <ReactPaginate
                previousLabel={'Précédent'}
                nextLabel={'Suivant'}
                breakLabel={'...'}
                pageCount={25}
                marginPagesDisplayed={4}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'} />
            </div></>
              
            ):(
              <h2>Pas de films trouvés :(</h2>
            )}
            
          </div>
      
    </>
  );
};

export default Home;