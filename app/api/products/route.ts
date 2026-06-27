import { NextResponse } from "next/server";
import { productService } from "@/lib/services/product.service";

export async function GET() {
  try {
    const products = await productService.getAllProducts();

    return NextResponse.json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products.",
      },
      {
        status: 500,
      }
    );
  }
}