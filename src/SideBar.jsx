import { useEffect, useState } from "react";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

import { isMobile } from "react-device-detect";

import Link from "next/link";

import Background from "./Background";

const links = [
  { link: "/", icon: ModelTrainingIcon },
  { link: "/tech", icon: CastForEducationIcon },
  { link: "/meet", icon: MeetingRoomIcon },
  { link: "/about", icon: SupervisedUserCircleIcon },
];

const SideBar = ({ children }) => {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  return (
    <>
      <div className="nav-container">
        <div className="grid">
          <nav>
            <ul>
              {links.map(({ link, icon: Icon }) => (
                <Link href={link} key={link}>
                  <li>
                    <div>
                      <Icon fontSize="large" />
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>

          <div className="flex"> {children}</div>
        </div>
      </div>
      {_isMobile ? null : <Background />}
    </>
  );
};

export default SideBar;
