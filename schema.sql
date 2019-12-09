CREATE DATABASE productinfo;

USE productinfo;

-- CREATE TABLE products (id VARCHAR(36), PRODUCT_NAME VARCHAR(50), rating int, info(text))

CREATE TABLE ratings (
    id VARCHAR(36),
    USER_NAME VARCHAR(30),
    rating int
);

CREATE TABLE information (
    id VARCHAR(36),
    PRODUCT_NAME VARCHAR(50),
    info text
);