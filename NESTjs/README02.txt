# i need to export that Services from respective module if any other module need to use that Service 

##step 1 :  (exporter module)
@Module({
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}


##step 2 : (importer module)
import { UserModule } from '../user/user.module';
@Module({
  imports: [UserModule],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}


##step 3 : (importer module service)
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service'; 
@Injectable()
export class CompanyService {
  constructor(
    private userService: UserService
  ) {}
}