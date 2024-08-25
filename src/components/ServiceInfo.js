import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ServiceInfo({ href, title, description }) {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardMedia sx={{ height: 140 }} image={href} />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
