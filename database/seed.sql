USE commercepro;

INSERT INTO users (name, email, password_hash, role) VALUES
('Admin User', 'admin@commercepro.com', '$2a$10$VXb5e2lYdExLQybSkf82keSZQK7nVhS0H9riM2QCCJAL2B/7Q3QnS', 'admin'),
('Jane Customer', 'user@commercepro.com', '$2a$10$nNMejrSctQY3vY9X6d0fQeygOtA8fso5Gafktv49SV9zY2OG9R58W', 'customer');

INSERT INTO admins (user_id, permissions) VALUES (1, JSON_OBJECT('products', true, 'orders', true, 'users', true));

INSERT INTO categories (name, slug) VALUES
('Electronics', 'electronics'),
('Fashion', 'fashion'),
('Home', 'home');

INSERT INTO brands (name, slug) VALUES
('NovaTech', 'novatech'),
('UrbanWear', 'urbanwear');

INSERT INTO products (name, slug, description, price, stock, category_id, brand_id, status) VALUES
('Premium Headphones', 'premium-headphones', 'Wireless ANC headphones', 249.00, 70, 1, 1, 'active'),
('Smart Watch Pro', 'smart-watch-pro', 'Fitness and productivity watch', 199.00, 50, 1, 1, 'active'),
('Minimal Sneakers', 'minimal-sneakers', 'Everyday comfort sneakers', 129.00, 120, 2, 2, 'active');

INSERT INTO product_images (product_id, image_url, is_primary) VALUES
(1, '/images/headphones.jpg', 1),
(2, '/images/watch.jpg', 1),
(3, '/images/sneakers.jpg', 1);

INSERT INTO carts (user_id) VALUES (2);
INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (1, 1, 1), (1, 3, 2);

INSERT INTO wishlists (user_id, product_id) VALUES (2, 2);

INSERT INTO addresses (user_id, line1, city, state, country, postal_code) VALUES
(2, '123 Market Street', 'San Francisco', 'CA', 'USA', '94105');

INSERT INTO coupons (code, discount_percent, min_order_amount, expires_at, is_active) VALUES
('WELCOME10', 10.00, 100.00, '2027-12-31 23:59:59', 1),
('SPRING20', 20.00, 150.00, '2027-06-30 23:59:59', 1);

INSERT INTO orders (user_id, address_id, subtotal, discount, total, status, payment_status, tracking_number) VALUES
(2, 1, 249.00, 24.90, 224.10, 'shipped', 'paid', 'TRK100001');

INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
(1, 1, 1, 249.00);

INSERT INTO payments (order_id, method, amount, status, transaction_ref) VALUES
(1, 'card', 224.10, 'captured', 'PAY-DEMO-001');

INSERT INTO reviews (user_id, product_id, rating, comment) VALUES
(2, 1, 5, 'Excellent sound quality and comfort.');
