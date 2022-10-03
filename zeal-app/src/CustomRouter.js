import {useLayoutEffect, useState} from "react";
import {Router} from "react-router-dom";


const CustomRouter = ({ history, ...props }) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
        pathName: history.pathName,
        route :history.route
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            {...props}

            location={state.location}
            navigationType={state.action}
            pathName={state.pathName}
            route={state.route}
            navigator={history}
        />
    );
};

export default CustomRouter;