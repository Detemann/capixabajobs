import { Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";

function JobDetail(props) {
  const card = props.jobObj;

  const handleCloseCardClick = () => {
    props.onCloseCard();
  }

  return (
    <>
       <Card sx={{ minWidth: '100%', minHeight: '100%' }} className="" elevation={2}>
        <CardContent sx={{ minHeight: '100%' }}>
          <div className="d-flex w-100 justify-content-between">
            <Typography variant="h3" component="div">
              { card.title || 'Título da vaga' }
            </Typography>
            <IconButton aria-label="close" color="primary" onClick={ handleCloseCardClick }>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" className="ps-2 pb-4 mb-2">
            { card.companyName && card.companyLocation ? `${card.companyName} • ${card.companyLocation}` : 'Empresa da vaga' }
          </Typography>
          <Typography variant="subtitle" className="ps-2">
            { card.shortDescription || 'Resumo da vaga' }
          </Typography>
          <Typography variant="body2" className="ps-2">
            { card.description ?
              card.description.map((paragraph) => 
              `${paragraph}`
            )
              : 'Descrição da vaga'
            }
          </Typography>
        </CardContent>

        <CardActions className="px-4">
          <IconButton aria-label="share" color="secondary" size="large">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default JobDetail;