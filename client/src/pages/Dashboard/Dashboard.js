import React, { useState, useEffect, memo } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { ReadEntireBudget } from "../../Services/BudgetService"
import { ReadEntireCashflow } from "../../Services/CashflowService"
import NavBar from "./components/NavBar/NavBar"
import "./components/NavBar/styles/navbar.css"
import SideBar from "./components/Sidebar/SideBar"
import AccountPage from "./sub-pages/AccountPage/AccountPage"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"
import BudgetRoute from "./components/MemoRoutes/BudgetRoute"
import CashflowRoute from "./components/MemoRoutes/CashflowRoute"
import "./styles/dashboard.css"


const Dashboard = (props) => {

    /* -------------------------- PROPS ------------------------- */

    // console.log(props)
    const { id: userId } = props.userInfo


     /* -------------------------- STATE ------------------------- */

    // {/* ---------------------------------------- user info in state*/}
    // const [budgetId, setBudgetId] = useState(null)
    // const [cashflowId, setCashflowId] = useState(null)
    // const [incomes, setIncomes] = useState([])
    // const [categories, setCategories] = useState([])
    // const [months, setMonths] = useState([])
    // const [inflows, setInflows] = useState([])

    // {/* ----------------------------------- rendering & ui control */}
    // const [narrow, setSidebarNarrowed] = useState(false)
    // const [ticker, setTicker] = useState(0)
    // const [loaded, setLoaded] = useState(false)

            /*  state:  ------------ financial info in state -----------*/

    const [budgetId, setBudgetId] = useState(null)
    const [cashflowId, setCashflowId] = useState(null)
    const [incomes, setIncomes] = useState(null)
    const [categories, setCategories] = useState(null)
    const [months, setMonths] = useState(null)

            /*  state:  ------------ rendering & ui control ---------- */

    const [narrow, setSidebarNarrowed] = useState(false)
    const [ticker, setTicker] = useState(0)
    const [loaded, setLoaded] = useState(false)
    


    /* -------------------------- useEffects ------------------------- */

    const renderDependencies = [
        budgetId, 
        cashflowId, 
        incomes,
        categories,
        months,
    ]

    // console.log('typeof renderDependencies:', renderDependencies)

             /* useEffect:  ------ async calls for first render ------ */

    useEffect(() => {
        if (!props.authenticated) {
            props.history.push("/")
        }
        const initializeDashboard = async () => {
            const budget = await ReadEntireBudget({ userId: userId }, null)
            const cashflow = await ReadEntireCashflow({ userId: userId}, null)
            console.log("CASHFLOW DATA", cashflow)
            const { 
                budgetId: b, 
                incomes: i, 
                categories: c 
            } = budget
            const { 
                id: cashflowId, 
                months: m
            } = cashflow
            // ReactDOM.unstable_batchUpdate
            setIncomes(i)
            setCategories(c)
            setMonths(m)
            setCashflowId(cashflowId)
            setBudgetId(b)

            // console.log("Log of state in async call: ")
            // console.log(budgetId, incomes, categories)
        }
        initializeDashboard()
        // console.log("END OF DASHBOARD useEffect #1: budgetId, incomes, categories: ")
        // console.log(budgetId, incomes, categories)
        // console.log(budgetId, cashflowId, incomes, categories, months)
    }, [])


            /* useEffect:  --- ensure all state set before rendering children --- */

    useEffect(() => {

        let childrenShouldRender = true
        renderDependencies.forEach((state) => {
            if (state == null) {
                childrenShouldRender = false
            }
        })
        setLoaded(childrenShouldRender ? true : false)
        // if (childrenShouldRender) {
        //     console.log("DASHBOARD useEFFECT detected all state loaded")
        //     console.log(budgetId, cashflowId, incomes, categories, months)
        // }

    }, [...renderDependencies])

    // useEffect(() => {
    //     if(budgetId && cashflowId && inflows && months && categories && flowcategories && incomes) {
    //         console.log("Dashboard.js useEffect 2 detected all state loaded")
    //         setLoaded(true)
    //     }
    //     console.log("END OF DASHBOARD useEffect #2: budgetId, incomes, categories: ")
    //     console.log(budgetId, cashflowId, incomes, categories, months, inflows, flowcategories)
    // }, [
    //     budgetId, 
    //     cashflowId, 
    //     incomes,
    //     categories,
    //     months,
    //     inflows,
    //     flowcategories
    // ])

    

    {/*  PROPS OBJECTS  */}

    const propsNavbar = {
        narrow,
        setSidebarNarrowed,
        ticker,
        setTicker
    }

    const budgetHooks = {
        incomes,
        setIncomes,
        categories,
        setCategories,
        budgetId,
        setBudgetId
    }

    const cashflowProps = {
        cashflowId,
        setCashflowId,
        months,
        setMonths
    }


    return( !loaded ? <LoadingScreen /> :

        <div className="dashboard">
            <NavBar 
                {...props}
                fromDashboard={{...propsNavbar}}
            />

            <main className="dash-main-flex">
                <SideBar 
                    {...props} 
                    narrow={narrow} 
                /> 
                <div className={ narrow ? "sub-page expanded" : "sub-page"}> 
                    <Switch> 
                        <BudgetRoute 
                            exact path="/dashboard/" 
                            budgetHooks={budgetHooks}
                            ticker={ticker}
                        />
                        <CashflowRoute 
                            path="/dashboard/cashflow" 
                            fromDashboard={{...cashflowProps}}
                        />
                        <Route 
                            path="/dashboard/account" 
                            component={ (props) => ( 
                                <AccountPage {...props} id={userId} /> 
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



