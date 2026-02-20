export default function AdminDashboard() {
  return (
    <div className="bg-secondary min-h-screen px-6 sm:px-10 py-10">

      {/* HEADER */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-primary">
          Admin Dashboard
        </h1>
        <p className="mt-2 max-w-2xl">
          Centralized control panel for monitoring tourism activities,
          community participation, and environmental sustainability.
        </p>
      </header>

      {/* KPI CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <KpiCard title="Total Tourists" value="12,450" icon="👥" />
        <KpiCard title="Active Homestays" value="128" icon="🏡" />
        <KpiCard title="Handicraft Sales" value="₹8.6L" icon="🛍️" />
        <KpiCard title="Eco Alerts" value="5" icon="⚠️" />
      </section>

      {/* ANALYTICS SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

        {/* FOOTFALL */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-primary mb-2">
            Tourist Footfall Trends
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Monthly and seasonal visitor statistics.
          </p>
          <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
            Chart Placeholder
          </div>
        </div>

        {/* HOMESTAY */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-primary mb-2">
            Homestay Occupancy
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Booking ratio and availability status.
          </p>
          <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
            Chart Placeholder
          </div>
        </div>

        {/* MARKETPLACE */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-primary mb-2">
            Marketplace Revenue
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Handicraft sales and artisan income.
          </p>
          <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
            Chart Placeholder
          </div>
        </div>
      </section>

      {/* MANAGEMENT PANELS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">

        {/* APPROVALS */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-primary mb-4">
            Pending Approvals
          </h2>
          <ul className="space-y-3 text-sm">
            <li>🏡 New Homestay Registration (3)</li>
            <li>🧭 Guide Verification Requests (5)</li>
            <li>🛍️ Artisan Product Approvals (7)</li>
          </ul>
          <button className="mt-4 bg-accent text-white px-4 py-2 rounded-lg">
            Review Requests
          </button>
        </div>

        {/* ENVIRONMENT */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-primary mb-4">
            Environmental Monitoring
          </h2>
          <ul className="space-y-3 text-sm">
            <li>🔴 Eco-sensitive zone alerts</li>
            <li>🟠 High crowd density warnings</li>
            <li>🟢 Safe travel zones</li>
          </ul>
          <button className="mt-4 bg-accent text-white px-4 py-2 rounded-lg">
            View GIS Alerts
          </button>
        </div>
      </section>

      {/* SYSTEM STATUS */}
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="font-bold text-primary mb-4">
          System Status
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <StatusItem label="Server Status" value="Online" />
          <StatusItem label="Database" value="Connected" />
          <StatusItem label="GIS Services" value="Running" />
        </div>
      </section>

    </div>
  )
}

/* ---------------- HELPER COMPONENTS ---------------- */

function KpiCard({
  title,
  value,
  icon,
}: {
  title: string
  value: string
  icon: string
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <h3 className="text-2xl font-bold text-primary">{value}</h3>
      </div>
    </div>
  )
}

function StatusItem({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="border rounded-lg p-4">
      <p className="text-gray-600">{label}</p>
      <p className="font-semibold text-primary">{value}</p>
    </div>
  )
}
