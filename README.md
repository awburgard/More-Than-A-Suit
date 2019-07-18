## Description

Duration: 2 Week Sprint

More than a Suit is a form filling and scheduling app created for the non-profit organization, Suits for Hire. The app helps gentlemen in need of suits find the appropriate attire for various occasions such as job interviews, funerals and court. Additional resources are provided on the app for the gentlemen; resources such as job skill training, legal aid, mental health and etc. The Kansas City Metro is the target community of the app and allows gentlemen to readily access the Suit for Hire calendar to schedule fittings.

The administration side of the app allows the administrator from Suit for Hire to edit resources, view scheduled fittings and to download appointment data in a csv file. All appointments past current date is automatically archived in the database while current schedules are displayed to ensure the most up to date schedule for the administer.

To see the fully functional site, please visit: {PUT A LINK HERE}
![MIT LICENSE](https://img.shields.io/github/license/awburgard/more_than_a_suit.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/awburgard/more_than_a_suit.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/awburgard/more_than_a_suit.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/awburgard/more_than_a_suit.svg?style=social)

## Installation
1. Before you get started, make sure you have the following software installed on your computer:
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
2. Create a new database named `suitup`.
3. Run the queries that are stored in the `database.sql` file to populate the tables and insert the values you'll need. Postico is recommended for running the queries.
4. Open your editor of choice and run a `npm install` in your terminal for this project to install all of the necessary dependencies.
5. In the terminal for this project run `npm run server` to start the server and `npm run client` to open a new browser window.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) in Kansas City who equipped and helped us to make this application a reality.

Thanks to [Suits for Hire](https://suitsforhire.org/) and David Garcia for giving us the opportunity to build More Than A Suit.

Create a new database called `suitup` and create a tables from database.sql file.


If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)


## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum. 

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Passport. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
    1. `POST /api/user/register` registers a new user, see body to change username/password
    2. `POST /api/user/login` will login a user, see body to change username/password
    3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!


## Usage

1. Click 'Suit Up' button to begin.
2. User enters their contact information. The 'First Name', 'Last Name', 'Zip', and 'Phone Number' are required to move on. This information is sent right away to David's dashboard so in the case of the user exiting the application before final confirmation, David can contact the user by phone.
3. User enters their measurements. This information allows David to approximate suit sizes and check against his inventory.
4. User selects what occasion they need the suit for. The selection better helps David decide what garments are best for the specific occasion.
5. User meets with David in-person or a phone call. They will select a date, click on the digital time to change the time, and an analog clock will appear. First selection will be the hour, second selection will be the minute, and third selection will be AM or PM. Once the user is satisfied with the time, they can click 'Enter' or click outside of the analog clock and their appointment time will appear in digital format. User will confirm.
6. User can review and edit information they have entered. If they need to change their appointment, they must email David to do so (noted in 'Edit' side of 'Confirmation').
7. User selects 'Confirm' and receives a text message reminding them of their appointment with David.
8. User will be brought to the 'Resources' page which will display the resources pertinent to their occasion they selected. If no selection was made, resources related to 'Job' will display automatically. The user can explore all the resources David has pooled by clicking on the different tabs. Numbers two through seven are not required by the user to view these resources as they are readily available for exploration.


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

* src/components
  * App/App
  * Footer/Footer
  * Nav/Nav
  * AboutPage/AboutPage
  * InfoPage/InfoPage
  * UserPage/UserPage
  * LoginPage/LoginPage
  * RegisterPage/RegisterPage
  * LogOutButton/LogOutButton
  * ProtectedRoute/ProtectedRoute
  * SplashPage/SplashPage
  * Template/Template

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
## Support
If you have suggestions or issues, please email Austin Burgard [awburgard@gmail.com](awburgard@gmail.com), Devon Mitchell [devonamitchell10@gmail.com](devonamitchell10@gmail.com), Isaac Morerod [idm9191@gmail.com](idm9191@gmail.com), or Konou Vang [konouvang@gmail.com](konouvang@gmail.com).
