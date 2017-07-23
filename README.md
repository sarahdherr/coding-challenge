# Sarah Herr's Coding Challenge
Welcome to Sarah's coding challenge submission! It is built with Node, Sequelize, Express and React. There is a GUI on the browser to see the answers to both questions.

## Machine Setup:
- Install and run Postgres (version 9.6)
- Install node (version 7.8.0)
- Install npm (version 4.2.0)

## Run the code:
1. `npm install`
2. `npm run seed`
3. `npm run build`
4. `npm start`
5. Go to localhost:8080

## Deeper look at the solution code

### Question 1: Messages
The tables for this question is set up in `/db/models`. The tables and associations match the examples given.

The queries for this question are written in Sequelize in `/server/apiRoutes`.
- List each domain query is in `/server/apiRoutes/domains` at api route `GET /api/domains`.
- List each email with owners name query is in `/server/apiRoutes/emails` at api route `GET /api/emails`.
- List each domain and total number of emails sent to it (combining To, CC, and BCC) query is in `/server/apiRoutes/domains` at api route `GET /api/domains/messages`. This query has some helper functions for this query are imported from `/server/apiRoutes/route_functions`.

The result from these queries are displayed on the front end through AJAX requests, using the axios library. Although the solution is on the front end, all the logic is on the back end.

### Question 2: Golden Pond
The solution functions for this question are in `browser/helper_functions/pond_functions`. The functionality is exported to `/browser/components/Pond.jsx` to be used in `this.handlePondSubmit`.

To interact with my solution code, I also made a repl (https://repl.it/JekI/1) with these functions.

## Questions or Comments
If you have any questions or problems, please don't hesitate to email me at `sarahherr02@gmail.com`.
