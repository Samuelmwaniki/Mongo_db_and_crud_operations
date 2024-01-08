import { Controller, Get,Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { Ninja } from './schemas/ninja.schema';



@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){}
    @Get()
getNinjas(){
    //const service = new NinjasService()

        return this.ninjasService.getNinjas();
}
@Get(':id')
getOneNinja(@Param('id') id: string) {
    return{ id};
}
@Post()
async createNinja(@Body() createNinjaDto): Promise<Ninja>{
  return await this.ninjasService.createNinja(createNinjaDto);

}
@Put(':id')
updateNinja(@Param('id') id:string, @Body() UpdateNinjaDto: UpdateNinjaDto) {
    return{
        id,
        name: UpdateNinjaDto
    };
}

@Delete(':id')
removeNinja(@Param('id') id: string): Promise<any>{

    return this.ninjasService.remove(id)
}


}


