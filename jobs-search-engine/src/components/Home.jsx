import React from "react"
import { useEffect, useState } from "react"
import { Form, Button, FormControl, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import uniqid from "uniqid"
import Job from "./Job"

export default function Home() {
  const [job, setJob] = useState([])
  const [query, setQuery] = useState("")

  //   useEffect(() => {
  //     jobFetch()
  //   }, [])

  //   const jobFetch = async () => {
  //   try {
  //     let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10`)

  //     if (response.ok) {
  //       let jobdata = await response.json()
  //       console.log("jsoneddd", jobdata.data)

  //       setJob(jobdata.data)
  //     }
  //     console.log("state after setjobed", job)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const handelChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`)
      console.log(response)

      if (response.ok) {
        let jobdata = await response.json()
        console.log("jsoneddd", jobdata.data)

        setJob(jobdata.data)
      }
      console.log("state after setjobed", job)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3>STRIVE- JOB SEARCHING- PLATFORM</h3>
          <Form onSubmit={handleSubmit}>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" value={query} onChange={handelChange} />
            <Button className="mt-3" type="submit">
              Search
            </Button>
          </Form>
          {/* <JobResults fecthedJobs={job} /> */}
        </Col>
        <Col xs={10} className="mx-auto">
          <Col>
            {job.map((jobData) => (
              <Job key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Col>
      </Row>
    </Container>
  )
}
