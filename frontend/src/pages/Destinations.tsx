import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import DestinationCard from "../components/DestinationCard"
import type { Destination } from "../types/Destination"
import { fetchDestinations } from "../services/api"

const categories = ["All", "Waterfall", "Hill", "Wildlife", "Culture"]

export default function Destinations() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [filtered, setFiltered] = useState<Destination[]>([])
  const [searchParams] = useSearchParams()

  const searchQuery = searchParams.get("search") || ""
  const [category, setCategory] = useState("All")

  useEffect(() => {
    fetchDestinations().then(data => {
      setDestinations(data)
      setFiltered(data)
    })
  }, [])

  useEffect(() => {
    let result = destinations

    if (searchQuery) {
      result = result.filter(d =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (category !== "All") {
      result = result.filter(d =>
        d.name.toLowerCase().includes(category.toLowerCase())
      )
    }

    setFiltered(result)
  }, [searchQuery, category, destinations])

  return (
    <div className="bg-secondary min-h-screen px-6 sm:px-10 py-10">

      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">
          Tourist Destinations
        </h1>
        <p className="mt-2 max-w-2xl">
          Explore waterfalls, hills, wildlife sanctuaries and cultural
          destinations across Jharkhand.
        </p>
      </header>

      {/* FILTER BAR */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">

        {/* SEARCH */}
        <input
          defaultValue={searchQuery}
          placeholder="Search destination..."
          className="px-4 py-3 rounded-lg border flex-1"
        />

        {/* CATEGORY */}
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="px-4 py-3 rounded-lg border"
        >
          {categories.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* DESTINATION GRID */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          No destinations found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(d => (
            <DestinationCard key={d.id} d={d} />
          ))}
        </div>
      )}
    </div>
  )
}
