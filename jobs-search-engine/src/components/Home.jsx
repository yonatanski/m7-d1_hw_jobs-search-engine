import React from "react"
import { useEffect, useState } from "react"
import { Form, Button, FormControl } from "react-bootstrap"
import JobResults from "./JobResults"

export default function Home() {
  const [job, setJob] = useState([])

  useEffect(() => {
    jobFetch()
  }, [])

  const jobFetch = async () => {
    try {
      let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10`)

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
    <div className="container">
      <div className="row">
        <div className="col-6 mt-3">
          <h3>STRIVE JOB SEARCHING PLATFORM</h3>
          <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button className="mt-3" type="submit">
              Search
            </Button>
          </Form>
          <JobResults fecthedJobs={job} />
        </div>
      </div>
    </div>
  )
}
