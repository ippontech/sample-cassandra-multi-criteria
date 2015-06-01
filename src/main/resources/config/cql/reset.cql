--
-- Reset myinvoice keyspace
--

SOURCE 'drop-keyspace.cql'
SOURCE 'create-keyspace.cql'

USE myinvoice;

SOURCE 'create-tables.cql'
