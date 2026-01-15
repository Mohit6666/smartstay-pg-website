// import { Card } from "@/components/ui/card";

// const reviews = [
//   "⭐⭐⭐⭐⭐ PG Owner – Kharar",
//   "⭐⭐⭐⭐⭐ Student – Chandigarh University",
//   "⭐⭐⭐⭐⭐ Fast room occupancy",
//   "⭐⭐⭐⭐⭐ Genuine inquiries only",
//   "⭐⭐⭐⭐⭐ Very helpful service",
// ];

// export default function Reviews() {
//   return (
//     <section className="overflow-hidden px-6 py-20">
//       <h2 className="mb-10 text-center text-3xl font-bold">What People Say</h2>

//       <div className="relative w-full">
//         <div className="marquee">
//           {[...reviews, ...reviews].map((text, i) => (
//             <Card key={i} className="mx-2 min-w-[260px] p-4 text-center">
//               {text}
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Reviews() {
  return (
    <section className="bg-blue-900 py-16 text-center text-white">
      <h2 className="text-3xl font-bold">What People Say</h2>
      <p className="mt-4 opacity-90">⭐ ⭐ ⭐ ⭐ ⭐ Trusted by Students & Families</p>
    </section>
  );
}
