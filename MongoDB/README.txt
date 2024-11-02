when we need to add multiple value in single field we need decalare field as array:
- cusines: [{type: String, required: true}]

we can pass one schema to another schema :
- menuItems: [menuItemSchema]

when a field indicate other schema we need add that field in the schema like this : 
- user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}

when a field indicate other schema then need to store data of that field like this : 
- restaurant.user = new mongoose.Types.ObjectId(req.userId)

- find({filter}) return empty array if no data match
- findOne({filter}) return undefined/null if no data match 