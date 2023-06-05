import { Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

function JobDetail(props) {
  return (
    <>
       <Card sx={{ minWidth: '100%', minHeight: '100%' }} className="" elevation={2}>
        <CardContent sx={{ minHeight: '950px' }}>
          <Typography variant="h3" component="div">
            { props.jobTitle || 'Título da vaga' }
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" className="ps-2 pb-4 mb-2">
            { props.jobCompanyName || 'Empresa da vaga' }
          </Typography>
          <Typography variant="body2" className="ps-2">
            { props.jobShortDescription || 'Resumo da vaga' }
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