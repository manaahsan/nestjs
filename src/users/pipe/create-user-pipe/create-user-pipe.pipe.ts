import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { Register } from 'src/users/dto/register.user.dto';

@Injectable()
export class CreateUserPipePipe implements PipeTransform {
  transform(value: Register, metadata: ArgumentMetadata) {
    const transform = parseInt(value.age.toString());
    if (isNaN(transform)) {
      throw new HttpException(
        'Invalid type for age Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { ...value, age: transform };
  }
}
