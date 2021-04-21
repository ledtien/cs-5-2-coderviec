import React from "react";
import Moment from "react-moment";
import { MdLocationCity } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Spinner, Button } from "react-bootstrap";
import "../App.css";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    const fetchDataDetail = async () => {
      const response = await fetch(`http://localhost:3001/jobs/${id}`);
      const json = await response.json();
      setJob(json);
      console.log(json);
    };
    fetchDataDetail();
  }, []);
  if (!job.title)
    return (
      <h1>
        <Spinner animation="border" />
      </h1>
    );
  return (
    <div className="container mt-4">
      <Card>
        <Card.Header>
          {job.title}
          <Card.Subtitle className="mt-2 ">
            <MdLocationCity className="icons" /> District {job.district},{" "}
            {job.city}
          </Card.Subtitle>

          <Card.Subtitle className="mt-2 ">
            <FaDollarSign className="icons" /> Up to {job.salary}$
          </Card.Subtitle>
          <Card.Subtitle className="mt-2 ">
            <BiTimeFive className="icons" /> -{" "}
            <Moment fromNow>{job.time}</Moment>
          </Card.Subtitle>
        </Card.Header>

        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>{job.description}</Card.Text>
          <Card.Title>Benefits</Card.Title>
          <Card.Text>
            {job.benefits.map((be) => {
              return be + ", " + "...";
            })}
          </Card.Text>
          <Button variant="primary">Apply Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobDetail;
