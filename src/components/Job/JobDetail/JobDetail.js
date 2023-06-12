import { Card, CardActions, CardContent, Fab, IconButton, Typography } from "@mui/material";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import CloseIcon from "@mui/icons-material/Close";

function JobDetail(props) {
  const card = props.jobObj;

  const handleCloseCardClick = () => {
    props.onCloseCard();
  }

  return (
    <>
       <Card sx={{ minWidth: '100%', maxHeight: '60vh', overflow: 'auto' }} className="box-limited" elevation={2}>
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
          <Typography variant="body2" className="ps-2 text-justify">
            { card.description ?
              card.description.map((paragraph) => (<p>{`${ paragraph }\n`}</p>)
            )
              : 'Descrição da vaga'
            }
          </Typography>
        </CardContent>

        <CardActions className="px-4 justify-content-end">
          <Fab color="secondary" aria-label="share" size="small" className="mx-3">
            <ShareRoundedIcon fontSize="medium" />
          </Fab>
        </CardActions>
      </Card>
    </>
  )
}

export default JobDetail;