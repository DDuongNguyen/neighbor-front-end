I need to Learn
1. geolocation- front (specifically radius and current location)
2. twillio- front
3. agendajs- front
4. calendar- front
5. resource worker- front***
6. WEBSOCKEEETTT- front ***
7. bootstrap/semantic or ONE OF THOSE UI STUFF- front
<!-- 8. self-referential- back -->
<!-- 9. redux- front *** -->
10. how to relax- irl
11. uploading pictures? active storage install somehow belongs to a current user
12. active job/cron job
<!-- geolocation -->
twilio
bootstrap

on top of things ill be using
<!-- 1. JWT -->
<!-- 2. Bcrypt -->
<!-- 3. Cors -->
4.


i sign up with username, name, password, phone number and address/ optional pic_url


i host an event
(chat)
neighbors with a radius of x to join

(self-referential and geolocation)

i delegate what i need if they come to that event? -> tasks
(another model)

i can also blacklist address i dont wanna join
remove who can join

set limit of how many people who can join?

PM-ing features (websocket so dont even think about it.)

issue: how do they prove that they own the house beside from putting in the address
=> maybe through uploading a picture of ID ? maybe scanning picture of that id? do i keep the data of that id then?
=> maybe keep image of the ID then have a log in page for admin to check on that user ID then manually update their address to where they have.
-> have a search bar in all users page




<script type='text/javascript' src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AoNK51DE7kLoGiY_RWNUvx3gFfgSsBHMiJN45CLjB9GIVNR7HheV8RMEd6bAc3ox' async defer></script>
####################################################################################################
AoNK51DE7kLoGiY_RWNUvx3gFfgSsBHMiJN45CLjB9GIVNR7HheV8RMEd6bAc3ox

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

http://dev.virtualearth.net/REST/v1/Locations/US/{adminDistrict}/{postalCode}/{locality}/{addressLine}?&key={BingMapsAPIKey}


http://dev.virtualearth.net/REST/v1/Locations/US/WA/98052/Redmond/1%20Microsoft%20Way?o=json&key=AoNK51DE7kLoGiY_RWNUvx3gFfgSsBHMiJN45CLjB9GIVNR7HheV8RMEd6bAc3ox
longtitude= data.resourceSets[0].resources[0].bbox[0]
latitude= data.resourceSets[0].resources[0].bbox[1]
longtitude: -122.128156, latitude: 47.639555
longtitude: 47.639555, latitude: -122.128156*



put all events on map as markers
book events on map/markers
*(only if you HAVE an address and  your address is within 800ft radius)*

calendar show all your events on calendar (hosting event and attending events) delete the invitation for that event

a function where you can accept ***

i really wanna do twillio. **











## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
