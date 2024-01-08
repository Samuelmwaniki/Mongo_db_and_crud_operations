import { Controller, Get,Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';


@Controller('ninjas')
export class NinjasController {
    @Get()
getNinjas(@Query('weapon')weapon: 'stars' | 'nunchucks'){
    const service = new NinjasService()

    return service.getNinjas(weapon);
}
@Get(':id')
getOneNinja(@Param('id') id: string) {
    return{ id};
}
@Post()
createNinja(@Body()createNinjaDto){
    return{
        name:createNinjaDto .name,
    }

}
@Put(':id')
updateNinja(@Param('id') id:string, @Body() UpdateNinjaDto: UpdateNinjaDto) {
    return{
        id,
        name: UpdateNinjaDto
    };
}

@Delete(':id')
removeNinja() {
    return{}
}

}