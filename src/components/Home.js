import React,{ useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Recommend from "./Recommend";
import Viewers from "./Viewers";
import { useDispatch,useSelector } from "react-redux";
import db from '../firebase';
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend = [];
  let originals = [];
  let newDisney = [];
  let trending  = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommend.push({
              id:doc.id,
              ...doc
            })
            break;
          case 'original':
            originals.push({
              id:doc.id,
              ...doc
            })
            break;
          case 'trending':
            trending.push({
              id:doc.id,
              ...doc
            })
            break;
          case 'new':
            newDisney.push({
              id:doc.id,
              ...doc
            })
            break;
          default:
            break;
        }
      })
    })
  })
   
  return (
    <Container>
     <ImageSlider/>
     <Viewers/>
     <Recommend/>
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  background: url("/images/home-background.png");
  display: block;
  overflow-x: hidden;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  top: 78px;

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    z-index: -1;
    opacity: 1;
  }
`;
export default Home;
