import { Card, CardActions, CardContent, Fab, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import './JobCard.scss';

function JobCard(props) {
  const card = props.jobObj;

  const handleCardClick = () => {
    props.onSelectCard(card);
  }

  return (
    <Card 
      sx={{ minWidth: 275 }}
      className="pb-2 ps-2 job-card"
      elevation={3}
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
          
        </div>
      </CardContent>

      <CardActions className="px-4 justify-content-end">
        <Fab color="secondary" aria-label="edit" size="small" className="mx-3">
          <ShareRoundedIcon />
        </Fab>
        
        <Fab color="primary" aria-label="edit" size="small" className="mx-3" onClick={ handleCardClick }>
          <ArrowForwardIosIcon />
        </Fab>
      </CardActions>
    </Card>
  )
}

export default JobCard;