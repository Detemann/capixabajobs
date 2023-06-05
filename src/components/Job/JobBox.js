import JobCard from "./JobCard/JobCard";
import './JobBox.scss';
import JobDetail from "./JobDetail/JobDetail";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function JobBox() {
  const jobsList = [
    { jobTitle: 'Trampo 1', jobCompanyName: 'FAESA', jobShortDescription: 'Estagiário do NAT' },
    {}, {}, {}, {}, {}, {}, {}, {},
  ];

  return (
    <div className="job-box">
      <div className="d-flex w-100 row my-5 justify-content-center">
        <Stack direction="row" className="w-25">
          <TextField id="outlined-basic" label="Pesquisar" variant="outlined" className="w-100" />
          <IconButton aria-label="search" color="primary" >
            <SearchIcon />
          </IconButton>
        </Stack>
      </div>

      <div className="row">
        <div className="d-flex w-50 p-5 flex-column job-list box-limited">
          { jobsList.map((job) => (
            <div className="p-0 m-0 mb-5">
              <JobCard 
                jobTitle={ job.jobTitle }
                jobCompanyName={ job.jobCompanyName }
                jobShortDescription={ job.jobShortDescription }
              />
            </div>
          ))

          }
        </div>

        <div className="d-flex w-50 p-5 job-detail">
          <JobDetail />
        </div>
      </div>
    </div>
  )
}

export default JobBox;