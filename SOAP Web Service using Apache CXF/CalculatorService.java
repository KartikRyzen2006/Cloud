//paste into src/main/java/com/example //

package com.example;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public interface CalculatorService {

 @WebMethod
 int add(int num1, int num2);

 @WebMethod
 int subtract(int num1, int num2);
}