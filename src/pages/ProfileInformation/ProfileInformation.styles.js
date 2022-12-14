import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 2px grey'
  },
  form: {
    width: '10%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(14),
    },
  },
  formEdit: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '96%',
    },
  },
  close: {
    backgroundColor: '#f5f5f5',
    color: 'lightGrey',
    width: '1px'
  }
}));

export default useStyles;