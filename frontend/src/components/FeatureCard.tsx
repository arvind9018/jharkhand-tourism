export default function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string
  desc: string
  icon: string
}) {
  return (
    <div className="
      bg-white rounded-xl p-6 shadow
      transform transition duration-300
      hover:-translate-y-2 hover:shadow-xl
    ">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 font-bold text-primary">{title}</h3>
      <p className="mt-2 text-sm">{desc}</p>
    </div>
  )
}
