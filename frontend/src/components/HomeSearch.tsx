import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function HomeSearch() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  function handleSearch() {
    if (!query.trim()) return
    navigate(`/destinations?search=${encodeURIComponent(query)}`)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch()
  }

  return (
    <div className="mt-8 max-w-xl w-full">
      <div className="flex items-center bg-black rounded-xl overflow-hidden shadow-lg">

        {/* SEARCH ICON */}
        <span className="px-4 text-gray-400 text-lg">🔍</span>

        {/* INPUT */}
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search waterfalls, hills, culture..."
          className="
            flex-1 bg-black text-white placeholder-gray-400
            px-2 py-3 outline-none
          "
        />

        {/* BUTTON */}
        <button
          onClick={handleSearch}
          className="
            bg-accent text-white px-6 py-3
            hover:bg-opacity-90 transition
          "
        >
          Search
        </button>
      </div>

      {/* HELPER TEXT */}
      <p className="text-xs text-gray-300 mt-2">
        Try: Netarhat, Hundru, tribal festivals, waterfalls
      </p>
    </div>
  )
}
