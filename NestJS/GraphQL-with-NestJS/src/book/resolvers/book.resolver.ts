import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from '../book.service';
import { Book } from '../model/book.model';
import { CreateBookInput } from '../dto/create-book.input';
import { UpdateBookInput } from '../dto/update-book.input';

@Resolver(() => Book)
export class BookResolver {
    constructor(private readonly bookService: BookService){}

    @Query(() => [Book], { name: 'getAllBooks' })
    async findAll(){
        return this.bookService.findAll();
    }

    @Query(() => Book, { name: 'getBook' })
    async findOne(@Args('id', { type: () => String }) id:string ){
        return this.bookService.findOne(id);
    }

    @Mutation(() => Book) //This function name = GraphQL mutation name
    async createBook(@Args('input') input: CreateBookInput) {
        return this.bookService.create(input);
    }

    @Mutation(() => Book)
    async updateBook(@Args('input') input: UpdateBookInput) {
        return this.bookService.update(input);
    }

    @Mutation(() => Boolean)
    async deleteBook(@Args('id', { type: () => String }) id: string ) {
        return this.bookService.remove(id);
    }
}



// how to test graphql apis it test hrough playbackgroud with this api
// http://localhost:3000/graphql

// How to add data 
// mutation {
//    createBook(input: {
//      title: "NestJS",
//      author: "Hamza"
//    }){
//      _id,
//      title,
//      author
//    }
//  }

//For get data
// query {
//   getAllBooks {
//     _id,
//     title,
//     author
//   }
// }

//For Update Data
// mutation {
//   updateBook(input: {
//     id: "69df49da9b54a085865a0437",
//     title: "NestTS",
//   }) {
//     _id,
//   }
// }
