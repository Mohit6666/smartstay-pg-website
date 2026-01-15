const features = [
  {
    title: "Affordable Rent",
    desc: "Rooms starting from ₹5000 with no hidden charges.",
  },
  {
    title: "1 RK & 1 BHK Available",
    desc: "Single rooms, 1 RK & 1 BHK options available as per requirement.",
  },
  {
    title: "Couple Living Allowed",
    desc: "Safe & verified properties for couples, families & individuals.",
  },
  {
    title: "Owner Direct – No Broker",
    desc: "Connect directly with owners. Zero brokerage & full transparency.",
  },
  {
    title: "Prime Locations",
    desc: "Near Chandigarh University, Mohali & Kharar. Highway within 600 meters.",
  },
  {
    title: "Trusted & Verified",
    desc: "All listings are personally verified by SmartStay team.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 md:text-4xl">Why Choose SmartStay?</h2>
        <p className="mt-3 text-gray-600">Trusted PG & Room solutions across Tricity</p>
      </div>

      {/* Cards */}
      <div className="container mx-auto grid gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-blue-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Trust Line */}
      <div className="mt-14 text-center">
        <p className="inline-block rounded-full bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-800">
          🔒 100% Genuine Listings • Trusted by Students & Families • No Brokerage
        </p>
      </div>
    </section>
  );
}
