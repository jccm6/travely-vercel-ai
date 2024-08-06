"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps, useRef } from "react";
import RutineWorkout from "./rutine-workout";
import { experimental_useObject as useObject } from "ai/react";
import { notificationSchema } from "../app/api/notifications/schema";
import { useState } from "react";
import Image from "next/image";

export default function Gymlanding() {
	let { object, submit, isLoading, stop } = useObject({
		api: "/api/notifications",
		schema: notificationSchema,
	});

	const gpt: any = useRef(null);
	const home: any = useRef(null);

	const [formData, setFormData] = useState({
		days: "",
		ubicacion: "",
		objetivo: "",
		condicionFisica: "",
		limitaciones: "",
	});

	const handleChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	function setData() {
		if (home.current) {
			window.scrollTo({
				top: home.current.offsetTop,
				behavior: "instant",
			});
		}
		window.location.reload();
	}

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

	return (
		<div id="home" ref={home} className="flex flex-col min-h-dvh">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link
					href="#"
					className="flex items-center justify-center"
					prefetch={false}
				>
					<DumbbellIcon className="size-6" />
					<span className="sr-only">Fitness Gym</span>
				</Link>
				{/* <nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						About
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Classes
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Trainers
					</Link>
					<Link
						href="#"
						className="text-sm font-medium hover:underline underline-offset-4"
						prefetch={false}
					>
						Contact
					</Link>
				</nav> */}
			</header>
			<main className="flex-1">
				<section className="w-full pt-8 pb-8 md:pt-24 lg:pt-32 border-y">
					<div className="px-4 md:px-6 space-y-10 xl:space-y-16">
						<div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
							<div>
								<h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
									Transforma tu Cuerpo con Inteligencia Artificial
								</h1>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Rutinas de Ejercicio Personalizadas para Alcanzar tus Metas.
								</p>
								<div className="space-x-4 mt-6">
									<Image
										src={"https://i.imgur.com/gCgteu4.png"}
										alt="workout"
										width={"1800"}
										height={"1200"}
									/>
									{/* <Link
										href="#"
										className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Join Now
									</Link> */}
								</div>
							</div>
							<div className="bg-muted rounded-lg p-6 shadow-lg">
								<h2 className="text-2xl font-bold mb-4 text-center">
									Genera tu rutina ideal
								</h2>
								<form
									className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-end"
									onSubmit={handleSubmit}
								>
									<div>
										<label>Ingresa la cantidad de días de tu rutina</label>
										<Input
											type="number"
											name="days"
											placeholder="Días"
											className="w-full"
											value={formData.days}
											onChange={handleChange}
											max={5}
											required
										/>
									</div>
									<div>
										<label>Ingresa el lugar donder realizaras tu rutina</label>
										<Input
											type="text"
											name="ubicacion"
											placeholder="Ubicacion"
											className="w-full"
											value={formData.ubicacion}
											onChange={handleChange}
										/>
									</div>
									<div>
										<label>Ingresa los objetivos de tu rutina</label>
										<Input
											type="text"
											name="objetivo"
											placeholder="Objetivo"
											className="w-full"
											value={formData.objetivo}
											onChange={handleChange}
										/>
									</div>
									<div>
										<label>Ingresa tu condición fisica</label>
										<Input
											type="text"
											name="condicionFisica"
											placeholder="Condicion Fisica"
											className="w-full"
											value={formData.condicionFisica}
											onChange={handleChange}
										/>{" "}
									</div>
									<div>
										<label>¿Alguna limitación fisica?</label>
										<Input
											type="text"
											name="limitaciones"
											placeholder="Limitaciones"
											className="w-full"
											value={formData.limitaciones}
											onChange={handleChange}
										/>
									</div>
									<Button type="submit" className="w-full">
										Generar mi rutina
									</Button>
									{isLoading && (
										<div className="grid md:grid-cols-2 item-start gap-6">
											<div>Generando...</div>
											<Button type="button" onClick={() => stop()}>
												Stop
											</Button>
										</div>
									)}
								</form>
							</div>
						</div>
					</div>
				</section>
				<div id="chatGPT" ref={gpt}>
					{object && (
						<section className="flex flex-col items-center justify-center space-y-4 mt-12">
							<RutineWorkout data={object} />
							<Button onClick={setData}>Reiniciar</Button>
						</section>
					)}
				</div>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="space-y-12 px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Tu Rutina Personalizada
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Descubre el Poder de una Rutina Hecha a tu Medida
								</p>
							</div>
						</div>
						<div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
							<div className="grid gap-1">
								<h3 className="text-lg font-bold">Análisis Detallado</h3>
								<p className="text-sm text-muted-foreground">
									Nuestra IA analiza tu condición física actual y tus objetivos
									para crear una rutina perfecta para ti.
								</p>
							</div>
							<div className="grid gap-1">
								<h3 className="text-lg font-bold">Adaptación Continua</h3>
								<p className="text-sm text-muted-foreground">
									A medida que avanzas, nuestra IA ajusta tu rutina para
									asegurar un progreso constante y efectivo.
								</p>
							</div>
							<div className="grid gap-1">
								<h3 className="text-lg font-bold">Variedad de Ejercicios</h3>
								<p className="text-sm text-muted-foreground">
									Disfruta de una amplia gama de ejercicios que mantienen tu
									entrenamiento interesante y desafiante.
								</p>
							</div>
							<div className="grid gap-1">
								<h3 className="text-lg font-bold">Resultados Rápidos</h3>
								<p className="text-sm text-muted-foreground">
									Al seguir una rutina personalizada, notarás mejoras más
									rápidamente y de manera sostenible.
								</p>
							</div>
							<div className="grid gap-1">
								<h3 className="text-lg font-bold">Soporte y Motivación</h3>
								<p className="text-sm text-muted-foreground">
									Obtén consejos y motivación personalizados para mantenerte en
									el camino hacia tus objetivos.
								</p>
							</div>
							<div className="grid gap-1">
								<h3 className="text-lg font-bold">
									Accesible en Cualquier Lugar
								</h3>
								<p className="text-sm text-muted-foreground">
									Accesible en Cualquier Lugar Realiza tus entrenamientos en
									casa, en el gimnasio o al aire libre, con rutinas diseñadas
									para cualquier entorno.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-muted-foreground">
					&copy; 2024 Fitness Gym. Built with ❤️ by{" "}
					<a href="https://github.com/jccm6" target="_blank">
						jccm6
					</a>
					.
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

function DumbbellIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
			<path d="M14.4 14.4 9.6 9.6" />
			<path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
			<path d="m21.5 21.5-1.4-1.4" />
			<path d="M3.9 3.9 2.5 2.5" />
			<path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
		</svg>
	);
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
