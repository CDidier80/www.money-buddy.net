import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import blue from '@material-ui/core/colors/blue';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    justifyContent: "center"
  }
}));

const Paginator = (props) => {
  const classes = useStyles();
  const primary = blue[200]

  return (
    <div className={classes.root}>
      <Pagination 
        count={4} 
        siblingCount={0}
        boundaryCount={0}
        showFirstButton={false}
        showLastButton={false}
        // size="small"
        variant="outlined" 
        color={primary}
        className={classes.pagination}
      />
    </div>
  );
}

export default Paginator