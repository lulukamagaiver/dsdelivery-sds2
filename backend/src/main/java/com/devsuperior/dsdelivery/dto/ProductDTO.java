package com.devsuperior.dsdelivery.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.devsuperior.dsdelivery.entities.Product;

public class ProductDTO implements Serializable {

	private static final long serialVersionUID = 5552471879292495677L;
	private Long id;
	private String name;
	private BigDecimal price;
	private String description;
	private String imageUri;
	
	public ProductDTO() {}

	public ProductDTO(Long id, String name, BigDecimal price, String description, String imageUri) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageUri = imageUri;
	}
	
	public ProductDTO(Product entity) {
		super();
		id = entity.getId();
		name = entity.getName();
		price = entity.getPrice();
		description = entity.getDescription();
		imageUri = entity.getImageUri();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageUri() {
		return imageUri;
	}

	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}
	
	
	
	
	
}
