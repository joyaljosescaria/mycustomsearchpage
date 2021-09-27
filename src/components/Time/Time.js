import React , {useEffect , useState} from 'react'
import './Time.css'

const Time = () => {

    const [tme , setTme] = useState('')

    useEffect(() => {
        var clock = () => {
            var h = new Date().getHours();
            var m = new Date().getMinutes();
            var s = new Date().getSeconds();
            var am = "AM";

            if (h > 12) {
                h = h - 12;
                var am = "PM";
            }

            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;

            var tms = `${h}:${m}:${s} ${am}`
            setTme(tms)
        }

        var interval = setInterval(clock, 1000);
    })

    return (
        <div>
            <h3>{tme}</h3>
        </div>
    )
}

export default Time
