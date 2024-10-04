
API vs GRAPHQL
- API return all data
- GraphQL return specified data

GraphQL = Query Language to fetch data from server

- Basic Query Structure :

    query Anyname {
        table_name {
            field,
            field {
                field,
                field
            },
            field
        }
    }

- Steps to start :
-- npm init -y
-- npm pkg set type="module" 
-- npm install @apollo/server graphql

- '!' mark use to set field as not null

- Sample of query with parameter :
    query anyQuery ($id: ID!) {
        review(id: $id){
            rating
        }
    }

    variable : 
        {
            "id": "1"
        }

- I can query the fields that are written in Schema doesn't matter about table field

- Mutation : make any change in data
-- Sample for DELETE : 

    mutation DeleteMutation($id: ID!){
        deleteGame(id: $id) {
            id,
            title
        }
    }

    variable : 
        {
            "id": "1"
        }

-- Sample for Add :

    mutation AddMutation($game: AddGameInput!){
        addGame(game: $game) {
            id,
            title
        }
    }

Variable :
    {
        "game":{
            "title": "a new game",
            "platform": ["ps5","mac"]
        }
    }