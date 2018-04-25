package com.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.exception.ResourceNotFoundException;
import com.api.model.Product;
import com.api.repository.ProductRepository;

/**
 * Controller of Product
 * Define all operations for model
 * @author gerson
 *
 */
@CrossOrigin(origins="http://localhost:3001")
@RestController
@RequestMapping("/api")
public class ProductController {
	
	@Autowired
	ProductRepository productRepository;
	
	@GetMapping("/product")
	public List<Product> getAll(){
		return productRepository.findAll();
	}
	
	@PostMapping("/product")
	public Product createProduct(@Valid @RequestBody Product product) {
		return productRepository.save(product);
	}
	
	@GetMapping("/product/{id}")
	public Product getById(@PathVariable(value = "id") Long productId) {
		return productRepository.findById(productId)
				.orElseThrow(()-> new ResourceNotFoundException("Product", "id", productId));
	}
	
	@PutMapping("/product/{id}")
	public Product updateProduct(@PathVariable(value = "id") Long productId, @Valid @RequestBody Product productDetail) {
		Product product = productRepository.findById(productId)
				.orElseThrow(()-> new ResourceNotFoundException("Product", "id", productId));
	
		product.setTitle(productDetail.getTitle());
		product.setDescription(productDetail.getDescription());
	
		Product updateProduct = productRepository.save(product);
		return updateProduct;
	}
		
	@DeleteMapping("/product/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable(value = "id") Long productId) {
		Product product = productRepository.findById(productId)
				.orElseThrow(()-> new ResourceNotFoundException("Product", "id", productId));
	
		productRepository.delete(product);

		return ResponseEntity.ok().build();
	}
}
