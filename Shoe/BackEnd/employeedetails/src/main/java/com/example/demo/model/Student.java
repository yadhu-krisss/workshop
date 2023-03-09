package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
private int id;
private String Brand;
private int  Size;
private double Price;
private String img;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getBrand() {
	return Brand;
}
public void setBrand(String brand) {
	Brand = brand;
}
public int getSize() {
	return Size;
}
public void setSize(int size) {
	Size = size;
}
public double getPrice() {
	return Price;
}
public void setPrice(double price) {
	Price = price;
}
public String getImg() {
	return img;
}
public void setImg(String img) {
	this.img = img;
}
public Student(int id, String brand, int size, double price, String img) {
	super();
	this.id = id;
	Brand = brand;
	Size = size;
	Price = price;
	this.img = img;
}
public Student() {
	super();
	// TODO Auto-generated constructor stub
}


}