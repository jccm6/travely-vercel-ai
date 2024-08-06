import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { notificationSchema } from "./schema";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { budget, destination, days, accommodation, activities, origin } =
		await req.json();

	const result = await streamObject({
		model: openai("gpt-4-turbo"),
		schema: notificationSchema,
		prompt: `Estoy planificando un viaje, necesito consejos con los parametros que te daré: Presupuesto: ${budget} USD. Ubicación: ${destination}. Tiempo: ${days} días. Me quiero alojar: ${accommodation}. Me gustaria hacer principalmente: ${activities}. Punto de Partida: ${origin}`,
	});

	return result.toTextStreamResponse();
}
