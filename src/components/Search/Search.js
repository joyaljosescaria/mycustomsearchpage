import React, { useState, useRef } from 'react';
import './Search.css'
import 'font-awesome/css/font-awesome.min.css';

const Search = () => {

    const [googlelink, setGoogleLink] = useState('');
    const [youtubelink, setYoutubeLink] = useState('');
    const [ducklink, setDuckLink] = useState('');
    const [term, setTerm] = useState('');

    const [colors, setColors] = useState(["#2095c1", "#DE4839", "#B9345A", "#2827CC", "#6A1B4D", "#0D0D0D"])

    const getPlusWords = () => {
        var result = term.split(' ').map(s => s + '+').join('');
        return result;
    }

    const inputEl = useRef(null);
    const googleEl = useRef(null);
    const youtubeEl = useRef(null);
    const duckEl = useRef(null);

    const serachYoutube = () => {
        var word = getPlusWords();
        var link = `https://www.youtube.com/results?search_query=${word}`
        console.log(link);
        window.location.href = link
        // setYoutubeLink(link)
    }

    const searchGoogle = () => {
        var word = getPlusWords();
        console.log(word)
        var link = `https://www.google.co.in/search?q=${word}`
        window.location.href = link
        // setGoogleLink(link)
    }

    const searchDuck = () => {
        var word = getPlusWords();
        var link = `https://duckduckgo.com/?q=${word}`
        // setDuckLink(link)
        window.location.href = link
    }

    return (
        <div className="serach-toop">
            <div className="search">
                <input type="text" onChange={e => setTerm(e.target.value)}  />
                <div className="btns">
                    <a href={googlelink} ref={googleEl} style={{ background: "#619eff" }}><i className="fa fa-google" onClick={searchGoogle}></i></a>
                    <a href={youtubelink} ref={youtubeEl} style={{ background: "#ff3434" }} onClick={serachYoutube}><i className="fa fa-youtube"></i></a>
                    <a href={ducklink} ref={duckEl} style={{ background: "#rgb(73 , 173 , 22);" }} onClick={searchDuck}><i className="fa fa-search"></i></a>
                </div>
            </div>
        </div>

    )
}

export default Search
