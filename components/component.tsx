"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { JSX, SVGProps, useState, useRef } from "react";
import { notificationSchema } from "../app/api/notifications/schema";
import { experimental_useObject as useObject } from "ai/react";
import { Activities } from "./activities";

export function Component() {
	const gpt: any = useRef(null);
	const home: any = useRef(null);

	let { object, submit, isLoading, stop } = useObject({
		api: "/api/notifications",
		schema: notificationSchema,
	});

	const [formData, setFormData] = useState({
		budget: "",
		destination: "",
		days: "",
		accommodation: "",
		activities: "",
		cities: "",
		origin: "",
	});

	const handleChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	function handleSubmit(e: any) {
		e.preventDefault();
		submit(formData);
		if (gpt.current) {
			window.scrollTo({
				top: gpt.current.offsetTop,
				behavior: "smooth",
			});
		}
	}

	function setData() {
		if (home.current) {
			window.scrollTo({
				top: home.current.offsetTop,
				behavior: "instant",
			});
		}
		window.location.reload();
	}

	return (
		<div id="home" ref={home} className="flex flex-col min-h-dvh">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link
					href="#"
					className="flex items-center justify-center"
					prefetch={false}
				>
					<PlaneIcon className="size-6 text-primary" />
					<span className="sr-only">Travel Advice</span>
				</Link>
			</header>
			<main className="flex-1">
				<section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
					<div className="px-4 md:px-6 space-y-10 xl:space-y-16">
						<div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
							<div>
								<h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
									Unlock the World with Our Travel Advice
								</h1>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Discover the best destinations, plan your dream trip, and get
									expert tips to make the most of your travels.
								</p>
								<div className="mt-6 space-x-4">
									<Link
										href="#"
										className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Get Travel Advice
									</Link>
								</div>
							</div>
							<div className="flex flex-col items-start space-y-4">
								<img
									src="https://i.imgur.com/hUlrQtE.png"
									alt="Travel"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
								/>
							</div>
						</div>
					</div>
				</section>
				<section id="AI" className="w-full py-12 md:py-24 lg:py-32">
					<div className="max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
						<div className="container space-y-12 px-4 md:px-6">
							<div className="flex flex-col items-center justify-center text-center space-y-4">
								<div className="space-y-2">
									<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
										Get Personalized Travel Advice
									</h2>
									<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										Fill out the form below and our travel experts will provide
										you with personalized recommendations and tips to make your
										next trip unforgettable.
									</p>
								</div>
							</div>
							<form
								className="mx-auto w-full space-y-4"
								onSubmit={handleSubmit}
							>
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<Input
										type="number"
										placeholder="Budget"
										className="max-w-lg flex-1"
										name="budget"
										value={formData.budget}
										onChange={handleChange}
									/>
									<Input
										type="text"
										placeholder="Destination"
										className="max-w-lg flex-1"
										name="destination"
										value={formData.destination}
										onChange={handleChange}
									/>
								</div>
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<Input
										type="text"
										placeholder="Travel Time"
										className="max-w-lg flex-1"
										name="days"
										value={formData.days}
										onChange={handleChange}
									/>
									<Input
										type="text"
										placeholder="Accommodation"
										className="max-w-lg flex-1"
										name="accommodation"
										value={formData.accommodation}
										onChange={handleChange}
									/>
								</div>
								<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<Input
										type="text"
										placeholder="Activities"
										className="max-w-lg flex-1"
										name="activities"
										value={formData.activities}
										onChange={handleChange}
									/>
									<Input
										type="text"
										placeholder="Ubicación de origen"
										className="max-w-lg flex-1"
										name="origin"
										value={formData.origin}
										onChange={handleChange}
									/>
								</div>
								<Button type="submit" className="w-full">
									Get Travel Advice
								</Button>
								{isLoading && (
									<div>
										<Button
											type="button"
											className="w-full"
											onClick={() => stop()}
										>
											Stop
										</Button>
										<div>Generando...</div>
									</div>
								)}
							</form>
						</div>
						<div id="chatGPT" ref={gpt}>
							{object && (
								<section className="flex flex-col items-center justify-center space-y-4 mt-12">
									<Activities data={object} />
									<Button onClick={setData}>Reiniciar</Button>
								</section>
							)}
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
					<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
						<div className="space-y-3">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Get Travel Advice from our AI
							</h2>
							<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our AI-powered travel advice platform provides personalized
								recommendations and tips to help you plan your dream trip.
							</p>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
							<Card>
								<CardHeader>
									<img
										src="/placeholder.svg"
										width="400"
										height="225"
										alt="Travel Tip"
										className="rounded-t-md object-cover"
										style={{ aspectRatio: "400/225", objectFit: "cover" }}
									/>
								</CardHeader>
								<CardContent>
									<h3 className="text-lg font-bold">
										Destination Recommendations
									</h3>
									<p className="text-muted-foreground">
										Get personalized destination suggestions based on your
										preferences and budget.
									</p>
								</CardContent>
								<CardFooter>
									<Link
										href="#"
										className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Learn More
									</Link>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<img
										src="/placeholder.svg"
										width="400"
										height="225"
										alt="Travel Tip"
										className="rounded-t-md object-cover"
										style={{ aspectRatio: "400/225", objectFit: "cover" }}
									/>
								</CardHeader>
								<CardContent>
									<h3 className="text-lg font-bold">Itinerary Planning</h3>
									<p className="text-muted-foreground">
										Let our AI create a detailed itinerary to make the most of
										your trip.
									</p>
								</CardContent>
								<CardFooter>
									<Link
										href="#"
										className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Learn More
									</Link>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<img
										src="/placeholder.svg"
										width="400"
										height="225"
										alt="Travel Tip"
										className="rounded-t-md object-cover"
										style={{ aspectRatio: "400/225", objectFit: "cover" }}
									/>
								</CardHeader>
								<CardContent>
									<h3 className="text-lg font-bold">Packing Recommendations</h3>
									<p className="text-muted-foreground">
										Get personalized packing lists to ensure you have everything
										you need.
									</p>
								</CardContent>
								<CardFooter>
									<Link
										href="#"
										className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Learn More
									</Link>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<img
										src="/placeholder.svg"
										width="400"
										height="225"
										alt="Travel Tip"
										className="rounded-t-md object-cover"
										style={{ aspectRatio: "400/225", objectFit: "cover" }}
									/>
								</CardHeader>
								<CardContent>
									<h3 className="text-lg font-bold">
										Travel Tips and Insights
									</h3>
									<p className="text-muted-foreground">
										Discover expert tips and insider knowledge to make your trip
										unforgettable.
									</p>
								</CardContent>
								<CardFooter>
									<Link
										href="#"
										className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Learn More
									</Link>
								</CardFooter>
							</Card>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-muted-foreground">
					&copy; 2024 Travel Advice. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4"
						prefetch={false}
					>
						Terms of Service
					</Link>
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4"
						prefetch={false}
					>
						Privacy Policy
					</Link>
				</nav>
			</footer>
		</div>
	);
}

function PlaneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
		</svg>
	);
}
