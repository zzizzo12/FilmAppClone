import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { filmList } from '../filmsList';
import { useSelector } from 'react-redux';
import { selectUserName } from '../features/user/userSlice';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom'

const Details = (props) => {

    const { id } = useParams();
    const [detailInfo, setDetailInfo] = useState({});
    let tempInfos = {};
    const username = useSelector(selectUserName);

    const history = useHistory();

    useEffect(() => {
        // if(!username) {
        //     history.push('/');
        // } else {
           tempInfos = filmList.filter((film,i) => film.id === id);
           if (tempInfos.length !== 0) {
               setDetailInfo(tempInfos);
               console.log("my data",tempInfos)
           } else {
               alert('this document or movie does not exist');
           }
    //  }
    },[id,
        // username
      ])

    //this is the code for importing from firestore (firebase database) , just import db from firebase.js before and ready to go
    // useEffect(() => {
    //     db.collection("movies")
    //       .doc(id)
    //       .get()
    //       .then((doc) => {
    //         if (doc.exists) {
    //           setDetailData(doc.data());
    //         } else {
    //           console.log("no such document in firebase 🔥");
    //         }
    //       })
    //       .catch((error) => {
    //         console.log("Error getting document:", error);
    //       });
    //   }, [id]);

    return (
        <Container>
            <Background>
                <img 
                   src={detailInfo[0]?.backgroundImg}
                   alt={detailInfo[0]?.title}
                />
            </Background>
              <GoBackButton to='/home'>
                  <BiArrowBack />
              </GoBackButton>
            <ImageTitle>
                <img
                   src={detailInfo[0]?.titleImg}
                   alt={detailInfo[0]?.title}
                />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <ButtonsPlayer>
                        <img src="/images/play-icon-black.png" alt="play Icon-I" />
                        <span>Play</span>
                    </ButtonsPlayer>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="play Icon-II" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddButton>
                        <span />
                        <span />
                    </AddButton>
                    <PeopleWatch>
                        <div>
                            <img src="/images/group-icon.png" alt="" />
                        </div>
                    </PeopleWatch>
                </Controls>
                <Title>
                    {detailInfo[0]?.subTitle}
                </Title>
                <Description>
                    {detailInfo[0]?.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
      width: 100vw;
      height: 100vh;

      @media (max-width: 768px) {
          width: initial;
      }
  }
`;

const ImageTitle = styled.div`
  align-items: center;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
      max-width: 600px;
      min-width: 200px;
      width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const ButtonsPlayer = styled.button`
  font-size: 15px;
  margin: 0 22px 0px 0px;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
      width: 32px;
  }

  &:hover {
      background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
      height: 45px;
      font-size: 12px;
      padding: 0 12px;
      margin: 0px 10px 0px 0px;

      img {
          width: 30%;
      }
  }
`;

const Trailer = styled(ButtonsPlayer)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249)
`;

const AddButton = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
      background-color: rgb(249, 249, 249);
      display: inline-block;

      &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
      }
      &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
      }
  }
`;

const PeopleWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #fff;

  div {
      height: 40px;
      width: 40px;
      background: rgb(0, 0, 0);
      border-radius: 50%;

      img {
          width: 100%;
      }
  }
`;

const Title = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
      font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
      font-size: 14px;
  }
`;

const GoBackButton = styled(Link)`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  margin-top: 20px;
  color: #fff;
  border: 2px solid #fff;
  font-size: 20px;

  &:hover {
      background: rgb(249, 249, 249);
      color: black;
  }

  @media (max-width: 768px) {
      font-size: 15px;
  }
`;

export default Details
