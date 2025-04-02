import badminton from "../assets/badminton.svg"
import sports_cricket from "../assets/sports_cricket.svg"
import table_tennis from "../assets/table_tennis.svg"
import pickle_ball from "../assets/pickle_ball.svg"
import CALENDER_ICON from "../assets/calender.svg";
import TIMER_ICON from "../assets/timer.svg";
import STOPWATCH_ICON from "../assets/stopwatch.svg";
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
