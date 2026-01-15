import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const WHATSAPP_NUMBER = "918146660665";

  const tenantMessage = encodeURIComponent(
    "Hi SmartStay PG 👋\n\nI am looking for PG / Room near Chandigarh University / Mohali / Kharar.\nPlease share details.\n\nThanks.",
  );

  const ownerMessage = encodeURIComponent(
    "Hi SmartStay PG 👋\n\nI am a Property Owner and want to list my PG / Rooms.\nI heard promotion is 100% FREE.\nPlease guide me.\n\nThanks.",
  );

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto grid gap-14 px-5 md:grid-cols-2 md:items-center">
        {/* LOGO */}
        <div className="animate-slide-up flex justify-center">
          <Image src="/smartstaylogo.png" alt="SmartStay PG Logo" width={360} height={260} priority />
        </div>

        {/* CONTENT */}
        <div className="animate-fade-in">
          <h1 className="text-[2.2rem] leading-tight font-extrabold text-blue-900 md:text-5xl">SmartStay PG & Rooms</h1>

          <h2 className="mt-2 text-[1.6rem] leading-snug font-extrabold text-orange-500 md:text-3xl">
            Near Chandigarh University <br className="md:hidden" />• Mohali • Kharar
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
            PG & Rooms available across <span className="font-semibold">Tricity</span> — Chandigarh, Mohali & Kharar.
            Comfortable stays for{" "}
            <span className="font-semibold">Students, Working Professionals, Families & Boys</span>.
          </p>

          {/* OWNER NOTE */}
          <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
            <p className="text-sm font-semibold text-blue-900">🏠 Property Owners</p>
            <p className="text-sm text-blue-800">
              List your PG / Rooms with SmartStay —
              <span className="font-bold text-orange-600"> 100% FREE Promotion</span>
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="w-full bg-green-500 py-6 text-base font-bold hover:bg-green-600 sm:w-auto">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${tenantMessage}`} target="_blank">
                💬 WhatsApp (Tenant)
              </a>
            </Button>

            <Button asChild className="w-full bg-blue-600 py-6 text-base font-bold hover:bg-blue-700 sm:w-auto">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${ownerMessage}`} target="_blank">
                🏠 WhatsApp (Owner – FREE Listing)
              </a>
            </Button>
          </div>

          {/* SECONDARY ACTIONS */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Call Button */}
            <Button
              variant="outline"
              asChild
              className="w-full border-2 border-blue-600 py-6 text-base font-semibold text-blue-700 hover:bg-blue-50 sm:w-auto"
            >
              <a href="tel:8146660665">📞 Call Me Now</a>
            </Button>

            {/* Instagram Button */}

            <a
              href="https://instagram.com/smartstay_pg_kharar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-4 text-base font-extrabold text-white shadow-lg transition hover:scale-[1.02] sm:w-auto"
            >
              <span className="text-xl">📸</span>
              Follow SmartStay on Instagram
            </a>

            <p className="mt-2 text-center text-sm font-medium text-gray-600 sm:text-left">
              👉 Follow us for latest PG availability, offers & updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
