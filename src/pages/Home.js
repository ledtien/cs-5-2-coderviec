import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { Card, Form, Button } from "react-bootstrap";

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
  const onCreateJob = () => {
    fetch("http://localhost:3001/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "Apple", salary: 2000, foo: "bar" }),
    });
  };
  return (
    <div className="container mt-3">
      <Form className="mb-5">
        <Form.Group controlId="text">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" placeholder="text" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit" onClick={onCreateJob}>
          Submit
        </Button>
      </Form>
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
