
import React, { useState, useEffect, memo } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { ReadEntireBudget, UpdateEntireBudget } from "../../Services/BudgetService"
import NavBar from "./components/NavBar/NavBar"
import "./components/NavBar/styles/navbar.css"
import SideBar from "./components/Sidebar/SideBar"
import Budget from "./sub-pages/Budget/Budget"
import CashFlow from "./sub-pages/CashFlow/CashFlow"
import AccountPage from "./sub-pages/AccountPage/AccountPage"
import "./styles/dashboard.css"



const MemoizedBudgetRoute = memo((props) => {

    return (
        <Route 
            component={ () => ( 
                <Budget {...props}/> 
        )} 
    />
    )
},(prevProps, nextProps) => {
    // returning a true value causes component to skip rerender
    // if the cause of rerender is a change in ticker (caused by collapsing/opening menu),
    // the route should not rerender
    return (prevProps.ticker !== nextProps.ticker)
})


const Dashboard = (props) => {

    const {userInfo} = props
    const {id} = userInfo
    const [userId, setUserId] = useState(id)
    const [narrow, setSidebarNarrowed] = useState(false)
    const [ticker, setTicker] = useState(0)
    const [budgetId, setBudgetId] = useState(null)
    const [incomes, setIncomes] = useState([])
    const [categories, setCategories] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!props.authenticated) {
            props.history.push("/")
        }

        const initializeDashboard = async () => {
            const budget = await ReadEntireBudget({ userId: userId }, null)
            // console.log("budget response received during async call:", budget)
            const { budgetId: b, incomes: i, categories: c } = budget
            setIncomes(i)
            setCategories(c)
            setBudgetId(b)
            // console.log("Log of state in async call: ")
            // console.log(budgetId, incomes, categories)
        }
        initializeDashboard()
        // console.log("END OF DASHBOARD useEffect #1: budgetId, incomes, categories: ")
        // console.log(budgetId, incomes, categories)
    }, [])



    useEffect(() => {

        if(budgetId) {
            console.log("Dashboard.js useEffect 2 detected all state loaded")
            setLoaded(true)
        }
        // console.log("END OF DASHBOARD useEffect #2: budgetId, incomes, categories: ")
        // console.log(budgetId, incomes, categories)
    }, [budgetId])


    const sendBudgetToDB = async (payload) => {
        const newBudget = await UpdateEntireBudget(payload)
        const { budgetId: b, incomes: i, categories: c } = newBudget
        setBudgetId(b)
        setIncomes(i)
        setCategories(c)
    }


    const budgetHooks = {
        incomes,
        setIncomes,
        categories,
        setCategories,
        sendBudgetToDB,
        budgetId
    }
    // console.log("Dashboard narrow: ", narrow)


        return( !loaded ? <div></div> :

    
            <div className="dashboard">
                <NavBar 
                    {...props}
                    narrow={narrow} 
                    setSidebarNarrowed={setSidebarNarrowed}
                    ticker={ticker}
                    setTicker={setTicker}
                />
    
                <main className="dash-main-flex">
                    <SideBar {...props} narrow={narrow} /> 
                    <div className={ narrow ? "sub-page expanded" : "sub-page"}> 
                        <Switch> 
                            {/* <Route 
                                exact path="/dashboard/" 
                                component={ () => ( 
                                    <Budget budgetHooks={budgetHooks} /> 
                                )} 
                            /> */}
                            <MemoizedBudgetRoute 
                                exact path="/dashboard/" 
                                budgetHooks={budgetHooks}
                                ticker={ticker}
                            />
                            <Route 
                                path="/dashboard/cashflow" 
                                component={ (props) => ( 
                                    <CashFlow {...props} /> 
                                    )} 
                            />
                            <Route 
                                path="/dashboard/account" 
                                component={ (props) => ( 
                                    <AccountPage {...props} id={id} /> 
                                )} 
                            />
                        </Switch>
                    </div>
                </main>
            </div>
        
        )

}

export default withRouter(Dashboard)






        // <ul ng-if="item.subMenu" className="al-sidebar-sublist"
        //             ng-className="{expanded: item.expanded, 'slide-right': item.slideRight}">
        //         <li ng-repeat="subitem in item.subMenu" ng-className="{'selected': subitem.selected, 'with-sub-menu': subitem.subMenu}">
        //             <a ng-mouseenter="hoverItem($event, item)" ng-if="subitem.subMenu" href ng-click="toggleSubMenu($event, subitem);"
        //             className="al-sidebar-list-link subitem-submenu-link"><span>{{ subitem.title }}</span>
        //             <b className="fa" ng-className="{'fa-angle-up': subitem.expanded, 'fa-angle-down': !subitem.expanded}"
        //                 ng-if="subitem.subMenu"></b>
        //             </a>
        //             <ul ng-if="subitem.subMenu" className="al-sidebar-sublist subitem-submenu-list"
        //                 ng-className="{expanded: subitem.expanded, 'slide-right': subitem.slideRight}">
        //             <li ng-mouseenter="hoverItem($event, item)" ng-repeat="subSubitem in subitem.subMenu" ng-className="{selected: subitem.selected}">
        //                 <a  ng-mouseenter="hoverItem($event, item)" href="{{ subSubitem.root }}">{{
        //                 subSubitem.title }}</a>
        //             </li>
        //             </ul>
        //             <a  ng-mouseenter="hoverItem($event, item)" target="{{subitem.blank ? '_blank' : '_self'}}" ng-if="!subitem.subMenu" href="{{ subitem.root }}">{{ subitem.title}}</a>
        //         </li>
        //         </ul>

        /*
        <div className="sidebar-hover-elem" ng-style="{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}"
                ng-className="{'show-hover-elem': showHoverElem }"></div>
        */

        // ul - slimscroll="{height: '{{menuHeight}}px'}" slimscroll-watch="menuHeight"






// for mobile friendly experience, budget categories should be collabsible panels with default setting as closed

// imagine panel on the left containing "links" in dropdown to open various "pages" in the main page
// all pages would render on the main dashboard page



