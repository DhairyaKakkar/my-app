import React, { useContext } from 'react';
import { HistoryContext } from './HistoryContext';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HistoryDisplay() {
    const { history } = useContext(HistoryContext);

    return (
        <>
        <div className = 'app'>
            <img className = 'watermark' 
                src = 'https://play-lh.googleusercontent.com/u5zjxp6IbaDoGpWOk24q5L5Ej0jiwLjS3-h7PAHy0xbawRLfO37f010C23gcD9GL1gh4'
                alt = 'Chord watermark'
            />
            <img className = 'side' 
                src = 'https://t3.ftcdn.net/jpg/08/13/85/76/360_F_813857642_TvxHTtUwNxTFdYGh9tPoQrP0eJonHCwg.jpg'
                alt = 'Chord watermark'
            />
            <img className = 'right' 
                src = 'https://t3.ftcdn.net/jpg/08/13/85/76/360_F_813857642_TvxHTtUwNxTFdYGh9tPoQrP0eJonHCwg.jpg'
                alt = 'Chord watermark'
            />
            <div className = 'content'>
                <h2>Search History:</h2>
                {history.length > 0 ? (
                    <ul>
                        {history.map((item, index) => (
                            <li key={index}>
                                <p>Genre: {Array.isArray(item.genre) ? item.genre.join(' ') : item.genre}</p>
                                <p>Url: {item.url}</p>
                                <p>Artist: {item.artist}</p>
                                <p>Cover: <img src={item.cover} alt={`cover-${index}`} width="50" /></p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No search history available.</p>
                )}
            </div>
        </div>
        </>
    );
}