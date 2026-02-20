import { useEffect, useState } from "react"

interface Homestay {
  id: number
  name: string
  village: string
  district: string
  price: number
  capacity: number
  rating: number
  image: string
}

const mockHomestays: Homestay[] = [
  {
    id: 1,
    name: "Santhal Tribal Homestay",
    village: "Netarhat Village",
    district: "Latehar",
    price: 1200,
    capacity: 4,
    rating: 4.6,
    image: "https://picsum.photos/400/300?homestay1",
  },
  {
    id: 2,
    name: "Munda Eco Homestay",
    village: "Hundru Area",
    district: "Ranchi",
    price: 1500,
    capacity: 3,
    rating: 4.8,
    image: "https://picsum.photos/400/300?homestay2",
  },
]

export default function Homestays() {
  const [data, setData] = useState<Homestay[]>([])

  useEffect(() => {
    // Replace with backend API later
    setData(mockHomestays)
  }, [])

  return (
    <div className="bg-secondary min-h-screen px-6 sm:px-10 py-10">

      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">
          Tribal & Village Homestays
        </h1>
        <p className="mt-2 max-w-2xl">
          Stay with local communities and experience authentic tribal culture,
          cuisine, and traditions across Jharkhand.
        </p>
      </header>

      {/* FILTER BAR */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          placeholder="Search by district or village"
          className="px-4 py-3 rounded-lg border flex-1"
        />

        <select className="px-4 py-3 rounded-lg border">
          <option>Any Price</option>
          <option>Below ₹1000</option>
          <option>₹1000 - ₹2000</option>
          <option>Above ₹2000</option>
        </select>

        <select className="px-4 py-3 rounded-lg border">
          <option>Guests</option>
          <option>1 - 2</option>
          <option>3 - 4</option>
          <option>5+</option>
        </select>
      </div>

      {/* HOMESTAY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(h => (
          <div
            key={h.id}
            className="bg-white rounded-xl shadow hover:scale-105 transition"
          >
            <img
              src={h.image}
              alt={h.name}
              className="h-48 w-full rounded-t-xl object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-primary">{h.name}</h3>
              <p className="text-sm text-gray-600">
                {h.village}, {h.district}
              </p>

              <div className="mt-2 text-sm">
                ⭐ {h.rating} | 👥 {h.capacity} Guests
              </div>

              <div className="mt-3 flex justify-between items-center">
                <p className="font-semibold text-accent">
                  ₹{h.price} / night
                </p>
                <button className="bg-accent text-white px-4 py-2 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {data.length === 0 && (
        <p className="text-center text-gray-500 mt-20">
          No homestays available.
        </p>
      )}
    </div>
  )
}
