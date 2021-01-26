import CashflowDevRoute from "./components/MemoRoutes/CashflowDevRoute"
import RetirementRoute from "./components/MemoRoutes/RetirementRoute"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"
import { ReadEntireCashflow } from "../../Services/CashflowService"
import CashflowRoute from "./components/MemoRoutes/CashflowRoute"
import { ReadEntireBudget } from "../../Services/BudgetService"
import MarketsRoute from "./components/MemoRoutes/MarketsRoute"
import AccountPage from "./sub-pages/AccountPage/AccountPage"
import BudgetRoute from "./components/MemoRoutes/BudgetRoute"
import { Switch, Route, withRouter } from 'react-router-dom'
import React, { useState, useEffect, memo } from 'react';
import SideBar from "./components/Sidebar/SideBar"
import NavBar from "./components/NavBar/NavBar"
import "./components/NavBar/styles/navbar.css"
import "./styles/dashboard.css"


const Dashboard = (props) => {
    console.log(props)
    /* -------------------------- PROPS ------------------------- */

    const { userInfo, authenticated, gradientWrapper } = props.fromApp
    const { id: userId } = userInfo


    /* -------------------------- STATE ------------------------- */

    /*  ------ financial info ------*/

    const [months, setMonths] = useState(null)
    const [incomes, setIncomes] = useState(null)
    const [budgetId, setBudgetId] = useState(null)
    const [cashflowId, setCashflowId] = useState(null)
    const [categories, setCategories] = useState(null)

    /* --------- sidebar control ------- */

    const [userPreference, setUserPreference] = useState("")

    /* ---------- forcible rerenders -------- */

    const [ticker, setTicker] = useState(0)
    const [loaded, setLoaded] = useState(false)
    


    /* -------------------------- useEffects ------------------------- */

    /* #1: ----- async calls on first render ---- */

    useEffect(() => {
        if (!authenticated) {
            props.history.push("/")
        }
        const initializeDashboard = async () => {
            const cashflow = await ReadEntireCashflow({ userId: userId}, null)
            const budget = await ReadEntireBudget({ userId: userId }, null)
            const { budgetId: b, incomes: i, categories: c } = budget
            const { id: cashflowId, months: m } = cashflow
            setCashflowId(cashflowId)
            setCategories(c)
            setBudgetId(b)
            setIncomes(i)
            setMonths(m)
        }
        initializeDashboard()
    }, [])


    /* #2: --- block ui until state loads --- */

    const renderDependencies = [
        months,
        incomes,
        budgetId, 
        cashflowId, 
        categories,
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
        ticker,
        setTicker,
        userPreference,
        setUserPreference,
    }

    const propsSidebar = {
        userPreference, 
        setUserPreference
    }

    const budgetHooks = {
        incomes,
        budgetId,
        setIncomes,
        categories,
        setBudgetId,
        setCategories,
    }

    const cashflowProps = {
        months,
        setMonths,
        cashflowId,
        setCashflowId,
    }

    const accountProps = {
        gradientWrapper
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
                    fromDashboard={{...propsSidebar}}
                /> 
                <div className="sub-page"> 
                    <Switch> 
                        <BudgetRoute 
                            {...props}
                            exact path="/dashboard/" 
                            budgetHooks={budgetHooks}
                            ticker={ticker}
                        />
                        <CashflowDevRoute 
                            // path="/dashboard/cashflow" 
                            path="/dashboard/cashflow" 
                            fromDashboard={{...cashflowProps}}
                            ticker={ticker}
                            {...props}
                        />
                        {/* <MarketsRoute 
                            path="/dashboard/markets" 
                            ticker={ticker}
                            {...props}
                        /> */}
                        <RetirementRoute 
                            path="/dashboard/retirement" 
                            ticker={ticker}
                            {...props}
                        />
                        <Route 
                            {...props} 
                            path="/dashboard/account" 
                            component={(props) => ( 
                                <AccountPage 
                                    {...props} 
                                    fromDashboard={{...accountProps}} 
                                    id={userId} 
                                /> 
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



