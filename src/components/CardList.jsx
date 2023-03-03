import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./CardList.css";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="arrow-button prev-button"
    style={{ position: "absolute", top: "50%", left: "10px", zIndex: 2 }}
  >
    {<ArrowBackIosNewIcon sx={{ fontSize: "0.8rem", padding: "0px" }} />}
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="arrow-button next-button"
    style={{ position: "absolute", top: "50%", right: "10px", zIndex: 2 }}
  >
    {<ArrowForwardIosIcon sx={{ fontSize: "0.8rem", padding: "0px" }} />}
  </button>
);

const CardList = () => {
  const allJson = useSelector((state) => {
    return state.jsonData;
  });

  const jsonTypeVal = useSelector((state) => {
    return state.jsonType;
  });

  const rendered = allJson
    .filter((mov) => {
      return mov.type === jsonTypeVal[0];
    })
    .map((mov) => {
      return (
        <Grid xs={12} sm={4} item md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Carousel
              showStatus={false}
              showThumbs={false}
              dynamicHeight={false}
              //
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && <PrevArrow onClick={onClickHandler} />
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && <NextArrow onClick={onClickHandler} />
              }
            >
              <div>
                <img
                  src={mov.homeMainPic}
                  alt="carousel-1"
                  style={{ height: 300, objectFit: "cover", borderRadius: 12 }}
                />
              </div>
              <div>
                <img
                  src={mov.carouselPic1}
                  alt="carousel-2"
                  style={{ height: 300, objectFit: "cover", borderRadius: 12 }}
                />
              </div>
              <div>
                <img
                  src={mov.carouselPic2}
                  alt="carousel-3"
                  style={{ height: 300, objectFit: "cover", borderRadius: 12 }}
                />
              </div>
              <div>
                <img
                  src={mov.carouselPic3}
                  alt="carousel-4"
                  style={{ height: 300, objectFit: "cover", borderRadius: 12 }}
                  tyle
                />
              </div>
              <div>
                <img
                  src={mov.carouselPic4}
                  alt="carousel-5"
                  style={{ height: 300, objectFit: "cover", borderRadius: 12 }}
                  tyle
                />
              </div>
              <div>
                <img
                  src={mov.carouselPic5}
                  alt="carousel-6"
                  style={{ height: 300, objectFit: "cover", borderRadius: 4 }}
                  tyle
                />
              </div>
            </Carousel>

            {/* <CardMedia
              sx={{ height: 300, objectFit: "cover", borderRadius: 4 }}
              image={mov.homeMainPic}
              title="hotel image"
            /> */}
            <CardContent>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {mov.name},{" "}
                {mov.location.charAt(0).toUpperCase() + mov.location.slice(1)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {mov.type.charAt(0).toUpperCase() + mov.type.slice(1)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1-7 Mar
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>${mov.price} </strong>night
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      );
    });
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem 0rem",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {rendered}
      </Grid>
    </Box>
  );
};

export default CardList;

//
//
//
