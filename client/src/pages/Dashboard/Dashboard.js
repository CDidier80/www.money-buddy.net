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
import CashflowDevRoute from "./components/MemoRoutes/CashflowDevRoute"

import "./styles/dashboard.css"


const Dashboard = (props) => {

    /* -------------------------- PROPS ------------------------- */

    // console.log(props)
    const { userInfo, authenticated } = props.fromApp
    const { id: userId } = userInfo


     /* -------------------------- STATE ------------------------- */

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

             /* useEffect #1: ----- async calls for first render ----- */

    useEffect(() => {

        console.log("dashboard useEffect")
        if (!authenticated) {
            props.history.push("/")
        }
        const initializeDashboard = async () => {
            const budget = await ReadEntireBudget({ userId: userId }, null)
            const cashflow = await ReadEntireCashflow({ userId: userId}, null)
            const { 
                budgetId: b, 
                incomes: i, 
                categories: c 
            } = budget
            const { 
                id: cashflowId, 
                months: m
            } = cashflow
            setIncomes(i)
            setCategories(c)
            setMonths(m)
            setCashflowId(cashflowId)
            setBudgetId(b)
        }
        initializeDashboard()

    }, [])


            /* useEffect #2: --- ensure all state set before rendering children --- */

    const renderDependencies = [
        budgetId, 
        cashflowId, 
        incomes,
        categories,
        months,
    ]

    useEffect(() => {
        let childrenShouldRender = true
        renderDependencies.forEach((state) => {
            if (state == null) {
                childrenShouldRender = false
            }
        })
        setLoaded(childrenShouldRender ? true : false)
    }, [...renderDependencies])



    /* --------------------- PROPS FOR CHILDREN --------------------- */

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
                        {/* <CashflowRoute 
                            path="/dashboard/cashflow" 
                            fromDashboard={{...cashflowProps}}
                        /> */}

                        <CashflowDevRoute 
                            path="/dashboard/cashflow" 
                            fromDashboard={{...cashflowProps}}
                            // {...props}
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



