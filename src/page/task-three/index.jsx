import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { NavLink } from "react-router-dom";

const Index = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((response) => {
      setUser(response.data);
    });
  });

  return (
    <>
      <div className="container">
        <div className="box">
          {user.map((item, index) => (
            <div className="list" key={index}>
              <Card sx={{ maxWidth: 340 }}>
                <CardActionArea>
                <CardMedia
                      className="img_box"
                      component="img"
                      height="340"
                      image={item.url}
                      alt="green iguana"
                    />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
