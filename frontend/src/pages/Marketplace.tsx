import { useEffect, useState } from "react"

interface Product {
  id: number
  name: string
  category: string
  artisan: string
  village: string
  price: number
  rating: number
  image: string
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Dokra Tribal Horse",
    category: "Dokra",
    artisan: "Birsa Hansda",
    village: "Khunti",
    price: 2500,
    rating: 4.8,
    image: "https://picsum.photos/400/300?craft1",
  },
  {
    id: 2,
    name: "Paitkar Scroll Painting",
    category: "Paitkar",
    artisan: "Sita Devi",
    village: "Amadubi",
    price: 1800,
    rating: 4.6,
    image: "https://picsum.photos/400/300?craft2",
  },
  {
    id: 3,
    name: "Bamboo Hand Basket",
    category: "Bamboo",
    artisan: "Ramesh Munda",
    village: "Simdega",
    price: 900,
    rating: 4.5,
    image: "https://picsum.photos/400/300?craft3",
  },
]

export default function Marketplace() {
  const [products, setProducts] = useState<Product[]>([])
  const [category, setCategory] = useState("All")

  useEffect(() => {
    // Replace with backend API later
    setProducts(mockProducts)
  }, [])

  const filtered =
    category === "All"
      ? products
      : products.filter(p => p.category === category)

  return (
    <div className="bg-secondary min-h-screen px-6 sm:px-10 py-10">

      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">
          Tribal Handicraft Marketplace
        </h1>
        <p className="mt-2 max-w-2xl">
          Discover authentic Dokra metal art, Paitkar paintings, and bamboo
          crafts directly from tribal artisans of Jharkhand.
        </p>
      </header>

      {/* FILTER BAR */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="px-4 py-3 rounded-lg border"
        >
          <option>All</option>
          <option>Dokra</option>
          <option>Paitkar</option>
          <option>Bamboo</option>
        </select>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow hover:scale-105 transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full rounded-t-xl object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-primary">{p.name}</h3>
              <p className="text-sm text-gray-600">
                By {p.artisan} ({p.village})
              </p>

              <div className="mt-2 text-sm">
                ⭐ {p.rating} | Category: {p.category}
              </div>

              <div className="mt-3 flex justify-between items-center">
                <p className="font-semibold text-accent">
                  ₹{p.price}
                </p>
                <button className="bg-accent text-white px-4 py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-20">
          No products found.
        </p>
      )}
    </div>
  )
}
