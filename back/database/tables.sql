CREATE TABLE visitors(
  id SERIAL PRIMARY KEY NOT NULL,
  month VARCHAR(30) NOT NULL,
  new_customer INTEGER NOT NULL,
  loyal_customer INTEGER NOT NULL,
  unique_customer INTEGER NOT NULL,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)

INSERT INTO visitors (month, new_customer, loyal_customer, unique_customer) VALUES 
('Jan', 50, 70, 120),
('Feb', 140, 130, 140),
('Mar', 160, 160, 140),
('Apr', 180, 200, 210),
('May', 190, 280, 220),
('Jun', 200, 330, 230),
('Jul', 310, 320, 240),
('Aug', 300, 310, 230),
('Sept', 180, 330, 160),
('Oct', 160, 180, 170),
('Nov', 140, 220, 150),
('Dec', 120, 70, 130);

CREATE TABLE customers(
  id SERIAL PRIMARY KEY NOT NULL,
  month VARCHAR(30) NOT NULL,
  last_month INTEGER NOT NULL,
  this_month INTEGER NOT NULL,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)

INSERT INTO customers (month, last_month, this_month) VALUES 
('Jan', 400, 240),
('Fab', 300, 139),
('Mar', 400, 180),
('Apr', 278, 190),
('May', 189, 480),
('Jun', 239, 380),
('Jul', 349, 430),

CREATE TABLE revenue(
  id SERIAL PRIMARY KEY NOT NULL,
  day VARCHAR(30) NOT NULL,
  online INTEGER NOT NULL,
  offline INTEGER NOT NULL,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)

INSERT INTO revenue (day, online, offline) 
VALUES 
('Mon', 14, 12.5),
('Tue', 17, 12),
('Wen', 6, 23),
('Thu', 16, 7),
('Fri', 13, 12),
('Sat', 17, 13),
('Sun', 21, 12)

CREATE TABLE target_reality(
  id SERIAL PRIMARY KEY NOT NULL,
  month VARCHAR(30) NOT NULL,
  reality INTEGER NOT NULL,
  target INTEGER NOT NULL,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)

INSERT INTO target_reality (month, reality, target) 
VALUES 
('Jan', 60, 80),
('Feb', 55, 75),
('Mar', 40, 90),
('Apr', 60, 70),
('May', 100, 75),
('Jun', 100, 75),
('Jul', 100, 75)

CREATE TABLE top_products(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  papularityPercent INTEGER NOT NULL,
  salesPercent INTEGER NOT NULL,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)

INSERT INTO top_products (name, papularityPercent, salesPercent) 
VALUES 
('Home Decor Range', 70, 45),
('Disney Princess Pink Bag 18', 60, 29),
('Bathroom Essentials', 50, 18),
('Apple Smartwatches', 30, 25)

CREATE TABLE sales_map(
  id SERIAL PRIMARY KEY NOT NULL,
  country_id VARCHAR(30) NOT NULL,
  country_name VARCHAR(30) NOT NULL,
  fill_color VARCHAR(30) NOT NULL,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)

INSERT INTO sales_map (country_id, country_name, fill_color) VALUES 
('840', 'United States of America', 'violet'),
('250', 'France', 'violet'),
('156', 'China', 'yellow'),
('276', 'Germany', 'emerald'),
('643', 'Russia', 'yellow'),
('764', 'Thailand', 'red'),
('356', 'India', 'dodgerBlue'),
('036', 'Australia', 'red'),
('124', 'Canada', 'dodgerBlue'),
('634', 'Quatar', 'emerald');

CREATE TABLE volume_services(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(10) NOT NULL,
  volume INTEGER NOT NULL,
  services INTEGER NOT NULL,
  create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)

INSERT INTO volume_services (name, volume, services) VALUES
('A', 400, 240),
('B', 300, 139),
('C', 200, 980),
('D', 278, 390),
('E', 189, 480),
('F', 239, 380),
('G', 349, 430);