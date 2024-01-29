import React from 'react'
import { useLocation } from "react-router-dom";

const Details = ({id}) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const movie = searchParams.get('movie');

return (
<div>Details = {searchParams.get('movie')}</div>
)
}

export default Details
