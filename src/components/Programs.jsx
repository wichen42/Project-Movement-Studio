import Program from './Program';
import { FaUserAlt, FaUserFriends, FaUsers} from "react-icons/fa";
import { IconContext } from 'react-icons';

const Programs = () => {
  return (
    <div className='programs'>
        <span id='programs-title'>MORE THAN JUST A GYM</span>
        <div className="program-container">
            <Program icon={
                <IconContext.Provider value={{size: "25px"}}>
                    <div>
                        <FaUserAlt />
                    </div>
                </IconContext.Provider>
            } title={"Personal Training"} text={"One on one individualized training focused on helping our clients achieve their fitness goals. With undivided attention to our clients we help program, teach, and coach our clients so they leave with more than just a workout."}/>
            <Program icon={
                <IconContext.Provider value={{size: "25px"}}>
                    <div>
                        <FaUserFriends />
                    </div>
                </IconContext.Provider>
            } title={"Semi-Private Training"} text={"2 is always better than 1. Workout with a partner with the same fitness goals as you so you do not have to feel like you're in this alone, we got you!"}/>
            <Program icon={
                <IconContext.Provider value={{size: "25px"}}>
                    <div>
                        <FaUsers />
                    </div>
                </IconContext.Provider>
            } title={"Group Training"} text={"Our small group classes are focused on delivering heart pumping and fat shedding results. In our Strength & Conditioning based HIIT classes we will generate POWERFUL movements to get you moving."}/>
        </div>
    </div>
  );
};

export default Programs;