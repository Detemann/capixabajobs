import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import './JobCard.scss';

function JobCard(props) {

  return (
    // <Box component="div" sx={{ p: 2 }}>
    //   <h3>{ props.jobTitle || 'Título da vaga' }</h3>
    //   <span className="text-muted">{ props.jobCompanyName || 'Empresa da vaga' }</span>

    //   <span className="mt-2">{ props.jobShortDescription || 'Resumo da vaga' }</span>
    //   <div className="card-footer">

    //   </div>
    // </Box>

    
    <Card sx={{ minWidth: 275 }} className="pb-2 ps-2 job-card cursor-pointer" elevation={3}>
      <CardContent>
        <Typography variant="h4" component="div">
          { props.jobTitle || 'Título da vaga' }
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" className="ps-2 mb-2">
          { props.jobCompanyName || 'Empresa da vaga' }
        </Typography>
        <Typography variant="body2" className="ps-2">
          { props.jobShortDescription || 'Resumo da vaga' }
        </Typography>
      </CardContent>

      <CardActions className="px-4">
        <Button size="small" variant="contained">Compartilhar</Button>
      </CardActions>
    </Card>
  )
}

export default JobCard;