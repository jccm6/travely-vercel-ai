import { z } from "zod";

// define a schema for the notifications
export const notificationSchema = z.object({
	title: z.string().describe("Increible titulo del viaje"),

	activitiesbyday: z.array(
		z.object({
			dia: z.string().describe("Día"),
			actividades: z.array(
				z.object({
					pasos: z
						.string()
						.describe("Actividades para hacer por el día, minimo 3"),
				})
			),
		})
	),

	city: z.object({
		DestinoPrincipal: z.string().describe("Localización"),
		CityandCountry: z.string().describe("Ciudad y País"),
	}),

	accommodation: z.object({
		name: z.string().describe("Hospedaje real en la zona detallada"),
		feature: z.string().describe("Características del hospedaje"),
		location: z.string().describe("Ubicación referencial del hospedaje"),
		website: z.string().describe("link del hospedaje recomendado"),
	}),

	budget: z.array(
		z.object({
			day: z.string().describe("Día"),
			budgetbyday: z
				.string()
				.describe(
					"Detalla el presupuesto según actividades y comidas recomendadas de manera equitativa"
				),
			finalbudget: z.string().describe("El presupuesto final por el día"),
		})
	),

	resumen: z.string().describe("Indica el resumen final del viaje"),
});
