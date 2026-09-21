import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieTitle = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
                const data = await response.json();
                setMovieData(data);
            } catch (error) {
                console.error("Error fetching show details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMovie();
        }
    }, [id]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!movieData) {
        return <div className="error">Show details not found.</div>;
    }

    const posterUrl = movieData.image?.original || movieData.image?.medium || '';

    return (
        <>
            <nav>
                <div className="navLogo">
                    <div className='logo'></div>
                </div>
                <div className="nav_title">Explore Movie</div>
            </nav>

            <div className='movie'>
                <div className="moveName">Name: {movieData.name}</div>
                <div 
                    className="moviePoster" 
                    style={{ backgroundImage: posterUrl ? `url(${posterUrl})` : 'none' }}
                ></div>
                <div className="movieLan">Language: {movieData.language ?? "N/A"}</div>
                <div className="movieGen">
                    Genres: {movieData.genres?.length ? movieData.genres.join(", ") : "N/A"}
                </div>
                <div className="movieRatting">
                    Rating: {movieData.rating?.average ?? "N/A"}
                </div>
            </div>

            <footer>
                <div className="footerHeading">
                    <div className="fooerTitle">MovieExplorer</div>
                    <div className="footerContainer">
                        Explore the latest movies, trending releases, and curated watchlists all in one place. Your ultimate guide to cinema.
                    </div>
                </div>
                <div className="footerLink">
                    <a href="https://www.instagram.com/_mr.z._/" target='_blank' rel="noreferrer">Insta</a>
                    <a href="https://www.facebook.com/profile.php?id=100070039994331" target='_blank' rel="noreferrer">Facebook</a>
                    <a href="https://github.com/ahad000dev" target='_blank' rel="noreferrer">GitHub</a>
                </div>
            </footer>
        </>
    );
};

export default MovieTitle;