package com.library.repository;

import com.library.entity.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<BookEntity, Long> {
    BookEntity findByIsbn(String isbn);
}
