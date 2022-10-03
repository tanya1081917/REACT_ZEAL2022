import { createBrowserHistory} from "history";
import {BrowserRouterProps, Router} from "react-router-dom";
import React from 'react';



export function BrowserRouter({basename,
                                  children,
                                  window
                              }: BrowserRouterProps) {


    let historyRef = React.useRef<createBrowserHistory>(window);
    if (historyRef.current === null) {
        historyRef.current = createBrowserHistory(basename) ;
    }

    let history = historyRef.current;

    let [state, setState] = React.useState({
        action: history.action,
        location: history.location

    });


    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            basename={basename}
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
}