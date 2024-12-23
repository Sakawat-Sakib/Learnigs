import Link from 'next/link'
import {client} from '@/lib/db'

const getBooks = async ()=>{
  const result = await client.zRangeWithScores('books', 0, -1)

  const books = await Promise.all(result.map((book) => {
    return client.hGetAll(`book:${book.score}`)
  }))

  return books
}


const page = async () => {
  const books = await getBooks()
  console.log(books)
  return (
    <main>
      <nav className="flex justify-between">
        <h1 className='font-bold'>Books on Redis!</h1>
        <Link href="/create" className="btn">Add a new book</Link>
      </nav>
      
      <p>List of books here.</p>
      {books && books.map((book) => (
        <div>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </main>
  )
}

export default page