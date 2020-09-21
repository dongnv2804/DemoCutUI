import React from "react";
import { Col, Card } from "react-bootstrap";
const DragableProfile = (props) => {
  return (
    <Col md={4}>
      <Card className="drag-card">
        <div className="profile-img">
          <img src={props.drag.img}></img>
        </div>
        <div className="profile-head">
          <h3 className="nameprofile">{props.drag.name}</h3>
          <h5 className="positionprofile">{props.drag.position}</h5>
        </div>
        <div className="hrcustom text-center"></div>
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
