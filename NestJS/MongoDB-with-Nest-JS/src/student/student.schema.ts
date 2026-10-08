import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StudentDocument = Student & Document;

// name!: string; if i used this than unique not work 
// name?: string; if i used this than unique not work 
// name: string; if i used this than unique work

@Schema({ timestamps: true })
export class Student{
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true })
    age: number;

    @Prop()
    email?: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);