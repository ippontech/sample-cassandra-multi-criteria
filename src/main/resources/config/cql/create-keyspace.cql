CREATE KEYSPACE IF NOT EXISTS myinvoice
    WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 }
    AND DURABLE_WRITES = true;
