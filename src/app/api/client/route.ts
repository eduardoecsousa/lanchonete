import { NextResponse } from 'next/server'
import ClientService from '../../../../backend/service/client/client.service'
import { ZodError } from 'zod'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const cliente = await ClientService.createClient(body)

    return NextResponse.json(cliente, { status: 201 })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: error.flatten() }, { status: 400 })
    }
     return NextResponse.json({ message: "Erro interno do servidor" }, { status: 500 })
  }

}

export async function GET() {
  const clientes = await ClientService.list()
  return NextResponse.json(clientes)
}
