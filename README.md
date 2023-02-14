# Bikemap Web Challenge - see it live at [https://citybike-app.vercel.app/](https://citybike-app.vercel.app/)

Welcome to the Bikemap Web coding challenge! May we ask for 2-4 hours of your time to get an impression of how you work practically?

## Scenario

We are developing a web client for the [CityBikes API](https://api.citybik.es/v2/). So far, we have set up a SPA with two views (client side routes). Users can view a list of all available bike networks and for each of them a list of the stations. This is just a first, minimal iteration but the app is meant to advance and have a lot more features over time.

Let's imagine the app concept is useful and the data not outdated ;)

## Tasks

For the next iteration, there are the following tasks for you in the backlog:

### Show location of networks in list with icon

In the list of networks, each list item should show the network's location (city, country) as secondary information additionally to the network name. Use a location pin icon as indicator.

### Show additional station data

In the stations list of the network details, the following information should be shown on each list item:

- Bikes available (number of available bikes)
- Free slots (number of free slots)
- Updated (when this data was updated)

Render this as secondary information below the station name in each list item. It's enough to have simple label and value pairs such as "Bikes available: 3".

The date and time updated can be rendered in any kind of human readable format - please don't invest too much effort here.

### Filter stations by bikes available and free slots

There should be two toggles above the stations list in the network details view:

- Only show stations with bikes available
- Only show stations with free slots

The list of stations should adapt to the filter specified with these toggles.

## Requirements

Please commit your changes with meaningful messages (at least one commit per task). When you're done, just send the compressed folder back.

Feel free to add any dependency, but please do it on purpose and be prepared to explain your decision.

The limit of 4 hours is just meant to prevent you from spending too much time on this challenge. If you can't finish all the tasks it's not a problem. But please make sure that what you finish is of high quality.

## Quick Setup Guide

1. `npm install`
2. `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
