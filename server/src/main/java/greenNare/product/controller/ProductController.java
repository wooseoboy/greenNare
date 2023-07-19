package greenNare.product.controller;


import greenNare.Response.MultiResponseDto;
import greenNare.Response.PageInfo;
import greenNare.Response.SingleResponseDto;
import greenNare.product.entity.Product;
import greenNare.product.mapper.ProductMapper;
import greenNare.product.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("/green")
public class ProductController {
    private ProductService productService;
    private ProductMapper mapper;

    public ProductController(ProductService productService, ProductMapper mapper) {
        this.productService = productService;
        this.mapper = mapper;
    }

    @GetMapping("/")
    public void response(){
        System.out.println("h");
    }

    @GetMapping
    public ResponseEntity getProducts(@RequestParam("page") int page,
                                      @RequestParam("size") int size,
                                      @RequestParam("category") String category){

        Page<Product> getProducts = productService.getProducts(page-1, size, category);
        List<Product> responseProducts = getProducts.getContent();
        MultiResponseDto response = new MultiResponseDto(responseProducts,
                getProducts);



        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    public ResponseEntity getProduct(@PathVariable("productId") int productId) {
        Product productDetails = productService.getProduct(productId);
        SingleResponseDto response = new SingleResponseDto(productDetails);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity findProduct(@RequestParam("productName") String productName,
                                      @RequestParam("page") int page,
                                      @RequestParam("size") int size) {

        List<Product> Products = productService.findProducts(productName);
        SingleResponseDto response = new SingleResponseDto(Products);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}
