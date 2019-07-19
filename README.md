![MIT LICENSE](https://img.shields.io/github/license/awburgard/more_than_a_suit.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/awburgard/more_than_a_suit.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/awburgard/more_than_a_suit.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/awburgard/more_than_a_suit.svg?style=social)

## Description
_Duration: 3 Week Sprint_

More than a Suit is a form filling and scheduling app created for the non-profit organization, Suits for Hire (SFH). The app helps gentlemen in need of suits find the appropriate attire for various occasions such as job interviews, funerals and court. Additional resources are provided on the app for the gentlemen; resources such as job skill training, legal aid, mental health and etc. The Kansas City Metro is the target community of the app and allows gentlemen to readily access the Suit for Hire calendar to schedule fittings.

The administration side of the app allows the administrator from SFH to edit resources, view scheduled fittings and to download appointment data in a csv file. All appointments past current date is automatically archived in the database while current schedules are displayed to ensure the most up to date schedule for the administer.

To see the fully functional site, please visit: [More Than A Suit](https://more-than-a-suit.herokuapp.com/#/)


## Installation
1. Before you get started, make sure you have the following software installed on your computer:
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
2. Create a new database named `suitup`.
3. Run the queries that are stored in the `database.sql` file to populate the tables and insert the values you'll need. [Postico](https://eggerapps.at/postico/) is recommended for running the queries.
4. In your terminal navigate to this project and run `npm install` to install all of the necessary dependencies.
5. Run `npm run server` to start the server 
6. Run `npm run client` to open a new browser window.

## Usage
1. Click 'Suit Up' button to begin.
2. User enters their contact information. The 'First Name', 'Last Name', 'Zip', and 'Phone Number' are required to move on. This information is sent right away to SFH's dashboard so in the case of the user exiting the application before final confirmation, SFH can contact the user by phone.
3. User enters their measurements. This information allows SFH to approximate suit sizes and check against his inventory.
4. User selects what occasion they need the suit for. The selection better helps SFH decide what garments are best for the specific occasion.
5. User selects to meet with SFH in-person or via a phone call. They will select a date, click on the digital time to change the time, and an analog clock will appear. First selection will be the hour, second selection will be the minute, and third selection will be AM or PM. Once the user is satisfied with the time, they can click 'Enter' or click outside of the analog clock and their appointment time will appear in digital format. User will confirm.
6. User can review and edit information they have entered. If they need to change their appointment, they must email SFH to do so (noted in 'Edit' side of 'Confirmation').
7. User selects 'Confirm' and receives a text message reminding them of their appointment with SFH.
8. User will be brought to the 'Resources' page which will display the resources pertinent to their occasion they selected. If no selection was made, resources related to 'Job' will display automatically. The user can explore all the resources SFH has pooled by clicking on the different tabs. Numbers two through seven are not required by the user to view these resources as they are readily available for exploration.


## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) in Kansas City who equipped and helped us to make this application a reality.

Thanks to [Suits for Hire](https://suitsforhire.org/) for giving us the opportunity to build More Than A Suit.
## Support
If you have suggestions or issues, please email Austin Burgard [awburgard@gmail.com](awburgard@gmail.com), Devon Mitchell [devonamitchell10@gmail.com](devonamitchell10@gmail.com), Isaac Morerod [idm9191@gmail.com](idm9191@gmail.com), or Konou Vang [konouvang@gmail.com](konouvang@gmail.com).
