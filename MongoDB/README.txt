# when we need to add multiple value in single field we need decalare field as array:
- cusines: [{type: String, required: true}]

# we can pass one schema to another schema :
- menuItems: [menuItemSchema]

# when a field indicate other schema we need add that field in the schema like this : 
- user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}

# when a field indicate other schema then need to store data of that field like this : 
- restaurant.user = new mongoose.Types.ObjectId(req.userId)

# find({filter}) return empty array if no data match
# findOne({filter}) return undefined/null if no data match 

# you can use the $in operator if you're looking for documents that contain any of these cities, or the $all operator if you're looking for documents    that contain all of them.
	 example : const results = await Restaurant.find({city: { $in: cities }})

# The $or operator in MongoDB allows you to specify multiple conditions, and documents that satisfy at least one of these conditions will be matched.

# In MongoDB queries, when you specify multiple conditions in a query object, those conditions are combined using a logical AND by default. This means that all specified conditions must be satisfied for a document to be included in the result set :
	{
  	    fieldA: valueA,
	    fieldB: valueB,
   	    fieldC: valueC
	}
# we can retrieve type of a schema : 
	export type MenuItemType = InferSchemaType<typeof menuItemSchema>

# when a model related to other model and we want all result : 
 const order = await Order.find({user: req.userId}).populate("restaurant").populate("user")
	

