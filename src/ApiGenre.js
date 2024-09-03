import React, { useState, useContext } from 'react';
import { HistoryContext } from './HistoryContext';

export default function ApiGenre({ searchedWord }) {
    const [data, setData] = useState(null);
    const [genre, setGenre] = useState(null);
    const [url, setUrl] = useState(null);
    const [artist, setArtist] = useState(null);
    const [cover, setCover] = useState(null);
    const { history, setHistory } = useContext(HistoryContext);

    function handleClick() {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                try {
                    const responseData = JSON.parse(this.responseText);
                    setData(responseData);
                    let newGenre, newUrl, newArtist, newCover;
                    if (responseData.name === searchedWord && responseData.genres) {
                        newGenre = responseData.genres;
                        newUrl = responseData.url;
                        newArtist = responseData.artists;
                        newCover = responseData.cover_url;
                    } else {
                        console.error('Genres data is not available in the response.');
                        newGenre = 'Unknown Genre';
                        newArtist = 'Artist not found';
                        newUrl = 'Url not found';
                        newCover = 'Cover not found';
                    }

                    setGenre(newGenre);
                    setUrl(newUrl);
                    setArtist(newArtist);
                    setCover(newCover);

                    setHistory([...history, { genre: newGenre, url: newUrl, artist: newArtist, cover: newCover }]);
                } catch (error) {
                    console.error('Error parsing JSON response:', error);
                    setGenre('Unknown Genre');
                }
            }
        });

        xhr.open('GET', 'https://apple-music24.p.rapidapi.com/track/?url=https%3A%2F%2Fmusic.apple.com%2Fus%2Falbum%2Fpenolong-yang-setia%2F1546605591%3Fi%3D1546605594');
        xhr.setRequestHeader('x-rapidapi-key', 'f0bfcbdbb6msh8b0c1e5b5b9a44ap1f9127jsn3c186749ebe5');
        xhr.setRequestHeader('x-rapidapi-host', 'apple-music24.p.rapidapi.com');

        xhr.send(null);
    }

    return (
        <>
            <button onClick={handleClick}>Get Data</button>
            {genre && (
                <div>
                    <h2>Genre:</h2>
                    {Array.isArray(genre) ? genre.join(' ') : genre}
                    <h2>Url:</h2>
                    {url}
                    <h2>Artist:</h2>
                    {artist}
                    <h2>Cover:</h2>
                    <img src={cover} alt="cover" />
                </div>
            )}
            
        </>
    );
}