import { productService } from "@/lib/services/product.service";
import { ApiResponse } from "@/lib/utils/api-response";

export async function GET() {
  try {
    const products = await productService.getAllProducts();

    return ApiResponse.success(
      products,
      "Products fetched successfully."
    );
  } catch (error) {
    console.error(error);

    return ApiResponse.error(
      "Failed to fetch products."
    );
  }
}