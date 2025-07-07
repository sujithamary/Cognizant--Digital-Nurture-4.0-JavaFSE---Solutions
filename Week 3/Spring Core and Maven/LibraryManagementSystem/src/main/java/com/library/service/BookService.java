package com.library.service;

import com.library.entity.BookEntity;
import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<BookEntity> getAllBooks() {
        return bookRepository.findAll();
    }

    public BookEntity getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    public BookEntity saveBook(BookEntity book) {
        return bookRepository.save(book);
    }

    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
