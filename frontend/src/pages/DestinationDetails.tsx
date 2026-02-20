import { useParams } from "react-router-dom"

export default function DestinationDetails() {
  const { id } = useParams()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-primary">
        Destination Details
      </h1>
      <p className="mt-2">Destination ID: {id}</p>

      <div className="mt-6 bg-secondary p-6 rounded-lg">
        <p>
          This page will show:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Images & VR views</li>
          <li>GIS map location</li>
          <li>Nearby attractions</li>
          <li>Homestays & guides</li>
        </ul>
      </div>
    </div>
  )
}
