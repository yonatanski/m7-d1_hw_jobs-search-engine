import React from "react"
// import { useEffect, useState } from "react"
// import { Form, Button, FormControl } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"

export default function JobResults(props) {
  return (
    <div>
      {props.data.map((job) => (
        <ListGroup>
          <ListGroup.Item>{job.title}</ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  )
}
