import type { Destination } from "../types/Destination"

export default function DestinationCard({ d }: { d: Destination }) {
  return (
    <div className="bg-secondary p-4 rounded-xl shadow hover:scale-105 transition">
      <img src={d.image} className="h-40 w-full rounded-md" />
      <h2 className="text-primary font-bold mt-2">{d.name}</h2>
      <p>{d.district}</p>
    </div>
  )
}
