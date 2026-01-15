import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    label: "Spacious Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    label: "Clean & Hygienic Bathroom",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    label: "Modern Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    label: "Well Ventilated Room",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    label: "Premium Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
    label: "Comfort Living Space",
  },
];

export default function Gallery() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl font-extrabold text-blue-900 md:text-4xl">Rooms & Property Gallery</h2>

        <p className="mt-3 text-center text-gray-600">Actual room, kitchen & bathroom views from SmartStay listings</p>

        {/* Gallery */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:flex md:gap-6 md:overflow-x-auto md:pb-4">
          {images.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-black shadow-sm transition hover:shadow-lg md:min-w-[300px]"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={400}
                height={300}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Label */}
              <div className="absolute right-4 bottom-4 left-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Message */}
        <div className="mt-14 rounded-xl border border-blue-100 bg-white p-6 text-center shadow-sm">
          <p className="text-base font-semibold text-blue-900">🏠 Property Owners</p>
          <p className="mt-2 text-sm text-gray-700">
            Tenants prefer listings with <span className="font-semibold">real room, kitchen & bathroom photos</span>.
            Share your property images with SmartStay so we can showcase them properly and help you get faster
            inquiries.
          </p>
        </div>
      </div>
    </section>
  );
}
