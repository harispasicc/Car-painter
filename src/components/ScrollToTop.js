// Add "ScrollToTop" function in app.js file in route container at first position and import it

import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);
    return null;
}