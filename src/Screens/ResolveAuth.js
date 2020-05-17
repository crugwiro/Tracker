import React, {useEffect, useContext} from 'react';
import {Context} from "../Context/AuthContext";

const ResolveAuth = () => {
    const {tryLocalSignin} = useContext(Context);

    useEffect(() => {
        tryLocalSignin();
    }, []);
    return null
};

export default ResolveAuth;