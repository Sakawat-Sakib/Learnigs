** source: MPrashant TECH

#Database : A database is a structured collection of data that is stored and organized so it can be easily accessed, managed, and updated.
#DBMS : software that manages and controls the creation, storage, retrieval, and updating of data in a database.

#Database vs DBMS : Database is the container for data, while a DBMS is the system that manages and controls access to that data.

NOTE : MongoDB, PostgreSQL, and MySQL are both databases and DBMS.

#RDBMS (Relational Database Management System) : DBMS that stores data in structured tables (rows & coloum) with predefined relationships.

#SQL : a programming language used to manage and manipulate relational databases.

#DBMS that use SQL (But all has there own features) : MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database, SQLite

###Basic Command (SQL shell) : (We can also use CMD but connect first)

* \list or \l or SELECT datname FROM pg_database; : to see list of database
* \! cls : to clear screen
* CREATE DATABASE database_name;

* \c <database_name> : change database
* DROP DATABASE database_name;


* \dn
 : list of all schema
* CREATE SCHEMA schema_name;

* DROP SCHEMA schema_name CASCADE;

* \dt
 : list of tables in current schema

* \d table_name : describe table
* CREATE TABLE table_name (
    column1 data_type constraint,
    column2 data_type constraint
);

* INSERT INTO table_name (column1, column2) VALUES ('value1', 'value2');
 Note : It is possible to add multiple rows at once
* SELECT * FROM table_name;

* UPDATE table_name SET column1 = 'new_value' WHERE condition;

* DELETE FROM table_name WHERE condition;

* DROP TABLE table_name;



Note: command case insensitive ; all lower case or upper case

#Database: The container at the highest level. Contains multiple schemas.
#Schema: A namespace within the database. Contains multiple tables (and other objects like views).
#Table: The actual data storage structure within a schema.

#Constraint (Rule that applied to coloum) :
* PRIMARY KEY : Unique identifier, can't contain null, only one coloum can be primary key
* NOT NULL
* DEFAULT '... .. .. ..'
* CHECK : to validate data
#Data Type : 
* SERIAL : for AUTO_INCREAMENT 

EXAMPLE : CREATE TABLE employee (emp_id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL UNIQUE, salary DECIMAL(10,2) DEFAULT 30000.00, hire_date DATE NOT NULL DEFAULT CURRENT_DATE)

# CLauses : Where, Distinct (to get unique value), Order By, Limit, Like (to match pattern)
# Relational Operator : =, >=, <= , > , < , !=
# Logical Operator : AND , OR
# Advance : 
* <coloum> IN/NOT IN ("val1", "val2", "Val3") : this use when you search for multiple match in one single coloum
 * BETWEEN '...' AND '...' : use to match a range


#Aggregate Function : COUNT , SUM, AVG, MIN, MAX

#Group By : use case -> if we need to know how many employee works under each department

#String Function : CONCAT, CONCAT_WS, SUBSTR, LEFT, RIGHT, LENGTH, UPPER, LOWER, TRIM, LTRIM, RTRIM, REPLACE, POSITION, STRING_AGG

Note: We can write Query inside query

#Altering Tables (modifying table) : 
* ALTER TABLE person ADD COLUMN age INT; 
* ALTER TABLE person DROP COLUMN age; 
* ALTER TABLE person RENAME COLUMN name To fname 
* ALTER TABLE person ALTER COLUMN fname SET DATA TYPE VARCHAR(15) 
* many more

#CASE : similar to if else statement

#RELATIONSHIP:
* 1 to 1
* 1 to many
* many to many (required third table)

#Foreign key: Primary key of another table using as column

#JOIN : 
* cross join
* Inner join (show matched data)
* Left join (show all left data but matched data from right)
* Right join (show all right data but matched data from left)

#VIEW : store query to future use. Read only. Can't INSERT, DELETE, UPDATE data

#HAVING Clause : similar to WHERE but use with GROUP BY

#Stored Procedure : similar to a function, take parameter and perform INSERT, UPDATE, DELETE and may or may not return value
#Stored function : similar to function. always return value

#Window function :
#CTE: (common table Expression)
