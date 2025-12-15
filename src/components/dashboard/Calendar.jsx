import { DayPicker } from "react-day-picker";


export default function Calendar() {
  return (
    <div className="w-[460px] rounded-2xl bg-white p-5 shadow-lg">
      <DayPicker
        mode="single"
        defaultMonth={new Date(2025, 11)} 
        selected={new Date(2025, 11, 6)}
        captionLayout="buttons"
      />
    </div>
  );
}
