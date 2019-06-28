import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';

/**
 * @param {object} app create the application.
 */
const app = express();

/**
 * @param {URL} logger  When you run your app, you might notice that all the routes that are requested are logged to console. If you want to disable this, you can just comment out this middleware.
*/
app.use(logger('dev'));

/**
 * @param {Object} requset_body  handles when JSON is sent via POST request and it puts this data in request.body
 */
app.use(bodyParser.json());

/**
 * @param {String} query_in_url  parses query string data in the URL (e.g. /profile?id=5) and puts this in request.query.
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * @param {String} cookie  This takes all the cookies the client sends and puts them in request.cookies. It also allows you to modify them before sending them back to the client, by changing response.cookies.
 */
app.use(cookieParser());

// call the application routes
routes(app);

app.listen(8080, () => {
  console.log('App listening on port 8080');
});

export default app;