const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const Calendar = (props) => (
    <section className="card card-bordered bg-base-100 w-full max-w-screen-lg border-purple-500 flex flex-col items-center p-4" id="calendar">
        <h1 className="card-title sm:text-3xl text-2xl sm:py-1" id="calendar-title">Calendar</h1>
        <div className="flex flex-row sm:py-2 items-center justify-center">
            <div className="dropdown">
                <label tabIndex="0" className="btn sm:btn-md btn-sm m-1">{props.currentMonth}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill fill-base-content ml-2.5" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
                </label>
                <div className="dropdown-content w-fit bg-base-200 p-3 rounded-box">
                    <div className="grid md:grid-cols-4 grid-cols-2 md:w-96 w-48">
                        {months.map(month => (
                            <button className="btn btn-ghost sm:btn-md btn-sm" key={month} data-index={months.indexOf(month)} onClick={props.changeMonth}>{month}</button>
                        ))}
                    </div>
                </div>
            </div>
            <span className="btn btn-link no-animation text-xl cursor-default text-base-content no-underline sm:btn-md btn-sm
            hover:no-underline" id="calendar-year">{props.year}</span>
        </div>
        <div className="grid grid-cols-7 w-full sm:gap-4 gap-2" id="calendar-container">
            {daysOfWeek.map(weekDay => (
                <div className="btn btn-link sm:btn-md btn-sm text-base-content no-underline no-animation justify-self-center w-full cursor-default hover:no-underline" key={weekDay}>
                    <span className="sm:inline hidden">{weekDay}</span>
                    <span className="sm:hidden inline">{weekDay[0]}</span>
                </div>
            ))}
            <div className={`btn sm:btn-md btn-sm text-base-content no-underline hover:no-underline justify-self-center w-full col-start-${props.startDay}`}>1</div>
            {props.children}
        </div>
    </section>
)

export { Calendar, daysOfWeek, months }