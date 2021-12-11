import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useInput from "../../hooks/useInput";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import CityContext from "../../context/CityContext";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function IconLabelButtons() {
  const ctx = useContext(CityContext);
  const [city, setCity] = ctx;
  const classes = useStyles();
  const history = useHistory();
  const {
    value: cityValue,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
  } = useInput((value) => value.trim() !== "");
  const handleSubmit = (cityValue) => {
    setCity(cityValue);
    history.push("/weather");
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Ville"
          variant="outlined"
          margin="dense"
          value={cityValue}
          onChange={cityChangeHandler}
          helperText={cityHasError ? "vous devez insérer une ville" : ""}
          error={cityHasError}
        />
      </form>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SearchIcon />}
        onClick={() => {
          handleSubmit(cityValue);
        }}
      >
        Search
      </Button>
      <Link to="/weather"> test1</Link>
    </div>
  );
}
