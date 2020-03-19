import mysql.connector

def createTable(conn):
    cur = conn.cursor()

    sql = ("CREATE TABLE postcodes ("
               "postcode VARCHAR(4), "
               "location VARCHAR(20), "
               "PRIMARY KEY(postcode))")
    try:
        cur.execute(sql)
    except mysql.connector.Error as err:
            print(err)
    finally:
        cur.close() 

def insert(conn):
    """Insert data to a table."""
    city = {
        'postcode': '4000',
        'name': 'MyCity'
    }
    cur = conn.cursor()
    num = 0
    sql = "INSERT INTO postcodes (postcode, location) VALUES (%(postcode)s, %(name)s)"
    try:
        cur.execute(sql, city)  # data is provided as a tuple
              # commit after each row
    except mysql.connector.Error as err:
        print("Error: {}".format(err.msg))
    conn.commit()
    print("{:d} rows inserted.".format(num))
    cur.close()

def query_data(conn):
    """Querying data."""
    cur = conn.cursor()
    try:
        sql = ("SELECT postcode, location FROM postcodes "
               "WHERE postcode BETWEEN %s AND %s")
        cur.execute(sql, ("4000", "5000"))
        print(cur.fetchall())
        # for (postcode, location) in cur:
        #     print("{}: {}".format(postcode, location))
    except mysql.connector.Error as err:
        print("Error: {}".format(err.msg))
    finally:
        cur.close()

if __name__ == "__main__":
        try:
            conn = mysql.connector.connect(user='course', password='password', host='127.0.0.1', database='example')
        except mysql.connector.Error as err:
            print(err)
        else:
            # createTable(conn)
            # insert(conn)
            query_data(conn)
            conn.close()