package com.devsuperior.dsdelivery.services;

import java.time.Instant;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdelivery.dto.OrderDTO;
import com.devsuperior.dsdelivery.dto.ProductDTO;
import com.devsuperior.dsdelivery.entities.Order;
import com.devsuperior.dsdelivery.entities.OrderStatus;
import com.devsuperior.dsdelivery.entities.Product;
import com.devsuperior.dsdelivery.repositories.OrderRepository;
import com.devsuperior.dsdelivery.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired private OrderRepository repository;
	@Autowired private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(o -> new OrderDTO(o)).collect(Collectors.toList());
	}
	
	
	@Transactional()
	public OrderDTO insert(OrderDTO orderDTO) {
		Order order = new Order(null, orderDTO.getAddress(), orderDTO.getLatitude(), orderDTO.getLongitude(), Instant.now(), OrderStatus.PENDING);
		for(ProductDTO p : orderDTO.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		Order orderResult = repository.save(order);
		return new OrderDTO(orderResult);
	}
	
	@Transactional()
	public OrderDTO setDelivered(Long id) {
		Order order = repository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
}
