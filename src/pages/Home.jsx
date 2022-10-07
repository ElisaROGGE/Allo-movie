import React, {useState, useEffect} from 'react';
import MovieBox from '../components/MovieBox';
import Navigation from '../components/Navigation';
import ReactPaginate from 'react-paginate';

const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=d3a32c5601ee179958911ddfe2fedfb2&query";

// "https://api.themoviedb.org/3/movie/popular?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr&page=1"
const Home = () => {
    const [movies, setMovies]=useState([]);
    const [query, setQuery] = useState('');
    const [dataPage, setDataPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

  useEffect(() =>{
    const getMovies = async() => {
      // Je fais une condition pour prendre l'url de recherche quand la recherche de mon input est effectuée
      if(query !== ''){
       const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr&query=${query}&page=${dataPage}`);
        const data = await res.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
        // Ou sinon prendre les pages populaires par défaut
      }else{
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr&query=${query}&page=${dataPage}`);
        const data = await res.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      }  
    };
    getMovies();
  }, [dataPage])

    // Barre de recherche
    const searchMovies = async(e)=>{
      /* Il empêche l'action par défaut de l'événement de se produire. */
      e.preventDefault();
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d3a32c5601ee179958911ddfe2fedfb2&language=fr&query=${query}&page=${dataPage}`;
      try{
          const res= await fetch(url);
          const data = await res.json();
          console.log(data);
          setMovies(data.results);
          setTotalPages(data.total_pages);
      }catch(e){
          console.log(e);
      }
    }
  
    // Je récupère la valeur écrite dans l'input
    const changeHandler=(e)=>{
      setQuery(e.target.value);
    }

    // Pagination

    const handlePageClick = async (data) =>{
      setDataPage(data.selected + 1)
    };
    
  return (
        <><Navigation />
        <div className="flex justify-center mt-6">
          <form action="" onSubmit={searchMovies} autoComplete="off">
            <div className="flex">
              <div>
                <input className="shadow appearance-none border-2 rounded border-amber-400 pt-3 pb-3 leading-tight focus:outline-none focus:shadow-outline" type="search" placeholder="Rechercher un film" aria-label="search" name="query" value={query} onChange={changeHandler}/>
              </div>
            <div className="bg-amber-400 w-fit-content rounded p-3 -ml-2">
              <button className="search-button" type='submit'>Rechercher</button>
            </div>
            </div>
      
          </form>
        </div>

          <div>
            {movies.length > 0 ?(
              <><div className="movies text-center mt-6 tablet-1:columns-2 tablet:columns-4 s:columns-1">
            {/* Une boucle qui affichera les films dans le tableau. */}
            {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}

          </div><div className="pagination">
              <ReactPaginate
                previousLabel={'Précédent'}
                nextLabel={'Suivant'}
                breakLabel={'...'}
                pageCount={totalPages>500?500:totalPages}
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