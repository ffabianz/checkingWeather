import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useInput from "../../hooks/useInput";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import CityContext from "../../context/CityContext";
import "./searchButton.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

export default function SearchButton() {
  const ctx = useContext(CityContext);
  const [, setCity] = ctx;
  const classes = useStyles();
  const history = useHistory();
  const {
    value: cityValue,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
  } = useInput((value: string) => value.trim() !== "");
  const handleSubmit = (cityValue: string) => {
    if (setCity === undefined) return;
    setCity(cityValue);
    history.push("/weather");
  };

  return (
    <div className="searchwrapper">
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
        disabled= {cityValue === ""}
        className={classes.button}
        startIcon={<SearchIcon />}
        onClick={() => {
          handleSubmit(cityValue);
        }}
      >
        Search
      </Button>
    </div>
  );
}
