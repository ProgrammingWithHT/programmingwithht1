import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>  //InjectModel help to inject schema here services
    ) { }
    //Partial in TS Utility Types
    async createStudent(data: Partial<Student>): Promise<Student> {
        const newStudent = new this.studentModel(data);
        return newStudent.save();
    }
    async getAllStudents(): Promise<Student[]> {
        return this.studentModel.find().exec();
    }
    async getStudentById(id: string): Promise<Student | null> {
        return this.studentModel.findById(id).exec();
    }
    async updateStudent(id: string, data: Partial<Student>): Promise<Student | null> { //if data not found return null that reason used null in return type
        // return this.studentModel.findByIdAndUpdate(id, data, {new: true}).exec();
        const updated = await this.studentModel.findByIdAndUpdate(id, {
            name: data.name ?? null,
            age: data.age ?? null,
            email: data.email ?? null,
        }, { overwrite: true, new: true });
        return updated;
    }
    // What is overwrite: true in Mongoose (NestJS)?
    // overwrite: true is used in update operations to:
    // Replace the entire document instead of updating specific fields
    // Default Behavior (WITHOUT overwrite)
    // await this.userModel.updateOne(
    //   { _id: id },
    //   { name: "Hamza" }
    // );
    // This does:
    // {
    //   "name": "Hamza",
    //   "age": 20,       // stays
    //   "email": "x@y.com" // stays
    // }
    // Only updates given field
    // Does NOT remove old fields
    // WITH overwrite: true
    // await this.userModel.updateOne( { _id: id }, { name: "Hamza" }, { overwrite: true });
    //This does:
    // {"name": "Hamza"}
    //age removed
    //email removed
    //Entire document replaced

    async patchStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec(); //new:true return updated data
    }
    async deleteStudent(id: string): Promise<Student | null> {
        return this.studentModel.findByIdAndDelete(id).exec();
    }
}

