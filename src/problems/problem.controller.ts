import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  Req,
  UseGuards,
  Request,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProblemService } from './problem.service';
import { UserService } from '../users/user.service';
import { CreateProblemDTO } from './dtos/create-problem.dto';
import { UpdateProblemDTO } from './dtos/update-problem.dto';
import { TenantGuard } from 'src/auth/guards/tenant.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';

@Controller('problem')
export class ProblemController {
  constructor(
    private readonly problemService: ProblemService,
    private readonly userService: UserService,
  ) {}

  //@UseGuards(JwtAuthGuard, 
  @Post()
  async create(@Body() body) {
    console.log('body', body);

    const display_url = await this.problemService.saveImage(
      body.data.photo.base64,
    );

    console.log('image url', display_url);

    const createProblemDto = new CreateProblemDTO(
      body.data.subject,
      body.data.description,
      display_url,
    );
    

    createProblemDto.tenant = (await this.userService.findOne('user10')).tenant; 
    return this.problemService.createProblem(createProblemDto);
  }

  //@UseGuards(JwtAuthGuard, AdminGuard))
  @Get()
  findAll(@Request() req: any) {
    return this.problemService.findAllProblems();
  }
}
