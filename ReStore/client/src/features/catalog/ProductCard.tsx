import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props{
    product:Product;
}

export default function ProductCard({product}:Props){
    return (
        <Card >
            <CardHeader 
            avatar=
            {<Avatar>
                {product.name.charAt(0).toUpperCase()}
            </Avatar>
            }
            title={product.name}
            />
        <CardMedia
          sx={{ height: 140, backgroundSize:'contain' }}
          image={product.pictureUrl}
          title={product.name}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${(product.price/100).toFixed()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add To Cart</Button>
          <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
        </CardActions>
      </Card>
      
    )
}

          
