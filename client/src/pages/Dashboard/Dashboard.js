import CashflowDevRoute        from "./components/MemoRoutes/CashflowDevRoute"
import RetirementRoute         from "./components/MemoRoutes/RetirementRoute"
import LoadingScreen           from "./components/LoadingScreen/LoadingScreen"
import AccountPage             from "./sub-pages/AccountPage/AccountPage"
import BudgetRoute             from "./components/MemoRoutes/BudgetRoute"
import { ReadEntireCashflow }  from "../../api_services/cashflow-api-service.ts"
import { ReadEntireBudget }    from "../../api_services/BudgetService.ts"
import SideBar                 from "./components/Sidebar/SideBar"
import NavBar                  from "./components/NavBar/NavBar"
import { useDashboardStyles }  from "./sub-pages/styles/styles"
import { withTheme }           from '@material-ui/core'
import "./components/NavBar/styles/navbar.css"
import "./sub-pages/styles/subpage.css"
import "./dashboard.css"
import { 
    Route, 
    Switch, 
    withRouter 
}  from 'react-router-dom'
import React, { 
    useEffect, 
    createRef, 
    useState, 
} from 'react'


const Dashboard = (props) => {

    const smallScreen = window.innerWidth <= 600

    /* -------------------------- PROPS ------------------------- */

    const { userInfo, gradientWrapper, } = props.fromApp
    const { id: userId } = userInfo
    const { fromApp, theme } = props


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
    const [coloredLinks, setColoredLinks] = useState(true)
    const [coloredAccountIcon, setColoredAccountIcon] = useState(false)


    /* -------------------------- useEffects ------------------------- */

    /* #1: - async calls on first render - */
    
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
        return () => (componentMounted = false)
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
        ...props,
        setTicker,
        id: userId,
        userPreference,
        setColoredLinks,
        setUserPreference,
        coloredAccountIcon,
        setColoredAccountIcon,
    }

    const propsSidebar = {
        ticker,
        setTicker,
        coloredLinks,
        userPreference, 
        sidebarClasses, 
        subpageClasses,
        setColoredLinks,
        setUserPreference,
        setSubpageClasses,
        setSidebarClasses,
        setColoredAccountIcon,
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
        theme,
        ticker, 
        months,
        setMonths,
        ...fromApp,
        cashflowId,
        setCashflowId,
    }

    const accountProps = {
        gradientWrapper
    }

    const subpageRef = createRef()
    const classes = useDashboardStyles(props.theme)


    return( !loaded ? <LoadingScreen /> :

        <div className={classes.dashboard}>
            <NavBar {...propsNavbar} />
            <main className="dash-main-flex">
                <SideBar {...propsSidebar} /> 
                <div 
                    ref={subpageRef} 
                    className={subpageClasses}
                    style={{backgroundColor: "white"}}
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
                            {...cashflowProps}
                            path="/dashboard/cashflow" 
                        />
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

export default withRouter(withTheme(Dashboard))