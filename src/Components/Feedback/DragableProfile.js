import React from "react";
import { Col, Card } from "react-bootstrap";
import {
  HeadProfie,
  NameProfile,
  PositionProfile,
  ProfileImg,
  Underline,
} from "../../style/styled";
const DragableProfile = (props) => {
  return (
    <Col md={4}>
      <Card className="drag-card">
        <ProfileImg>
          <img src={props.drag.img}></img>
        </ProfileImg>
        <HeadProfie>
          <NameProfile>{props.drag.name}</NameProfile>
          <PositionProfile>{props.drag.position}</PositionProfile>
        </HeadProfie>
        <Underline />
        <div className="profile-body">
          <p>
            <span>{props.drag.content}</span>
          </p>
        </div>
      </Card>
    </Col>
  );
};
export default DragableProfile;
