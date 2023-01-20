import { useState, useEffect } from "react";
import { Calendar, HolidaySection, months } from "./components/Index.jsx";

function App() {
  const [ data, setData ] = useState(null);
  const [ year ] = useState(new Date().getFullYear());
  const [ month, setMonth] = useState(new Date().getMonth())
  const [ days, setDays ] = useState([])

  useEffect(() => {
    fetch(`https://date.nager.at/api/v3/publicholidays/${year}/BR`).then(res => res.json()).then(res => setData(res)).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const allDays = [];
    for (let i = 2; i <= new Date(year, parseInt(month) + 1, 0).getDate(); i++) {
      allDays.push(i)
    }
    setDays(allDays)
  }, [month])

  console.log(data)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 gap-4">
      <Calendar year={year} changeMonth={(e) => setMonth(e.target.getAttribute("data-index"))} currentMonth={months[month]} startDay={parseInt(new Date(year, month, 1).getDay()) + 1}>
        {days.map(day => (
          <div className="btn sm:btn-md btn-sm text-base-content no-underline hover:no-underline justify-self-center w-full">{day}</div>
        ))}
      </Calendar>
      <HolidaySection>
        {data !== null && data.filter(holimonth => holimonth.date.substring(5,7) === (parseInt(month) + 1).toString().padStart(2, 0)).map(holiday => (
          <div className="flex flex-row" key={holiday.localName}>
            <div className="flex flex-col justify-center align-center btn btn-square h-16 w-16 bg-purple-500 text-white hover:bg-purple-500 no-animation w-fit rounded-tr-none rounded-br-none">
              <span>{months[month].substring(0,3)}</span>
              <span className="sm:text-2xl text-xl">{holiday.date.substring(8,10)}</span>
            </div>
          <div className="btn rounded-tl-none rounded-bl-none h-16 hover:bg-neutral no-animation word-wrap w-44">{holiday.localName}</div>
      </div>
        ))}
      </HolidaySection>
    </div>
  )
}

export default App