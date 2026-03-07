import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class JavaClient {

 public static void main(String[] args) throws Exception {

  HttpClient client = HttpClient.newHttpClient();

  String apiUrl = "http://localhost:3000/convert";

  String requestBody = "{\"value\":25,\"type\":\"CtoF\"}";

  HttpRequest request = HttpRequest.newBuilder()
   .uri(URI.create(apiUrl))
   .header("Content-Type","application/json")
   .POST(HttpRequest.BodyPublishers.ofString(requestBody))
   .build();

  HttpResponse<String> response =
   client.send(request, HttpResponse.BodyHandlers.ofString());

  System.out.println("Response Code: " + response.statusCode());
  System.out.println("Response Body: " + response.body());

 }
}