package com.example;

import org.apache.cxf.jaxws.JaxWsServerFactoryBean;

public class Server {

 public static void main(String[] args) {

  JaxWsServerFactoryBean factory = new JaxWsServerFactoryBean();

  factory.setServiceClass(CalculatorService.class);
  factory.setAddress("http://localhost:8080/CalculatorService");
  factory.setServiceBean(new CalculatorServiceImpl());

  factory.create();

  System.out.println("SOAP Service Started at http://localhost:8080/CalculatorService");
 }
}