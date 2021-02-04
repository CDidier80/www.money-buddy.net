import CashflowDevRoute               from "./components/MemoRoutes/CashflowDevRoute"
import RetirementRoute                from "./components/MemoRoutes/RetirementRoute"
import LoadingScreen                  from "./components/LoadingScreen/LoadingScreen"
import MarketsRoute                   from "./components/MemoRoutes/MarketsRoute"
import AccountPage                    from "./sub-pages/AccountPage/AccountPage"
import BudgetRoute                    from "./components/MemoRoutes/BudgetRoute"
import { ReadEntireCashflow }         from "../../Services/CashflowService"
import { ReadEntireBudget }           from "../../Services/BudgetService"
import SideBar                        from "./components/Sidebar/SideBar"
import NavBar                         from "./components/NavBar/NavBar"
import { Switch, Route, withRouter }  from 'react-router-dom'
import React, { useEffect, useState, createRef, } from 'react'
import "./components/NavBar/styles/navbar.css"
import "./styles/dashboard.css"
import "./styles/subpage.css"


const Dashboard = (props) => {


    const smallScreen = window.innerWidth <= 600

    /* -------------------------- PROPS ------------------------- */

    const { 
        userInfo, 
        validSession,
        authenticated,
        gradientWrapper, 
        verifyTokenValid, 
    } = props.fromApp
    const { id: userId } = userInfo


    /* -------------------------- STATE ------------------------- */

    /*  ------ financial info ------*/

    const [months, setMonths] = useState("")
    const [incomes, setIncomes] = useState("")
    const [budgetId, setBudgetId] = useState("")
    const [cashflowId, setCashflowId] = useState("")
    const [categories, setCategories] = useState("")

    /* --------- sidebar control ------- */

    const [userPreference, setUserPreference] = useState("")
    const initSidebarClass = smallScreen ? "sidebar closed" : "sidebar"
    const [sidebarClasses, setSidebarClasses] = useState(initSidebarClass)
    
    /* --------- subpage control ------- */
    
    const initSubpageClass = smallScreen ? "subpage sidebar-open" : "subpage sidebar-closed"
    const [subpageClasses, setSubpageClasses] = useState(initSubpageClass)

    /* ---------- forcible rerenders -------- */

    const [loaded, setLoaded] = useState(false)
    const [ticker, setTicker] = useState(0)


    /* -------------------------- useEffects ------------------------- */

    /* #1: ---- verify token validity ---- */

    useEffect(() => verifyTokenValid(), [])


    /* #2: - async calls on first render - */
    
    useEffect(() => {
        let componentMounted = true
        const initializeDashboard = async () => {
            const cashflow = await ReadEntireCashflow({ userId: userId}, null)
            const budget = await ReadEntireBudget({ userId: userId }, null)
            if (componentMounted) {
                const { budgetId: b, incomes: i, categories: c } = budget››
                const { id: cashflowId, months: m } = cashflow
                setCashflowId(cashflowId)
                setCategories(c)
                setBudgetId(b)
                setIncomes(i)
                setMonths(m)
            }
        }
        /* - verify token before requesting user data - */
        validSession && initializeDashboard()
        return () => componentMounted = false
    }, [validSession])


    /* #2: --- block ui until state loads --- */

    const renderDependencies = [
        months,
        incomes,
        budgetId, 
        cashflowId, 
        categories,
    ]

    useEffect(() => {
        let componentMounted = true
        let childrenShouldRender = true
        renderDependencies.forEach((state) => {
            if (state == "") {
                childrenShouldRender = false
            }
        })
        if (componentMounted){
            setLoaded(childrenShouldRender ? true : false)
        }
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
        subpageClasses,
        setUserPreference,
        setSubpageClasses,
        setSidebarClasses,
        sidebarClasses, 
        ticker,
        setTicker,
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

    const subpageRef = createRef()


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
                <div 
                    ref={subpageRef} 
                    style={{backgroundColor: "white"}}
                    className={subpageClasses}
                > 
                    <Switch> 
                        <BudgetRoute 
                            budgetHooks={budgetHooks}
                            exact path="/dashboard/" 
                            subpageRef={subpageRef}
                            ticker={ticker}
                            {...props}
                        />
                        <CashflowDevRoute 
                            // path="/dashboard/cashflow" 
                            fromDashboard={{...cashflowProps}}
                            path="/dashboard/cashflow" 
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
                                fromDashboard={{...accountProps}} 
                                id={userId} 
                                    {...props} 
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



