import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchgreeting } from "./store/greeting/greeting"

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchgreeting());
    }, []);
    
    const greetingData = useSelector((state) => state.greeting.data);
    
    return (
        <div>
            <h1>{greetingData.greeting}</h1>
        </div>
    );
}

export default App;