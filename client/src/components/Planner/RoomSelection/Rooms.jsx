import React from 'react'
import Room from './Room'
import {Container, Col, ListGroup} from 'react-bootstrap'

function Rooms({ rooms, onRoomSelection}) {
    
    return (
        <Container>
            <h3>Select room from list:</h3>
            <Col xs={5}>
                <ListGroup>
                    {rooms && rooms.map((room) => (
                        <Room
                            key={room._id}
                            room={room}
                            onRoomSelection={onRoomSelection}
                        />
                    ))}
                </ListGroup>
            </Col>
        </Container>
    )
}

export default Rooms