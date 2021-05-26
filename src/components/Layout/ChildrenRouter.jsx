import React from 'react'
import {Route, Switch, useRouteMatch} from "react-router-dom"
import Farm from "../../pages/Farm"
import FarmCard from "../../components/Farm/FarmCard"

export default function ChildrenRouter() {
    const match = useRouteMatch()
    console.log(match);
    return (
        <>
        Children Router
        <Switch>
            <Route path={`${match.path}/:id`} component={() => <FarmCard farm={{}} index={1} />} />
            <Route path={match.path} component={Farm} exact />
        </Switch>
            
        </>
    )
}
