package com.library.controller;

import com.library.entity.BookEntity;
import com.library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;
    
    @GetMapping
    public List<BookEntity> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping("/addbook")
    public BookEntity addBook(@RequestBody BookEntity book) {
        return bookService.saveBook(book);
    }

    @GetMapping("/getbook/{id}")
    public BookEntity getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @DeleteMapping("/deletebook/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }

    @PutMapping("/updatebook/{id}")
    public BookEntity updateBook(@PathVariable Long id, @RequestBody BookEntity updatedBook) {
        BookEntity existingBook = bookService.getBookById(id);
        if (existingBook != null) {
            existingBook.setTitle(updatedBook.getTitle());
            existingBook.setAuthor(updatedBook.getAuthor());
            existingBook.setIsbn(updatedBook.getIsbn());
            existingBook.setPublisher(updatedBook.getPublisher());
            existingBook.setPublishedYear(updatedBook.getPublishedYear());
            existingBook.setAvailable(updatedBook.isAvailable());
            return bookService.saveBook(existingBook);
        }
        return null;
    }
}
