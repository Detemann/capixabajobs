import { useState } from "react";
import JobCard from "./JobCard/JobCard";
import JobDetail from "./JobDetail/JobDetail";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import './JobBox.scss';
import Jobs from './MockJobs.json';

function JobBox() {
  const [selectedJob, setSelectedJob] = useState({});

  const onSelectCardClick = (card) => {
    setSelectedJob(card);
  };

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
          { Jobs.jobs.map((job, index) => (
              <div className="p-0 m-0 mb-5" key={ index }>
                <JobCard 
                  jobObj={ job }
                  onSelectCard={ onSelectCardClick }
                />
              </div>
            ))
          }
        </div>

        <div className="d-flex w-50 p-5 job-detail">
          { selectedJob &&
            selectedJob.title &&
            <JobDetail 
              jobObj={ selectedJob }
              onCloseCard={ onSelectCardClick }
            />
          }
        </div>
      </div>
    </div>
  )
}

export default JobBox;