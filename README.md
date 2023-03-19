## Build Environment Variables

These environment variables are required for the Cloudflare Pages Functions to run and during build time when deploying the project to Cloudflare

```console
YOUTUBE_KEY=your-youtube-api-key
```

## Usage

Customise layout and labels

```css
.container {
  font-size: 20px;
  border-radius: 6px;
  background-color: #fec8d8;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: #0f0f0f;
}

.header::after {
  content: "2023 !Youtube Sub Goal";
}

.goal::after {
  content: "1000";
}
```

## OBS Studio

Recommended width and height for the browser source, 420px x 120px

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/[YoutubeUsername]](http://localhost:3000/[YoutubeUsername]) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `wrangler pages dev build`

Launches the pages function and serves the build folder static files.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
