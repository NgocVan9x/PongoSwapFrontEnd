import React from 'react';
import Template404 from "../src/components/Error/404";

export default function Custom404({error}) {
    return (
        <div>
            <Template404 errorMsg={error}/>
        </div>
    );
}

