import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import Background from "./Background";

const SideBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="grid">
          <nav>
            <ul>
              <li>
                <div >
                  <ModelTrainingIcon fontSize="large" />
                </div>
              </li>
              <li>
                <div >
                  <CastForEducationIcon fontSize="large" />
                </div>
              </li>
              <li>
                <div >
                  <MeetingRoomIcon fontSize="large" />
                </div>
              </li>
              <li>
                <div >
                  <SupervisedUserCircleIcon fontSize="large" />
                </div>
              </li>
            </ul>
          </nav>
          <div className="flex"> <p>SUPER TEXT</p></div>
        </div>
      </div>
      <Background />
    </>
  );
};

export default SideBar;
