
public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(2, "Shoes", "Footwear"),
                new Product(3, "Phone", "Electronics"),
                new Product(4, "T-Shirt", "Clothing"),
                new Product(5, "Watch", "Accessories")
        };

        System.out.println("Linear Search for 'Phone':");
        Product result1 = SearchService.linearSearch(products, "Phone");
        System.out.println(result1 != null ? result1 : "Product not found.");

        System.out.println("\nBinary Search for 'Phone':");
        Product result2 = SearchService.binarySearch(products, "Phone");
        System.out.println(result2 != null ? result2 : "Product not found.");
    }
}