import { NextResponse } from "next/server";
import ProductService from "../../../../backend/service/product/product.service"
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const product = await ProductService.createProduct(body);

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: error.flatten() }, { status: 400 })
    }
    return NextResponse.json({ message: "Failure Server" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const products = await ProductService.list()

  return NextResponse.json(products, { status: 200 })
}