import React, { Component } from "react"
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import { StarFill } from "react-bootstrap-icons"
import { connect } from "react-redux"
import { removeFromFav } from "../redux/action"

const mapStateToProps = (state) => ({
  fav: state.favourites,
})
const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (f) => {
    dispatch(removeFromFav(f))
  },
})
class Favourites extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {this.props.fav.map((fav) => (
                <ListGroupItem>
                  <StarFill onClick={() => this.props.removeFromFav(fav)} />
                  <span>{fav}</span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
