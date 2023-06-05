import { Button, Card, CardActions, CardContent, Fab, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './JobCard.scss';

function JobCard(props) {
  const card = props.jobObj;

  const handleCardClick = () => {
    props.onSelectCard(card);
  }

  return (
    <Card 
      sx={{ minWidth: 275 }}
      className="pb-2 ps-2 job-card cursor-pointer"
      elevation={3}
      onClick={ handleCardClick }
    >
      <CardContent>
        <div className="d-inline-block" style={{ width: '90%' }}>
          <Typography variant="h4" component="div">
            { card.title || 'Título da vaga' }
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" className="ps-2 mb-2">
            { card.companyName && card.companyLocation ? `${card.companyName} • ${card.companyLocation}` : 'Empresa da vaga' }
          </Typography>
          <Typography variant="body2" className="ps-2">
            { card.shortDescription || 'Resumo da vaga' }
          </Typography>
        </div>

        <div className="d-inline-block" style={{ width: '10%' }}>
        <Fab color="secondary" aria-label="edit" size="small">
          <ArrowForwardIosIcon />
        </Fab>
        </div>
      </CardContent>

      <CardActions className="px-4">
        <Button size="small" variant="contained">Compartilhar</Button>
      </CardActions>
    </Card>
  )
}

export default JobCard;