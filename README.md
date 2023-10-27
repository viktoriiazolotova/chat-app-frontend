# Astro Talk ChatRoom

Astro Talk is a full-stack web application that allows multiple users to join specific chat rooms anonymously and concurrently, post messages, and view live chat history during an active session.

## To join chat room:
 1. Astro Talk URL: https://lhd4zd-3000.csb.app/
 2. Enter your name
 3. Enter room id (for example, 1234)
 4. Share your room id with others to join the same room
 5. To get the Astronomy Picture of the Day, type 'apod'
 6. Enjoy your talk

## Technical documentation
### Frontend
The frontend is built using React, JavaScript, CSS, and the socket.io-client library. It is deployed on Netlify.

### Backend
The backend is developed using Node.js and Express and is deployed on Heroku. You can find the GitHub link to the backend [here](https://github.com/viktoriiazolotova/chat-app-backend).

### Usage
To use the website, you can access it in two ways:

- Open this [sandbox link](https://lhd4zd-3000.csb.app/) in your browser. You can join the same chat room multiple times, for example, using room ID "1234," and start chatting.
- Alternatively, you can use the deployed version of the application at [https://astro-live-chat.netlify.app/](https://astro-live-chat.netlify.app/).

### Features

- Multiple users can concurrently and anonymously join specific chat rooms and post messages by clicking the "Send" button or pressing the "Return" on the keyboard.
- Users can view the live chat history during an active session. Note: currently chat history will be lost after a page refresh.
- User names, timestamps, and messages are displayed in the chat room.
- Users can type 'apod' (case-insensitive), and if the Astronomy Picture of the current day is an image, it will be rendered below the chat history. Otherwise, an error message stating "Sorry, no picture today" will be displayed.

### Possible Enhancements (if time would allow)

- Determine a chat history timeframe and connect to a database to save and retrieve chat history.
- Add the option for users to enter a specific date to retrieve the Astronomy Picture of the Day for that day.
- Enable users to upload videos or video links if the Astronomy Picture of the Day is a video.
- Distinguish between local senders and remote users using different colors.
- Make API calls for Astronomy Picture of the Day images from the backend instead of the frontend to enhance API key security and avoid exposing it on the client side (frontend).
- Add an option (button "Leave ChatRoom") for users to leave the ChatRoom.
- Add feature for users to view the list of all present users in the ChatRoom.
- Enhance error handling, including cases where no name or room ID (name) is entered.
- Implement unit tests, integration tests, and end-to-end tests to ensure the application's stability and reliability.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
