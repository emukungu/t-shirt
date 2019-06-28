import con from '../../database/dbconnection';
import { allItemsQuery, allDepartmentsQuery, 
  singleDepartmentQuery 
} from '../sqlqueries/rawqueries';
/**
 * @desc query db for all items.
 */
export const returnItems = (req, res) => {
  con.query(allItemsQuery, (err, result, fields) => {
    if(err) throw err;
    return res.status(200).json({
      message: 'All items in catalogue',
      data: result
    });
  });
};

/**
 * @desc all items based on selected department.
 */
export const allDepartments = (req, res) => {
  con.query(allDepartmentsQuery, (err, result, fields) => {
    if(err) throw err;
    return res.status(200).json({
      message: 'All departments',
      data: result
    });
  });
};

/**
 * @desc get depatment by ID.
 */
export const singleDepartment = (req, res) => {
  const id = req.params.id;
  con.query(singleDepartmentQuery, id, (err, result, fields) => {
    if(err) throw err;
    return res.status(200).json({
      message: 'Return a single department',
      data: result
    });
  });
};