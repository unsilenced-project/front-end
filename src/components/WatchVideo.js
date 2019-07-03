import React, { useState } from "react";
import YouTubeVideo from "./YouTubeVideo";
import DisqusEmbed from "./DisqusEmbed";
import { Button, Modal, Icon } from "semantic-ui-react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import styled from "styled-components";

const WatchVideo = props => {
  const [userName, setUsername] = useState(localStorage.getItem("username"));
  const [modalOpen, setModalOpen] = useState(false);
  let { username, videoID } = props.match.params;
  let disqusShortname = props.default ? "unsilenced" : username;

  console.log(props.location);
  if (props.location.search) videoID = props.location.search.replace("?v=", "");

  const disqusConfig = {
    url: `https://unsilenced.netlify.com${videoID}`,
    id: videoID
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLike = () => {
    setModalOpen(true);
  };

  const handleYoutubePusher = () => {
    //window.location.href = localStorage.getItem("youtube");
    window.open(
      localStorage.getItem("youtube"),
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  const reactModal = () => {
    return (
      <Modal
        size="big"
        open={modalOpen}
        className="modal"
        centered="true"
        onClose={closeModal}
      >
        <Modal.Header>Restriction</Modal.Header>
        <Modal.Content>
          <h6>
            Due to restrictions placed by Youtube, the video must be opened in a
            new window to use the like button
          </h6>
          <p>Click AGREE to open the link in Youtube </p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setModalOpen(false)}>
            No, Thanks
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Take me to Youtube"
            onClick={handleYoutubePusher}
          />
        </Modal.Actions>
      </Modal>
    );
  };

  return (
    <>
      <Navigation />
      <YouTubeVideo youtubeId={videoID} />
      <ButtonContainer>
        <LikeButton
          name="thumbs up"
          size="big"
          corner="bottom =left"
          onClick={handleLike}
        />
        <p>
          Username: <span>{userName}</span>
        </p>
      </ButtonContainer>
      <DisqusEmbed
        disqusShortname={disqusShortname}
        disqusConfig={disqusConfig}
      />
      <ModalContent>{reactModal()}</ModalContent>

      <Footer />
    </>
  );
};

export default WatchVideo;

const LikeButton = styled(Icon)`
  &:hover {
    color: darkred;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  margin-left: 30px;
  cursor: pointer;

  p {
    margin-left: 20px;
    font-size: 18px;
    font-style: italic;
  }

  span {
    font-weight: bold;
  }
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
