# MEDWING - Google Map

This application shows Google Map and markers on saved locations in it.
Application is developed using 
- ##### React, Redux and Jest [Front-End]
- ##### Python, Flask, MySql [Back-End]

State management in front-end is achieved through Redux. Front-End unit test are written in Jest.
# Features
Following are the feature and their test cases.

- User can add, update, fetch and delete markers from front-end application.
- Once User saves or updates a marker, data will be saved in database and reflect changes on front-end as well immediately.

## Front-End Installation

- Clone the repo or download code from [React application - Google Map Markers](https://github.com/ranakhurram666/GoogleMaps)
- Run `npm install` in the root folder
- Run `npm install --only=dev` to install dev dependencies
- Make sure that back-end flask server is running, (see back-end installation guide)
- Run `npm run dev`
- Application is running at http://localhost:8080
- To run tests, run `npm tests -- -u`

## Back-End Installation

- Install Python 2.7
- Install pip for Python 2.7 by running `apt-get install python-pip`
- Clone or download code from [Python Flask API - Google Map Markers](https://github.com/ranakhurram666/MapApi)
- Run `pip install -r requirements.txt` in code's root folder
- Create MySql database and define your DB_NAME, DB_USER, DB_PASSWORD and DB_HOST in `constants.py	`
- Now Run `python run.py`
- Application is running on http://0.0.0.0:5000

## Some Guidelines

- Configurations like database config, status codes and constants are handled in separate files in both repos
- If third party encounters any error then application will not break, just map will not show. CRUD operations will work as normal
- If you need to change geocoder api(Google maps) or need to add any other geocoder api(Bing maps) then just you need to change front-end(React) code. 
	- In `src/js/components/maps/`, add the new geocoder api integration component.
	- In  `src/js/components/mapMarkers/`, add markers component if needed. 
	- In `src/js/components/Layout.js`, change `<GoogleMap/>` to the new one e.g `<BingMap/>`
	- Rest of the items will remain same
