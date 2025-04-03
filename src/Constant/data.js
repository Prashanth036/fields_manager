import badminton from "../assets/badminton.svg"
import sports_cricket from "../assets/sports_cricket.svg"
import table_tennis from "../assets/table_tennis.svg"
import pickle_ball from "../assets/pickle_ball.svg"
import CALENDER_ICON from "../assets/calender.svg";
import TIMER_ICON from "../assets/timer.svg";
import STOPWATCH_ICON from "../assets/stopwatch.svg";
import Live_Streaming from "../assets/Live_Streaming.jpeg";
import professional_referees from "../assets/professional_referees.jpeg";
import expert_commentators from "../assets/expert_commentators.jpeg";
import umpiring from "../assets/umpiring.jpeg";
export const RESERVE_PAGE_TEXT = "Estimated Price Before Taxes:$200";
export const formFields = [
  {
    label: "Sport",
    type: "select",
    name: "sport",
    placeholder: "Select Sport",
    options: ["Football", "Cricket", "Tennis"],
  },
  {
    label: "Date",
    type: "date",
    name: "date",
    placeholder: "Select Date",
    icon: CALENDER_ICON,
  },
  {
    label: "Time",
    type: "time",
    name: "time",
    placeholder: "Select Time",
    icon: TIMER_ICON,
  },
  {
    label: "Duration",
    type: "time",
    name: "duration",
    placeholder: "Select Duration",
    icon: STOPWATCH_ICON,
  },
  {
    label: "Ground",
    type: "select",
    name: "ground",
    placeholder: "Select Ground",
    options: ["Ground A", "Ground B", "Ground C"],
  },
];

export const services_data = [
    {
        name: "Live streaming service",
        about:"",
        image: "",
        about: "Live Stream bio",
        available_sports: [ 
            { icon:badminton, name: "Badminton" },
            { icon: table_tennis, name: "Table Tennis" },
            { icon: sports_cricket, name: "Cricket" },
            { icon:pickle_ball, name: "Pickle ball" }
        ],
    }
];

export const cards=[
  {
    image:Live_Streaming,
    name:"Live Streaming",
    bio:"Watch your Favourite Matches",
    fee:"from $200/match"
  },
  {
    image:professional_referees,
    name:"Professional Referees",
    bio:"Ensure fair play",
    fee:"from $100/match"
  },
  {
    image:expert_commentators,
    name:"Expert Commentators",
    bio:"Add excitement to the game",
    fee:"from $120/match"
  },
  {
    image:umpiring,
    name:"Umpiring",
    bio:"Ensure fair play",
    fee:"from $120/match"
  },
]
