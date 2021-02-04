# Money-Buddy

Date: January 2, 2021

By: Collin Didier


[GitHub](https://github.com/CDidier80) |
[LinkedIn](https://www.linkedin.com/in/collin-didier/) 

![budget snapshot](https://i.ibb.co/qjgGV5p/D86-BAE02-94-D8-40-CF-BD34-33-A877-C1-D13-C.jpg)
![cashflows snapshot](https://i.ibb.co/r0Gj6dk/3-C4391-B8-1-CE0-47-C3-8932-FA3-DA3-D0880-B.jpg)
![retirement snapshot](https://i.ibb.co/wM7p0Fr/4-B5-FA731-A8-B8-4-CC2-920-E-8-BD3820696-CB.jpg)

## Description

This app was inspired by needs of many friends, family and others who desire greater control over their personal financial planning; Informed, USER-controlled financial insights should be accessible to everyone, regardless of one's familiarity with spreadsheet software.

This full-stack web app is designed to make personal financial planning both easy and comprehensive. The user experiences a smooth and intuitive UI comprised of a toolset of financial widgets. That experience is powered by sophisticated and  automated financial planning logic, programmed to provide valuable analysis, tracking and reporting on each user's unique situation.

At this state of development, the app covers the topics of budgeting, cashflows, and retirement planning - with many more features on the way. 



## Technologies used
   <div width="39%" align="right">
    <img width="12%" height=30px" src="https://img.shields.io/badge/-HTML5-E34F26?style=plastic-square&logo=html5&logoColor=white" />
    <img width="12%" height=30px" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" />
    <img width="12%" height=30px" src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript" />
    <img width="12%" height=30px" src="https://img.shields.io/badge/-ReactJS-black?style=flat-square&logo=react" />
    <img width="12%" height=30px" src="https://img.shields.io/badge/-NodeJS-black?style=flat-square&logo=Node.js" />
    <img width="12%" height=30px" src="https://img.shields.io/badge/-ExpressJS-yellow?style=flat-square&logo=express" />
    <img width="12%" height=30px" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql" />
    <img width="12%" height=30px" src="https://img.shields.io/badge/-MaterialUI-blue?style=flat-square&logo=materialui" />
  </div>
</div>


## Implemented Widgets/Features

### User Accounts 
1. Users can create an account with email/password
2. Users can update their login credentials
3. Users can delete their account
4. Passwords are hashed for security
4. Partial-validation of credentials - because this app is being actively demoed, I've temporarily allowed invalid email addresses for testing user registration/login. However, the form control will reject email addresses not conforming to proper formatting i.e. "example@somesite.com". Note that accounts created with invalid email addresses will be purged in the near future.
5. Ability to save changes made during session


### Budget
1. Income and Expense Widgets
2. Default expenses/expense categories populate the budget upon user registration
3. Users add, delete, and update income/expense line-items and categories
4. Users can save all changes.
5. A Budget Summary Chart with annual & monthly views of income/expenses and net savings/loss that updates in real-time with user changes.
6. Distribution of Spending Chart that breaks down expenses by category and updates in real-time with user-changes.

### Retirement
1. An animated, live-updating retirement chart that plots the accumulated savings and annual income of a user over their lifetime
2. 9 slider-controls allowing the user to input financial information and set assumptions about the future
3. Tooltips displaying accumulated savings on-hover over of the selected year on the chart

### Cashflows
1. An animated, live-updating chart projecting a user's monthly inflows, outflows and available cash 
2. Monthly cashflow widgets displaying monthly inflows/outflows, starting/ending cash and net cashflows
3. Ability to paginate through months
4. *Temporary - a randomize button for demo purposes showing the page view with randomized financial data

### Responsive Design

Responsive pages and components are partially implemented, with improvements made frequently. 
The landing page and login page have been optimized across device sizes.
Current responsive design efforts are focused on the various financial widgets throughout the app.

### Security Features

1. Protective middleware
2. Use of JSON Web Tokens 
3. Encryption of user submitted data
4. HTTPS protocol 


## Upcoming Widgets/Features

1. Cashflows integration with Budget for fine-tuned control over short and long term projections
2. Ability to add, edit and delete inflows and outflows by line-item or category
3. Ability to sync Budget to Cashflows or Cashflows to Budget with recent changes.
4. Retirement page auto-populated with user information 
5. Ability to save and view different retirement/savings scenarios
3. Tax Estimator w/ budget integration
4. Holiday/Gift - an optional sub-budget on the main Budget
5. Investment Calculator collection
6. Investments Timeline
7. Net-worth timeline
9. Markets dashboard with live-feed from FinnHub API


## ERD
#### ERD - Budget Only
![wireframe](https://i.ibb.co/y89h3P0/76-C6-D7-D9-165-C-4409-B6-DF-7-E3-BC51-B2432.jpg)

#### ERD - Budget & Cash Flow 
![wireframe](https://i.ibb.co/kSM6BmR/DF72-CC96-8-F29-45-BC-8629-0-A9-AB345509-D.jpg)

<!-- ## Wireframe
![wireframe](./img/homepage.png) -->

<!-- ## Trello link
https://trello.com/b/lDwcI9L2/personal-finance
 -->
