import React, { useEffect, useState } from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";
const Show = () => {
    const [limit, setlimit] = useState([]);
    const [movieLimit, setmovieLimit] = useState([]);
    const navigate = useNavigate();

    const searchHandle = async (e) => {
        const query = e?.target?.value?.trim();
        if (!query) {
            setlimit([]);
            return;
        }
        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
            const data = await response.json();
            const sliceData = data.slice(0, 5);
            setlimit(sliceData);
        } catch (error) {
            console.error(error);
            setlimit([]);
        }
    };

    useEffect(() => {
        const listMovie = async () => {
            try {
                const movieFull = await fetch(`https://api.tvmaze.com/schedule/full`);
                const movieData = await movieFull.json();
                const sliceMovie = movieData.slice(0, 12);
                setmovieLimit(sliceMovie);
            } catch (e) {
                console.error("Schedule fetch error:", e);
            }
        };

        listMovie();
    }, []);

    const searchTras = (id) => {
        navigate(`/show/${id}`);
    };

    return (
        <>
            <nav>
                <div className="navLogo">
                    <div className='logo'></div>
                </div>
                <div className="nav_title">
                    Search: <input type="text" onChange={searchHandle} className='inputSearch'/>
                    {limit.length > 0 && (
                        <div className="searchDiv">
                            {limit.map((element) => (
                                <div key={element.show.id} className="searchList">
                                    <div onClick={() => searchTras(element.show.id)}>
                                        {element.show.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
            <div className="mainShow">
                {movieLimit.map((e) => {
                    const imgUrl = e._embedded?.show?.image?.medium || e.image?.medium || '';
                    return (
                        <div key={e.id} className="movieBox">
                            <div 
                                className="movieImg" 
                                style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : 'none' }}
                            ></div>
                            <div className="name">
                                {e._embedded?.show?.name ?? `Episode ID: ${e.id}`}
                            </div>
                            <div className="movieTime">
                                Release: {e._embedded?.show?.premiered ?? "N/A"}
                            </div>
                            <div className="MovieType">
                                Type: {e._embedded?.show?.type ?? e.type ?? "N/A"}
                            </div>
                            <div className="movieGen">
                                Genres: {e._embedded?.show?.genres?.length ? e._embedded.show.genres.join(", ") : "N/A"}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Show;