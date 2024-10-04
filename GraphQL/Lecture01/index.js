import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//db
import db from './_db.js'


//types
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        },
        review(_,args){
            return db.reviews.find(review => args.id === review.id )
        },
        author(_,args){
            return db.authors.find(author => args.id === author.id )
        },
        game(_,args){
            return db.games.find(game => args.id === game.id )
        }

    },
    Game:{
        reviews(parent){
            return db.reviews.filter(r => r.game_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find((a) => a.id === parent.author_id)
        },
        game(parent) {
            return db.games.find((g) => g.id === parent.game_id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
    },
    Mutation : {
        deleteGame(_,args){
            db.games  = db.games.filter((g)=> g.id !== args.id)
            return db.games
        },
        addGame(_,args){
            let game = {
                ...args.game,
                id: Math.floor(Math.random()*10000).toString()
            }
            db.games.push(game)
            return game
        },
        updateGame(_,args){
            db.games = db.games.map((g)=>{
                if (g.id === args.id){
                    return {...g, ...args.edits} //second spread operator overwrite first as field are same
                }

                return g
            })

            return db.games.find((g) => g.id === args.id)
         
            
        }

    }
}

//server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server,{
    listen : {port: 4000}
})

console.log('Server ready at port', 4000)