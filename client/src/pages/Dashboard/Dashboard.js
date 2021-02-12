import CashflowDevRoute               from "./components/MemoRoutes/CashflowDevRoute"
import RetirementRoute                from "./components/MemoRoutes/RetirementRoute"
import LoadingScreen                  from "./components/LoadingScreen/LoadingScreen"
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
        gradientWrapper, 
    } = props.fromApp
    const { id: userId } = userInfo


    /* -------------------------- STATE ------------------------- */

    /* ---------- forcible rerenders -------- */

    const [ticker, setTicker] = useState(0)
    const [loaded, setLoaded] = useState(false)
    
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



    /* -------------------------- useEffects ------------------------- */

    /* #1: ---- verify token validity ---- */

    // useEffect(() => verifyTokenValid(), [])


    /* #2: - async calls on first render - */
    
    useEffect(() => {
        let componentMounted = true
        const initializeDashboard = async () => {
            const cashflow = await ReadEntireCashflow({ userId: userId}, null)
            const budget = await ReadEntireBudget({ userId: userId }, null)
            if (componentMounted) {
                const { budgetId: b, incomes: i, categories: c } = budget
                const { id: cashflowId, months: m } = cashflow
                setCashflowId(cashflowId)
                setCategories(c)
                setBudgetId(b)
                setIncomes(i)
                setMonths(m)
            }
        }
        /* - verify token before requesting user data - */
        initializeDashboard()
        return () => componentMounted = false
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
        let componentMounted = true
        let childrenShouldRender = true
        renderDependencies.forEach((state) => {
            if (state == "") {
                childrenShouldRender = false
            }
        })
        componentMounted && setLoaded(childrenShouldRender ? true : false)

    }, [...renderDependencies])


    /* --------------------- PROPS FOR CHILDREN --------------------- */

    const propsNavbar = {
        ticker,
        setTicker,
        userPreference,
        setUserPreference,
    }

    const propsSidebar = {
        ticker,
        setTicker,
        userPreference, 
        sidebarClasses, 
        subpageClasses,
        setUserPreference,
        setSubpageClasses,
        setSidebarClasses,
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
                            component={() => ( 
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