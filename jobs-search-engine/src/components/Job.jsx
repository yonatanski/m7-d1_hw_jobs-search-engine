import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Star, StarFill } from "react-bootstrap-icons"
import { connect } from "react-redux"
import { addToFav, removeFromFav } from "../redux/action"

const mapStateToProps = (state) => ({
  favourites: state.favourites,
})
const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (company) => {
    dispatch(addToFav(company))
  },
  removeFromFavourites: (company) => {
    dispatch(removeFromFav(company))
  },
})

const Job = ({ data, favourites, addToFavourites, removeFromFavourites }) => {
  const isFav = favourites.includes(data.company_name)
  const toggleFavourites = () => {
    isFav ? removeFromFavourites(data.company_name) : addToFavourites(data.company_name)
  }

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        {isFav ? <StarFill color="gold" size={16} className="me-4 my-auto" onClick={toggleFavourites} /> : <Star color="gold" size={16} className="me-4 my-auto" onClick={toggleFavourites} />}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Job)
