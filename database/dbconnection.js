import mysql from 'mysql';
import env from './config/config';

/**@desc db connection */
const con = mysql.createConnection(env.development);

con.connect((err) => {
    if (err) throw err
    console.log('Successfully connected to database');
  });


export default con;
