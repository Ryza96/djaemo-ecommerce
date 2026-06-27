import { productRepository } from "@/lib/repositories/product.repository";
import {
  CreateProductDTO,
  UpdateProductDTO,
} from "@/lib/types/product";

export class ProductService {
  async getAllProducts() {
    return await productRepository.findAll();
  }

  async getProductById(id: string) {
    return await productRepository.findById(id);
  }

  async createProduct(payload: CreateProductDTO) {
    return await productRepository.create(payload);
  }

  async updateProduct(
    id: string,
    payload: UpdateProductDTO
  ) {
    return await productRepository.update(id, payload);
  }

  async deleteProduct(id: string) {
    return await productRepository.delete(id);
  }
}

export const productService = new ProductService();