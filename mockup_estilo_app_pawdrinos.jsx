import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, PawPrint } from "lucide-react"

export default function App() {
  const sessions = [
    {
      id: 1,
      title: "Yoga con perros",
      date: "12 de septiembre, 2025",
      price: "$85.000",
      location: "Parque de la 93, Bogotá",
    },
    {
      id: 2,
      title: "Mindfulness con gatos",
      date: "15 de septiembre, 2025",
      price: "$95.000",
      location: "Chapinero, Bogotá",
    },
    {
      id: 3,
      title: "Yoga y mindfulness mixto",
      date: "20 de septiembre, 2025",
      price: "$120.000",
      location: "Usaquén, Bogotá",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <PawPrint /> Pawdrinos
        </h1>
        <Button variant="secondary" className="bg-white text-green-600">
          Iniciar sesión
        </Button>
      </header>

      {/* Main */}
      <main className="flex-1 p-4 grid gap-4">
        <h2 className="text-lg font-semibold">Próximas sesiones</h2>
        {sessions.map((session) => (
          <Card key={session.id} className="shadow-md">
            <CardContent className="p-4">
              <h3 className="text-base font-bold">{session.title}</h3>
              <p className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} /> {session.date}
              </p>
              <p className="text-gray-600">Lugar: {session.location}</p>
              <p className="text-green-700 font-semibold">Precio: {session.price}</p>
              <Button className="mt-2 bg-green-600 hover:bg-green-700 w-full">
                Reservar
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>

      {/* Footer navigation */}
      <footer className="bg-white border-t p-2 flex justify-around text-gray-600">
        <button className="flex flex-col items-center">
          <PawPrint />
          <span className="text-xs">Inicio</span>
        </button>
        <button className="flex flex-col items-center">
          <Calendar />
          <span className="text-xs">Sesiones</span>
        </button>
      </footer>
    </div>
  )
}
