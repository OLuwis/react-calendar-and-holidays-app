const HolidaySection = (props) => (
    <section className="h-fit bg-base-100 w-full max-w-fit card card-bordered border-purple-500 p-4 grid grid-cols-1 flex gap-2" id="holiday">
        {props.children}
    </section>
)

export default HolidaySection