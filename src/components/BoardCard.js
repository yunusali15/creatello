import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

export const BoardCard = ({text}) => {
  return (
      <Card style={{ width:"100%",maxWidth:"284px", margin:"6px"}}>
          <CardContent>
              <Typography>{text}</Typography>
          </CardContent>
      </Card>
  )
}
