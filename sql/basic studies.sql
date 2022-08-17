-- ************* SELECT statement ***********

-- use sql_store;
-- SELECT customer_id,first_name FROM customers; 
-- select * 
-- from customers;  -- select all rows from one tables
-- select * from customers where customer_id=4; -- select single persons data
-- select * from customers order by city; -- order the records

-- ************ SELECT clause ************
-- select 
-- 	   last_name, 
--     first_name, 
--     points, 
--     points + (points * 0.10) as 'discount points' -- gives name to the column discounts
-- from customers; -- order shows by what we put first in select cmd and also do some arithmetic operations also

-- select DISTINCT state  -- distinct use to remove duplicate
-- from customers;

-- ************* exercise

-- select 
-- 	name,
--     unit_price,
--     unit_price * 1.1 as new_price
-- from products;

-- *************** WHERE clause

-- select *
-- from Customers 
-- where 				-- condition is true return result
	-- points > 3000 
	-- birth_date > '1990-01-01'; -- not equal symbol is != , <> both symbol is same
	-- customer_id <=4 ;
    
-- ******************** AND OR NOT operator

-- select *
-- from Customers 
-- where 				-- condition is true return result
	-- not(points > 3000 or birth_date > '1990-01-01');
	-- points > 3000 and birth_date > '1990-01-01';
    
    -- exercise
--     select * from order_items
--     where order_id = 6 and (unit_price * quantity) > 30;
  
-- IN operator
-- select * from Customers
-- where state = 'va' or state = 'ga' or state = 'fl'; -- comparing this we use IN operator
-- where state IN ('va','ga','fl') 
-- where state not IN ('va','ga','fl') 
    
-- exercise
-- select * from products
-- where quantity_in_stock IN (49,38,72)

-- between operator
-- select * from customers
-- where points >= 1000 AND points <=3000
-- where points between 1000 and 3000
-- where birth_date between '1990-01-01' and '2000-01-01';

-- ********** like operator
-- select * from customers
-- where last_name like  'b%' -- first letter start with b  
-- where last_name like  '%b%' -- middle any letter 
-- where last_name like  '%y' -- last letter is y 
-- where last_name like  '_____y' -- customer name exactly 6 character and we dont know the first 5 char and only know the last letter is y 
-- where last_name like  'b____y' -- knows the 1st, last char and length and use this method

-- where address like '%trail%' or 
-- 	address not like '%avenue%' or 
--     phone like '%9';

-- ********* regexp - (regular expression) operator
-- select * from customers
-- (^ beginning start with field) ($ last name must end with field)
-- ( | logical or )

-- where last_name like '%field' -- for using this alternatively use regexp
-- where last_name regexp 'field' 
-- where last_name regexp 'field$'
-- where last_name regexp 'field$|^mac|^rose'
-- where last_name regexp 'field|mac|rose'
-- where last_name regexp '[a-m]e' -- before E give some limit to print and check the limit and after the limit char are same if that is same print all like the condition
-- where last_name regexp '[gim]e' -- ge,ie,me check any last name is have the character between them print all those
-- where last_name regexp 'e[a-m]'

-- where first_name regexp '^elka|^ambur'
-- where last_name regexp 'ey$|on$'
-- where last_name regexp '^my|se'
-- where last_name regexp 'b[ru]' -- or use 'br|bu'

-- ********* null operator
-- select * from customers
-- where phone is null
-- where phone is not null
-- get the orders that are not shipped
-- select * from orders
-- where shipped_date is null

-- ******** order by clause
-- select * from customers
-- order by first_name

-- select * , (quantity * unit_price ) as total_price
-- from order_items
-- where order_id = 2
-- order by total_price desc

-- ********* limit clause
-- select * 
-- from customers
-- limit 4
-- limit 4,1 -- show's 4's next one value

-- get the top 3 loyal customers by points
-- order by points desc
-- limit 3  

-- ******** orders *****************
-- select
-- from
-- where
-- order by
-- limit

-- ******* inner joins (merge two table data)
-- select order_id,first_name,last_name
-- from orders
-- join customers  -- or using (inner join) to do same operation
-- on orders.customer_id=customers.customer_id
-- order by order_id

-- select order_id,first_name,last_name
-- from orders o  -- o is short form of orders thats called alies
-- join customers  c -- or using (inner join) to do same operation
-- on o.customer_id=c.customer_id
-- order by order_id

-- select order_id,oi.product_id,quantity,oi.unit_price
-- from order_items oi   -- oi is short form of order_items thats called alies
-- inner join products p
-- on oi.product_id=p.product_id

-- ********* joining across databases
-- use sql_inventory;
-- select * 
-- from sql_store.order_items oi
-- join sql_inventory.products p
-- on oi.product_id=p.product_id

-- ******* self joins 
-- find employee and manager and there id's
-- use sql_hr;
-- select 
-- 	e.employee_id, 
--     e.first_name,
--     m.first_name as manager
-- from employees e
-- join employees m
-- on e.reports_to = m.employee_id

-- ********* joining multiple tables (more than two tables)

-- use sql_store;
-- select 
-- 	o.order_id,
--     o.order_date,
--     c.first_name,
--     c.last_name,
--     o.status,
--     os.name
--     
-- from orders o
-- join customers c
-- 	on o.customer_id = c.customer_id
-- join order_statuses os
-- 	on o.status = os.order_status_id

-- use sql_invoicing;
-- select 
-- 	c.client_id,
--     c.name, 
--     p.date,
--     p.invoice_id,
--     p.amount,
--     p.payment_method,
--     pm.name
--     
-- from clients c
-- join payments p
-- 	on c.client_id = p.client_id
-- join payment_methods pm
-- 	on pm.payment_method_id = p.payment_method

-- ********** compound join conditions
-- use sql_store;
-- select 
-- 	c.customer_id,
--     c.first_name,
--     o.order_id,
--     oi.product_id,
--     p.name
--     
-- from customers c
-- join orders o
-- 	on c.customer_id = o.customer_id
--     -- and c.customer_id = o.order_id
-- join order_items oi
-- 	on o.order_id = oi.product_id
--  join products p
-- 	on oi.order_id = p.product_id

-- implicit join syntax
--  use sql_store;
-- select * 
-- from orders o
-- join customers c
-- 	on o.customer_id = c.customer_id


















