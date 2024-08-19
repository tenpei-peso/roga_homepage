import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function AboutImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/school3.jpg",
    title: "Breakfast",
  },
  {
    img: "/school4.jpg",
    title: "Burger",
  },
  {
    img: "/school5.jpg",
    title: "Camera",
  },
  {
    img: "/school6.jpg",
    title: "Coffee",
  },
  {
    img: "/school7.jpg",
    title: "Hats",
  },
  {
    img: "/school8.jpg",
    title: "Honey",
  },
  {
    img: "/school10.jpg",
    title: "Basketball",
  },
  {
    img: "/school11.jpg",
    title: "Fern",
  },
];
