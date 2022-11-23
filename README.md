## School House Talk

### Authors:

- Tim Traylor
- Isaiah Keller
- Luis Rosales
- Stephen Martinez
- Teresa Phillips

### Problem Domain

School House Talk will act as a single source of truth for communication and information about school activities and events between faculty and parents.

Coach and Admin have access to create new events, modify existing ones, and delete an event all together.

### Libraries, Packages, & System Requirements : AuthO, Node.JS, Axios, Base-64, BCrypt, Chance, Express, Inquirer, Postgres, Sequelize, Jest, Socket.io, Socket.io-client, Supertest

### Setup

Clone down back-end from GitHub repository
`npm install`
    - installs dependencies required
`npm run db:config` 
    - initializes the Postgres database local
    - make changes to './config/config.json' info:
        - username: "example1"
        - database: "school-house-talk"
        - dialect: "postgres"
`npm run db:create`
    - creates database in named './config/config.json'
`npm run dev`
    - starts the server
`npm run seed`
    - seeds postgres database with information
`npm run socket`
    - creates socket server on designated port
`npm run user`
    - connects a user and allows for updates in sports chosen
`npm run coach`
    - allows for info to be changed and updated
    - informs 'users' in that sport
    - updates database to reflect changes


## ENV info

- `PORT` - Port Number
- `DATABASE_URL` - postgres://username:password@localhost:5432/school-house-talk
- `SECRET` - string


### Features

* An admin can create events which will send event announcements to the specific sport
* A coach can update information for all events which will send event announcements to the specific sport
* Students/parents will be able to view updates to rooms they are subscribed to
* Teachers will receive all announcements and updates

#### MVP

*App will allow coaches and admin to send event information via sms/email.
*Users (students/teachers/parents) will subscribe to a specific event(sport) and will receive event information and real-time updates.
*Admin/Coaches will have proper authorization to make changes to data tables that contain event information and users.


### UML

[MVP UML](./assets/Midterm%20MVP%20UML.png)

### Tests

- How do you run tests? 

NPM test
