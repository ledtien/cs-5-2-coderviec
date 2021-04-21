import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { Card } from "react-bootstrap";

export default function JobsList() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/jobs");
      const json = await response.json();
      setJobList(json);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      JobsList
      {jobList.map((j) => {
        return (
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{j.title}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                <ImLocation2 className="icons" />
                District {j.district}, {j.city}
              </Card.Subtitle>
              <Card.Text>---{j.description}</Card.Text>
              <Card.Link as={Link} to={"/jobs/" + j.id}>
                See more
              </Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
