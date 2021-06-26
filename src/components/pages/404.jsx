import React, { useContext,  useEffect, useState} from 'react';
import { Link, useHistory, } from 'react-router-dom';

const Notfound = () => {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return(
        <>
            
            <div className="not-found">
                <img src="../../../images/assets/404.png" width="120px" alt="Not Found" />
                <h3 className="mrgt1"> Page Not Found</h3>
            </div>

            <Link onClick={goBack} className="btn btn-primary onwhite fs-15">Go Back</Link>
           
        </>
    )

}

export default Notfound;