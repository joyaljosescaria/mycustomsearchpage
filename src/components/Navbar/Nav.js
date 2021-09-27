import React from 'react'
import './Nav.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Nav() {
    return (
        <div>
            <ul>
                 <a target="blank" href="https://facebook.com"><div className="rotate fb">  
                    <li><i className="fa fa-facebook"></i></li>
                </div></a>
                 <a target="blank" href="https://twitter.com"><div className="rotate twt">
                    <li><i className="fa fa-twitter"></i></li>
                </div></a>
                 <a target="blank" href="https://instagram.com"><div className="rotate insta">
                    <li><i className="fa fa-instagram"></i></li>
                </div></a>
                 <a target="blank" href="https://linkedin.com"><div className="rotate in">
                    <li><i className="fa fa-linkedin"></i></li>
                </div></a>
                 <a target="blank" href="https://trello.com"><div className="rotate tr">
                    <li><i className="fa fa-trello"></i></li>
                </div></a>
                 <a target="blank" href="https://github.com"><div className="rotate gt">
                    <li><i className="fa fa-github"></i></li>
                </div></a>
                 <a target="blank" href="https://youtube.com"><div className="rotate yt">
                    <li><i className="fa fa-youtube"></i></li>
                </div></a>
                 <a target="blank" href="https://stackoverflow.com"><div className="rotate st">
                    <li><i className="fa fa-stack-overflow"></i></li>
                </div></a>
            </ul>
        </div>
    )
}
