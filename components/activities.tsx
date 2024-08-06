export function Activities({ data }: any) {
	return (
		<div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
			<h1 className="text-3xl font-bold mb-4 mb-4">{data?.title}</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h2 className="text-2xl font-bold mb-4">Actividades por día</h2>
					<div className="space-y-4">
						{data?.activitiesbyday?.map((itinerario: any, index: number) => (
							<div key={index} className="mb-3">
								<h3 className="text-lg font-medium mb-1">{itinerario.dia}</h3>
								<ul className="space-y-2 text-muted-foreground">
									{itinerario?.actividades?.map((e: any, index: number) => (
										<li key={index}>{e.pasos}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-bold mb-4">Destino y ciudad</h2>
					<div className="space-y-2 text-muted-foreground">
						<p>{data?.city?.DestinoPrincipal}</p>
						<p>{data?.city?.CityandCountry}</p>
					</div>
					<h2 className="text-2xl font-bold mt-6 mb-4">Alojamiento</h2>
					<div className="space-y-2 text-muted-foreground">
						<p>Hotel: {data?.accommodation?.name}</p>
						<p>Características: {data?.accommodation?.feature}</p>
						<p>Ubicación: {data?.accommodation?.location}</p>
						<p>
							Sitio Web:{" "}
							<a href={data?.accommodation?.website} target="_blank">
								Click Aquí
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="mt-6">
				<h2 className="text-2xl font-bold mb-4">
					Distribución del presupuesto por día:
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{data?.budget?.map((e: any, index: number) => (
						<div key={index}>
							<h3 className="text-lg font-medium mb-2">{e.day}</h3>
							<p className="text-muted-foreground mb-1">
								Detalles: {e.budgetbyday}
							</p>
							<p className="text-muted-foreground">
								Presupuesto del día: {e.finalbudget}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="mt-6">
				<h2 className="text-2xl font-bold mb-4">Resumen:</h2>
				<div className="grid gap-4">{data?.resumen}</div>
			</div>
		</div>
	);
}
