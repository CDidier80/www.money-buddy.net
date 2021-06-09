import { Route, Switch, withRouter } from 'react-router-dom'

import React, { useEffect, createRef, useState } from 'react'

import './components/NavBar/styles/navbar.css'
import './sub-pages/styles/subpage.css'
import './dashboard.css'

import { ReadEntireCashflow } from '../../api_services/cashflow-api-service.ts'
import { ReadEntireBudget } from '../../api_services/budget-api-service.ts'
import { BudgetApiService } from '../../api_services/budget-api-service.ts'
import CashflowDevRoute from './components/MemoRoutes/CashflowDevRoute'
import RetirementRoute from './components/MemoRoutes/RetirementRoute'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import { useDashboardStyles } from './sub-pages/styles/styles'
import AccountPage from './sub-pages/AccountPage/AccountPage'
import BudgetRoute from './components/MemoRoutes/BudgetRoute'
import SideBar from './components/Sidebar/SideBar'
import NavBar from './components/NavBar/NavBar'
import { withTheme } from '@material-ui/core'

const Dashboard = props => {
  const smallScreen = window.innerWidth <= 600

  const { userInfo, gradientWrapper } = props.fromApp
  const { id: userId } = userInfo
  const { fromApp, theme } = props

  const [ticker, setTicker] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [months, setMonths] = useState('')
  const [incomes, setIncomes] = useState('')
  const [budgetId, setBudgetId] = useState('')
  const [cashflowId, setCashflowId] = useState('')
  const [categories, setCategories] = useState('')

  const [userPreference, setUserPreference] = useState('')
  const initSidebarClass = smallScreen ? 'sidebar closed' : 'sidebar'
  const [sidebarClasses, setSidebarClasses] = useState(initSidebarClass)

  const initSubpageClass = smallScreen ? 'subpage sidebar-open' : 'subpage sidebar-closed'
  const [subpageClasses, setSubpageClasses] = useState(initSubpageClass)
  const [coloredLinks, setColoredLinks] = useState(true)
  const [coloredAccountIcon, setColoredAccountIcon] = useState(false)

  useEffect(() => {
    let componentMounted = true
    const initializeDashboard = async () => {
      const cashflow = await ReadEntireCashflow({ userId: userId }, null)
      // const budget = await ReadEntireBudget({ userId: userId }, null)
      console.log(BudgetApiService.get.entireBudget)
      const budget = await BudgetApiService.get.entireBudget({ userId: userId }, '')
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
    initializeDashboard()
    return () => (componentMounted = false)
  }, [])

  const renderDependencies = [months, incomes, budgetId, cashflowId, categories]

  useEffect(() => {
    let componentMounted = true
    let childrenShouldRender = true
    renderDependencies.forEach(state => {
      if (state == '') {
        childrenShouldRender = false
      }
    })
    componentMounted && setLoaded(childrenShouldRender ? true : false)
  }, renderDependencies)

  const subpageRef = createRef()
  const classes = useDashboardStyles(props.theme)

  return !loaded ? (
    <LoadingScreen />
  ) : (
    <div className={classes.dashboard}>
      <NavBar
        {...{
          ticker,
          ...props,
          setTicker,
          id: userId,
          userPreference,
          setColoredLinks,
          setUserPreference,
          coloredAccountIcon,
          setColoredAccountIcon
        }}
      />
      <main className='dash-main-flex'>
        <SideBar
          {...{
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
            setColoredAccountIcon
          }}
        />
        <div ref={subpageRef} className={subpageClasses} style={{ backgroundColor: 'white' }}>
          <Switch>
            <BudgetRoute
              budgetHooks={(incomes, budgetId, setIncomes, categories, setBudgetId, setCategories)}
              exact
              path='/dashboard/'
              subpageRef={subpageRef}
              ticker={ticker}
              {...props}
            />
            <CashflowDevRoute
              {...{
                theme,
                ticker,
                months,
                setMonths,
                ...fromApp,
                cashflowId,
                setCashflowId,
                path: '/dashboard/cashflow'
              }}
            />
            <RetirementRoute path='/dashboard/retirement' ticker={ticker} {...props} />
            <Route
              {...props}
              path='/dashboard/account'
              component={() => (
                <AccountPage fromDashboard={{ gradientWrapper }} id={userId} {...props} />
              )}
            />
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default withRouter(withTheme(Dashboard))
