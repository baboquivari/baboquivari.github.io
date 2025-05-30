// import { useState } from "react";

// interface Testimonial {
//   quote: string;
//   author: string;
//   position: string;
//   company: string;
//   image: string;
// }

// const Testimonials = () => {
//   const testimonials: Testimonial[] = [
//     {
//       quote: "Dead Lead Phoenix reactivated leads we thought were gone for good. Sales jumped 32% in just six weeks.",
//       author: "Jenna Armitage",
//       position: "Senior Marketing Executive",
//       company: "Invenia",
//       image: "https://frost-lark-9ff.notion.site/image/attachment%3A78dc01cf-6a21-4143-966d-226b00b24f8f%3Ajenna_invenia.jpeg?table=block&id=1f9412d3-850f-8044-98cf-ed8bdafdf4a9&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2"
//     },
//     {
//       quote: "The simplicity and effectiveness blew us away. Within one month, we saw over $3,000 from previously unresponsive leads.",
//       author: "Lina Tszyan",
//       position: "Founder",
//       company: "Hill Tribe Silver",
//       image: "https://frost-lark-9ff.notion.site/image/attachment%3A86fcd9f2-81eb-419f-b220-2eb10f9295f7%3Alina-beautiful-500-cmprs.png?table=block&id=1f9412d3-850f-80eb-b9fd-d91f42125cb1&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1000&userId=&cache=v2"
//     },
//     {
//       quote: "We had thousands of dead leads just gathering dust. DLP turned them into instant revenue, helping us close deals effortlessly.",
//       author: "Dan Emmett",
//       position: "Owner",
//       company: "Yorkshire Electric Gates",
//       image: "https://frost-lark-9ff.notion.site/image/attachment%3A72b784cf-597f-42cd-9416-add5b1c0a0f5%3Adan_emmett.png?table=block&id=1f9412d3-850f-80d6-8ed3-ff40ac02608d&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2"
//     }
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState<'left' | 'right'>('right');

//   const handleNext = () => {
//     setDirection('right');
//     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setDirection('left');
//     setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="section bg-dlp-darker">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        
//         <div className="max-w-4xl mx-auto">
//           <div className="tech-card p-8 md:p-12 glow-border overflow-hidden">
//             <div className="relative">
//               <div className="absolute -top-6 -left-2 text-dlp-purple text-6xl opacity-30">"</div>
//               <div 
//                 key={activeIndex}
//                 className={`relative z-10 transform transition-all duration-500 ${
//                   direction === 'right' 
//                     ? 'animate-[slide-in-right_0.5s_ease-out]' 
//                     : 'animate-[slide-in-left_0.5s_ease-out]'
//                 }`}
//                 style={{
//                   '@keyframes slide-in-right': {
//                     '0%': { transform: 'translateX(100%)', opacity: 0 },
//                     '100%': { transform: 'translateX(0)', opacity: 1 }
//                   },
//                   '@keyframes slide-in-left': {
//                     '0%': { transform: 'translateX(-100%)', opacity: 0 },
//                     '100%': { transform: 'translateX(0)', opacity: 1 }
//                   }
//                 }}
//               >
//                 <p className="text-xl md:text-2xl italic text-gray-200 mb-8">
//                   {testimonials[activeIndex].quote}
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-full overflow-hidden bg-dlp-purple/30 flex items-center justify-center">
//                     <img 
//                       src={testimonials[activeIndex].image} 
//                       alt={testimonials[activeIndex].author}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="ml-4">
//                     <p className="font-bold">{testimonials[activeIndex].author}</p>
//                     <p className="text-gray-400">
//                       {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex justify-center mt-8 gap-4">
//             <button 
//               onClick={handlePrev} 
//               className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-dlp-cyan transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
//                 <path d="m15 18-6-6 6-6"/>
//               </svg>
//             </button>
//             <button 
//               onClick={handleNext}
//               className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-dlp-cyan transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
//                 <path d="m9 18 6-6-6-6"/>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
