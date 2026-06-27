import { NextRequest, NextResponse } from "next/server";

import { productService } from "@/lib/services/product.service";

export async function GET() {
  try {
    const products = await productService.getProducts();

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const product = await productService.createProduct(body);

    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully.",
        data: product,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create product.",
      },
      {
        status: 500,
      }
    );
  }
}