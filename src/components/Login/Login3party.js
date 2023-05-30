import { IconButton } from "@mui/material";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import GoogleIcon from "@mui/icons-material/Google";

function Login3party() {
  return (
    <div className="d-flex row row-cols-6 justify-content-center">
      <div className="d-flex col-3 justify-content-center">
        <IconButton aria-label="delete" size="large">
          <GoogleIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="d-flex col-3 justify-content-center">
        <IconButton aria-label="delete" size="large">
          <FacebookSharpIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}

export default Login3party;
