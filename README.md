## Overview

The Search Manager App is an application that allows users to manage and save search results obtained from the Bing Search API. Users can perform searches, view results, and save them for future reference.

## Features

- **Search:** Perform searches using the Bing Search API.
- **Authentication:** User authentication to save and manage personalized search results.
- **Save Results:** Save search results to the application for later reference.
- **View History:** View and manage search history.

## Backend

- Web server using NODEjs (running on port 8000).
- RESTful APIs (CRUD operations exposed for database tables) using Router to execute CRUD operations for each table separately.
- Database using Sequelize (SQLite dialect).

## Frontend

- **Single Page Application** running on port 3000.
- Made with React.js.
- Used React Router to separate different UI parts and functionalities.

## Run instructions

1. Open a terminal in the directory where you want to clone the project.
2. Run "git clone https://github.com/andreititussandu/Search-Manager-Project.git"
3. Change into the project directory.
4. Run "npm i".
5. Run "npm run dev".
6. Open a second terminal in the main directory -> client.
7. Run "npm i".
8. Run "npm start".
9. If the web browser does not appear, navigate to localhost:3000/.
