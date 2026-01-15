import { Button } from "@/components/ui/button";

export default function CTA() {
  const WHATSAPP_NUMBER = "918146660665";

  const tenantMessage = encodeURIComponent(
    "Hi SmartStay PG 👋\n\nI want to inquire about available PG / Rooms near Chandigarh University / Mohali / Kharar.\nPlease share details.\n\nThanks.",
  );

  const ownerMessage = encodeURIComponent(
    "Hi SmartStay PG 👋\n\nI am a Property Owner and want to list my PG / Rooms.\nPlease guide me about promotion & inquiries.\n\nThanks.",
  );

  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold md:text-4xl">Looking for PG / Rooms in Tricity?</h2>

        <p className="mt-3 text-lg opacity-95">Near Chandigarh University • Mohali • Kharar</p>

        <p className="mt-2 text-sm opacity-90">Call or WhatsApp us for rent, availability, location & visit details</p>

        {/* PRIMARY CTA */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {/* Tenant WhatsApp */}
          <Button
            asChild
            className="w-full bg-white py-6 text-base font-extrabold text-orange-600 shadow-md hover:bg-gray-100 sm:w-auto"
          >
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${tenantMessage}`} target="_blank">
              💬 WhatsApp for Room Inquiry
            </a>
          </Button>

          {/* Owner WhatsApp */}
          <Button
            asChild
            className="w-full bg-blue-700 py-6 text-base font-extrabold text-white shadow-md hover:bg-blue-800 sm:w-auto"
          >
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${ownerMessage}`} target="_blank">
              🏠 List Your Property (Owner)
            </a>
          </Button>
        </div>

        {/* SECONDARY CTA */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {/* Call */}
          <Button asChild className="w-full bg-black/90 py-6 text-base font-bold text-white hover:bg-black sm:w-auto">
            <a href="tel:8146660665">📞 Call for Address & Site Visit</a>
          </Button>

          {/* Instagram */}
          <a
            href="https://instagram.com/smartstay_pg_kharar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-pink-600 shadow-md transition hover:scale-[1.02] sm:w-auto"
          >
            📸 Follow SmartStay on Instagram
          </a>
          {/* <a
            href="https://www.instagram.com/smartstay_pg_kharar?igsh=ejY5cXl3cW1lOHlj&utm_source=qr"
            target="_blank"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-pink-600 shadow-md transition hover:scale-[1.02] sm:w-auto"
          >
            📸 Follow SmartStay on Instagram
          </a> */}
        </div>

        {/* TRUST LINE */}
        <p className="mt-6 text-xs opacity-90">
          ✔ Verified listings • ✔ Brokerage applicable (Negotiable) • ✔ Direct owner coordination
        </p>
      </div>
    </section>
  );
}
