package FactoryMethodPattern.Document;

public class ExcelDocument implements Document {
    public void open() {
        System.out.println("Openeing Excel Document...");
    }

}
