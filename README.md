# www.Money-Buddy.net

###
### By Collin Didier


[GitHub](https://github.com/CDidier80) |
[LinkedIn](https://www.linkedin.com/in/collin-didier/) 


### Technologies used:
   <div width="39%" align="center">
    <img width="8%" height=30px" src="https://img.shields.io/badge/-HTML5-E34F26?style=plastic-square&logo=html5&logoColor=white" />
    <img width="8%" height=30px" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3" />
    <img width="11%" height=30px" src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript" />
    <img width="11%" height=30px" src="https://img.shields.io/badge/-ReactJS-black?style=flat-square&logo=react" />
    <img width="11%" height=30px" src="https://img.shields.io/badge/-NodeJS-black?style=flat-square&logo=Node.js" />
    <img width="10%" height=30px" src="https://img.shields.io/badge/-ExpressJS-black?style=flat-square&logo=express" />
    <img width="11%" height=30px" src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql" />
    <img width="10%" height=30px" src="https://img.shields.io/badge/-Sequelize-336791?style=flat-square&logo=sequelize" />
    <img width="10%" height=30px" src="https://img.shields.io/badge/-MaterialUI-blue?style=flat-square&logo=materialui" />
  </div>
</div>

<p>&nbsp;</p>

![budget snapshot](https://i.ibb.co/HB7khSK/973970-E8-03-EF-4806-A836-495842607-EBD.jpg)
![cashflows snapshot](https://i.ibb.co/12bxSDd/1-D6-A3-D64-049-F-4-AFE-971-E-D5249-C3480-DC.jpg)
![retirement snapshot](https://i.ibb.co/YyBhx5H/A99-E7-DAC-3-FDC-47-BD-A100-3-FD0-B6-B5430-A.jpg)

## Description

This app was inspired by needs of many friends, family and others who desire greater control over their personal financial planning; Informed, USER-controlled financial insights should be accessible to everyone, regardless of one's familiarity with spreadsheet software.

This full-stack web app is designed to make personal financial planning both easy and comprehensive. The user experiences a smooth and intuitive UI comprised of a toolset of financial widgets. That experience is powered by sophisticated and  automated financial planning logic, programmed to provide valuable analysis, tracking and reporting on each user's unique situation.

At this stage of development, the app covers the topics of budgeting, cashflows, and retirement planning - with many more features on the way. 



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


## ERD - Budget & Cash Flow 
![wireframe](https://i.ibb.co/kSM6BmR/DF72-CC96-8-F29-45-BC-8629-0-A9-AB345509-D.jpg)

<!-- ## Wireframe
![wireframe](./img/homepage.png) -->

<!-- ## Trello link
https://trello.com/b/lDwcI9L2/personal-finance
 -->
