import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import NewRecoOne from './NewRecoOne';
import NewRecoThree from './NewRecoThree';
import NewRecoTwo from './NewRecoTwo';
import Recommended from './Recommended';
import Viewers from './Viewers';
import { useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { filmList }  from '../filmsList';
import { useHistory } from 'react-router-dom'

const Home = (props) => {

  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  const history= useHistory();

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {

    // if(!username) {
    //   history.push('/');
    // } else {
    filmList.map((film) => {
      console.log("my reco is",recommends);
      switch(film.type) {
        case "recommend":
          recommends = [...recommends, { id: film.id, ...film }];
          break;

        case "new":
          newDisneys = [...newDisneys, { id: film.id, ...film }];
          break;

        case "original":
          originals = [...originals, { id: film.id, ...film }];
          break;

        case "trending":
          trending = [...trending, { id: film.id, ...film }];
          break;
      }
    })

                // this is the settup for the firebase store (database) but i do not have acces to it, you can use this code if you want to use it, but before dont forget to put all your movies data into a collection in firebase store
                // db.collection('movies').onSnapshot((snapshot) => {
                //   snapshot.docs.map((doc) => {
                //     console.log("my reco is",recommends);
                //     switch(doc.data().type) {
                //       case "recommend":
                //         recommends = [...recommends, { id: doc.id, ...doc.data() }];
                //         break;
            
                //       case "new":
                //         newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                //         break;
            
                //       case "original":
                //         originals = [...originals, { id: doc.id, ...doc.data() }];
                //         break;
            
                //       case "trending":
                //         trending = [...trending, { id: doc.id, ...doc.data() }];
                //         break;
                //     }
                //   })
                // })

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    )
  // }
  },[ username ])

    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Recommended />
            <NewRecoOne />
            <NewRecoTwo />
            <NewRecoThree />
        </Container>
    )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home
