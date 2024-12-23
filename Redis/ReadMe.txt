#Redis core : main functionality
#Redis stack : with extra functionality

## STRING:

#SET key value: setting value
#GET key: getting value
#DEL key: deleting value
#MSET key value key value .. .. .. : setting multiple value
#MGET key key .. .. : getting multiple value
#GETRANGE key start end: getting range of character
#SETRANGE key position value: setting/replacing new value from given postion

For NUMBER:
#INCR key: increament by 1
#DECR key: decreament by 1
#INCRBY key value: increament by value
# DECRBY key vlaue: decreament by value

ADVANCE: (we can use more parameter with these commands --> see doc for more)
#SET (EX NX GET) etc.



##SETS: (all members need to be unique)

#SADD key member member member : Adding member
#SREM key member : removing member
#SUNION key key : merge two or more sets 
#SISMEMBER key member: check member exists 



##LIST: (item don't need to be unique)

#LPUSH key item item .. .. : pushing item to the left
#RPUSH key item item .. .. : pushing item to the right
#LPOP key amount : given number of amount will be poped from left 
#RPOP key amount : given number of amount will be poped from right 
#LLEN key : list length
#LRANGE key start end : getting item in the given range
#LINDEX key position : getting item from given position
#LPOS key item : give the position of the item



##HASHES: (like an object)

#HSET books:1 field value field value: creating/replacing hash (convention: represent similar object with 1,2,3.....)

#HGET books:1 field: get field value
#HGETALL books:1 : get all fields together
#HEXISTS books:1 field : checking field existance
#HKEYS books:1 : return all the fields name
#HVALS books:1 : return all the values
#HDEL books:1 field : delete a field
#DEL books:1 : delete entire hash


##SORTED SET:

#ZADD key score member score member .. .. : 


##JSON : later

##RediSearch : later



PRACTICAL:
*required package (npm i redis) : Node-Redis (to write redis command in code)




