-- Customer Table
CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    name VARCHAR(255),
    qr_code VARCHAR(255)
);

-- MenuItem Table
CREATE TABLE MenuItem (
    item_id INT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    service_type_id INT,
    FOREIGN KEY (service_type_id) REFERENCES ServiceType(service_type_id)
);

-- Order Table
CREATE TABLE Order (
    order_id INT PRIMARY KEY,
    customer_id INT,
    item_id INT,
    total_cost DECIMAL(10, 2),
    status VARCHAR(50),
    table_or_room_number VARCHAR(50), -- New column for table number or room number
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (item_id) REFERENCES MenuItem(item_id)
);


-- ServiceType Table
CREATE TABLE ServiceType (
    service_type_id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Cook Table
CREATE TABLE Cook (
    cook_id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Admin Table
CREATE TABLE Admin (
    admin_id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- AdOnService Table
CREATE TABLE AdOnService (
    ad_service_id INT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2)
);

-- CustomerAdService Table
CREATE TABLE CustomerAdService (
    customer_id INT,
    ad_service_id INT,
    PRIMARY KEY (customer_id, ad_service_id),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (ad_service_id) REFERENCES AdOnService(ad_service_id)
);

-- DailySales Table
CREATE TABLE DailySales (
    sale_date DATE PRIMARY KEY,
    total_sales DECIMAL(10, 2)
);

-- WeeklySales Table
CREATE TABLE WeeklySales (
    week_number INT PRIMARY KEY,
    total_sales DECIMAL(10, 2)
);

-- MonthlySales Table
CREATE TABLE MonthlySales (
    month_year VARCHAR(10) PRIMARY KEY,
    total_sales DECIMAL(10, 2)
);
