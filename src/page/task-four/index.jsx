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
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setUser(response.data);
      console.log(response.data);
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
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <h3>{item.phone}</h3>
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions></CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
