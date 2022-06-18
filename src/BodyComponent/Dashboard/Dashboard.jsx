import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { PageHeader } from "../../Common/CommonComponent";

import UserOverviewComponent from "./UserOverviewComponent";
export default function Dashboard() {
  return (
    <Box>
      <PageHeader label="Dashboard" pageTitle="blog Overview" />
      <UserOverviewComponent />
    </Box>
  );
}
