import { Card, Grid, Button, CardContent, TextField } from "@mui/material";
import { useState } from "react";
export default function TimerForm({
  id,
  title,
  project,
  onFormSubmit,
  onFormClose,
}) {
  const submitText = id ? "Update" : "Create";
  const [timer, setTimer] = useState({
    title: title || "",
    project: project || "",
  });
  function handleTitleChange(e) {
    console.log(e.target.value);
    setTimer({
      ...timer,
      title: e.target.value,
    });
  }
  function handleProjectChange(e) {
    setTimer({
      ...timer,
      project: e.target.value,
    });
  }
  return (
    <div>
      <h1>TimerForm</h1>
      <Grid>
        <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder={timer.title}
                    label={"title"}
                    variant={"outlined"}
                    fullWidth={true}
                    value={timer.title}
                    onChange={handleTitleChange}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder={timer.project}
                    label={"project"}
                    variant={"outlined"}
                    fullWidth={true}
                    onChange={handleProjectChange}
                    value={timer.project}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color={"success"}
                    variant={"outlined"}
                    onClick={onFormSubmit}
                  >
                    {submitText}
                  </Button>
                  <Button
                    color={"error"}
                    variant={"outlined"}
                    onClick={onFormClose}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
