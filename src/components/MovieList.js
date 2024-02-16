import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    console.log(movies);
    return (
        movies && (
        <div className="py-5 px-2">
            <h1 className="text-2xl py-4">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map((movie) => (
                        <MovieCard key={movie?.id} title={movie?.title} posterPath={movie?.poster_path}/>
                    ))}
                </div>
            </div>
        </div>
        )
    );
};

export default MovieList;