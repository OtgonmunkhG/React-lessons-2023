import { Card, Grid, Button, CardContent, TextField } from "@mui/material";
export default function TimerForm({ title, project }) {
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
                    placeholder={title}
                    label={title}
                    variant={"outlined"}
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder={project}
                    label={project}
                    variant={"outlined"}
                    fullWidth={true}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button color={"success"} variant={"outlined"}>
                    Create
                  </Button>
                  <Button color={"error"} variant={"outlined"}>
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
