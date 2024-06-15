import React, { useState } from 'react';
import Form from '../Fetch/Form'; 
import Data from '../Display/Data'; 
import ErrorMessage from '../Error/ErrorMessage'; 

function Home() {
    const [data, setData] = useState(null);
    const [message, setMessage] = useState(null);

    const handleData = (Data, Message) => {
        setData(Data);
        setMessage(Message);
    };

    return (
        <div>
            <Form onData={handleData} />
            {data && !message && <Data data={data} />}
            {message && <ErrorMessage message={message} />}
        </div>
    );
}

export default Home;
