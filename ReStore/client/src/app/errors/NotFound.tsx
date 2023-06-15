import { Button, Container, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container component={Paper} sx={{height:400}}>
        <Typography gutterBottom variant='h3'>
            Oops we got something wrong
        </Typography>
        <Divider />
        <Button to='/catalog' fullWidth component={Link}>
            Go back to shop
        </Button>
    </Container>
  )
}

export default NotFound