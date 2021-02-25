import * as React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "Components/Typography";
import ServiceImage from "Assets/service.jpeg";
// import ServiceBackground from "Assets/productCurvyLines.png";
import ProductExperience from "Assets/experience.jpg";
import Booking from "Assets/booking.jpg";

const styles = (theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 155,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <img
          src={ServiceBackground}
          className={classes.curvyLines}
          alt="curvy lines"
        /> */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Booking} alt="One Tap Book" />
              <Typography variant="h6" className={classes.title}>
                One Tap Book
              </Typography>
              <Typography variant="h5">
                Hire best in class professionals at your finger tips at your
                convienient date and time!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={ProductExperience}
                alt="Experience"
              />
              <Typography variant="h6" className={classes.title}>
                Professional Services
              </Typography>
              <Typography variant="h5">
                We provide professionals who got expertise in the particular
                domain!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={ServiceImage} alt="clock" />
              <Typography variant="h6" className={classes.title}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {"By registering, you will access specially negotiated rates "}
                {"that you will not find anywhere else."}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
