import React, { useRef, useEffect } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay, Navigation } from "swiper/modules"; // Add Navigation

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation"; // Import navigation styles

const projects = [
	{
		id: 1,
		title: "Georgia Tech",
		description: "",
		image: "/projects/GT.png",
		tags: [],
		demoUrl: "https://www.gatech.edu/",
	},
	{
		id: 2,
		title: "Carnegie Mellon",
		description: "",
		image: "/projects/CMU.jpg",
		tags: [],
		demoUrl: "https://www.cmu.edu/",
	},
	{
		id: 3,
		title: "Cornell",
		description: "",
		image: "/projects/Cornell.png",
		tags: [],
		demoUrl: "https://www.cornell.edu/",
	},
	{
		id: 4,
		title: "Johns Hopkins",
		description: "",
		image: "/projects/JHU.png",
		tags: [],
		demoUrl: "https://www.jhu.edu/",
	},
	{
		id: 5,
		title: "Stanford University",
		description: "",
		image: "/projects/Stanford.jpg",
		tags: [],
		demoUrl: "https://www.stanford.edu/",
	},
	{
		id: 6,
		title: "Purdue University",
		description: "",
		image: "/projects/Purdue.png",
		tags: [],
		demoUrl: "https://www.purdue.edu/",
	},
	{
		id: 8,
		title: "Howard University",
		description: "",
		image: "/projects/Howard.jpg",
		tags: [],
		demoUrl: "https://howard.edu/",
	},
];

export const ProjectsSection = () => {
	const swiperRef = useRef(null);

	// Pause autoplay on mount
	useEffect(() => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.autoplay.stop();
		}
	}, []);

	const handleMouseEnter = () => {
		swiperRef.current?.swiper?.autoplay?.start();
	};

	const handleMouseLeave = () => {
		swiperRef.current?.swiper?.autoplay?.stop();
	};

	// Custom navigation handlers
	const handlePrev = () => {
		swiperRef.current?.swiper?.slidePrev();
	};

	const handleNext = () => {
		swiperRef.current?.swiper?.slideNext();
	};

	return (
		<section id="universities" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					University <span className="text-primary"> Offers </span>
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of the universities our graduates attend or have recieved
					offers from.
				</p>
				<div className="relative flex items-center">
					{/* Left Arrow */}
					<button
						onClick={handlePrev}
						aria-label="Previous"
						className="z-20 absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-primary/80 transition"
						style={{ left: "-2.5rem" }}
					>
						<svg
							width="40"
							height="40"
							viewBox="0 0 25 25"
							fill="none"
							stroke="currentColor"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="15 18 9 12 15 6" />
						</svg>
					</button>
					<div
						className="px-4 py-8 w-full"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<Swiper
							ref={swiperRef}
							modules={[Pagination, Scrollbar, A11y, Autoplay, Navigation]}
							spaceBetween={30}
							slidesPerView={1}
							loop={true}
							breakpoints={{
								640: {
									slidesPerView: 2,
								},
								1024: {
									slidesPerView: 3,
								},
							}}
							autoplay={{
								delay: 0,
								disableOnInteraction: false,
								pauseOnMouseEnter: false,
							}}
							speed={2000}
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
							navigation={false} // Disable default arrows
							className="swiper-container"
						>
							{projects.map((project) => (
								<SwiperSlide key={project.id}>
									<div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full">
										<div className="h-48 overflow-hidden">
											<img
												src={project.image}
												alt={project.title}
												className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
											/>
										</div>
										<div className="p-6">
											<div className="flex flex-wrap gap-2 mb-4">
												{project.tags.map((tag, i) => (
													<span
														key={i}
														className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
													>
														{tag}
													</span>
												))}
											</div>
											<h3 className="text-xl font-semibold mb-1">
												{project.title}
											</h3>
											<p className="text-muted-foreground text-sm mb-4">
												{project.description}
											</p>
											<div className="flex justify-between items-center">
												<div className="flex space-x-3">
													<a
														href={project.demoUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="text-foreground/80 hover:text-primary transition-colors duration-300"
													>
														<ExternalLink size={20} />
													</a>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					{/* Right Arrow */}
					<button
						onClick={handleNext}
						aria-label="Next"
						className="z-20 absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-primary/80 transition"
						style={{ right: "-2.5rem" }}
					>
						<svg
							width="40"
							height="40"
							viewBox="0 0 22 25"
							fill="none"
							stroke="currentColor"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="9 6 15 12 9 18" />
						</svg>
					</button>
				</div>
				<div className="text-center mt-12"></div>
			</div>
		</section>
	);
};
