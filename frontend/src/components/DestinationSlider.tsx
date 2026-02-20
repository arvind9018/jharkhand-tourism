import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import type { Destination } from "../types/Destination"
import { fetchDestinations } from "../services/api"

export default function DestinationSlider() {
  const [data, setData] = useState<Destination[]>([])

  useEffect(() => {
    fetchDestinations().then(setData)
  }, [])

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.2}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {data.map(d => (
        <SwiperSlide key={d.id}>
          <div className="bg-white rounded-xl shadow p-4">
            <img src={d.image} className="h-40 w-full rounded-lg" />
            <h3 className="mt-3 font-bold text-primary">{d.name}</h3>
            <p className="text-sm">{d.district}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
