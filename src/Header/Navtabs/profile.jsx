import React from "react";
import { Avatar, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import image from "./logout.png";
import { useStyles } from "../HeaderStyles";

export default function Profile() {
  const classes = useStyles();
  const history = useHistory();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/login");

  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth")
    setLogout(true);
  };
  return (
    <Box>
      <Button onClick={logoutHandler}><Avatar src={image} className={classes.navAvatar} ></Avatar></Button>
    </Box>
  );
}
