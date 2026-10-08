import { Body, Controller, Delete, Get, Header, HttpCode, Param, Patch, Post, Put, Redirect, Req, Res, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import type { Request, Response } from 'express';
import { CreateStudentDto } from './CreateStudentDto.dto';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enums';
import { RolesGuard } from 'src/guards/roles/roles.guard';

// Pipe = transform or validate incoming data before it reaches your controller
// From your note:
// TypeScript interfaces disappear during transpilation
// 👉 Means:
// At runtime → interface is gone ❌
// NestJS cannot validate

// Request → Pipe (validate) → Controller → Service → DB

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { };

    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData() {
        return { message: 'Only admin can access' }
    }

    @Get()
    // @UseGuards(AuthGuard)
    getAll() {
        console.log('hi')
        return this.studentService.getAllStudents();
    }
    //old way
    //   @Get()
    //   getAll(@Req() req: Request, @Res() res: Response) {  //if you this approach import type of requent, response also
    //     console.log('Request URL:', req.url);
    //     const students = this.studentService.getAllStudents();
    //     return res.status(200).json(students);
    //   }

    @Get(':id')
    @HttpCode(200)
    getOne(@Param('id') id: string) {
        return this.studentService.getStudentById(Number(id))
    }

    //old way
    //   @Get(':id')
    //   getOne(
    //     @Param('id') id: string,
    //     @Req() req: Request,
    //     @Res() res: Response
    //   ) {
    //     console.log(req.params)
    //     const student = this.studentService.getStudentById(Number(id));
    //     if (!student) {
    //       return res.status(404).json({ message: 'Student not found' });
    //     }
    //     return res.status(200).json(student);
    //   }

    //In below api i don't used DTO concept than if i pass addition entity like email, pass it also create in post but
    //only allow name and age so what happen basically typescript is compile time validation but in run time after build the hole code convert into JS that is the reason to solve this issues used DTO + Validation
    @Post()
    create(@Body() body: CreateStudentDto) {
        console.log(body);
        return this.studentService.createStudent(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: { name: string; age: number }) {
        return this.studentService.updateStudent(Number(id), body);
    }
    @Patch(':id')
    patch(@Param('id') id: string, @Body() body: Partial<{ name: string; age: number }>) {
        return this.studentService.patchStudent(Number(id), body);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.studentService.deleteStudent(Number(id));
    }

    @Get('abcd/*')
    @Header('Cache-Control', 'no-store')
    @Header('code', 'hamza')
    @Redirect('https://nestjs.com', 301)
    findAll() {
        return 'This route uses a wildcard';
    }


    //Pipes
    @Post('custom')
    transformName(@Body('name', new UppercasePipe()) name: string) {
        return { message: `Received name: ${name}` }
    }
}
