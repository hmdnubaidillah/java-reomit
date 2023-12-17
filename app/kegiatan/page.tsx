import { FilterDropdownEvent, EventCard } from "@/components";
import { eventCard } from "@/constant";

export default function page() {
  return (
    <section className="mt-32 w-[75%] m-auto">
      <div>
        <div className="text-fontPrimary flex gap-16 items-center">
          <h1 className="text-h2 font-bold ">Event</h1>
          {/* dropdown */}
          <FilterDropdownEvent />
        </div>

        {/* event card */}
        <div className="grid place-items-center my-10 grid-cols-3 gap-[50px]">
          {eventCard.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
