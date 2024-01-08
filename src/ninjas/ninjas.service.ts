import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ninja } from './schemas/ninja.schema';
import mongoose from 'mongoose';

@Injectable()
export class NinjasService {
    remove(id: string): Promise<Ninja> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectModel(Ninja.name)
        private ninjaModel: mongoose.Model<Ninja>
    ) {}

    private ninjas=[
        {id: 0, name: 'ninjaA',  weapon: 'stars'},
        {id: 1, name:'ninjaB', weapon: 'nunchucks'},
    ];

getNinjas(weapon?: 'stars' |'nunchucks'){
    // if(weapon){
    //     return this.ninjas.filter((ninja)=> ninja.weapon ===weapon);
    // }
    // return this.ninjas;
    const res = this.ninjaModel.find();
    return res;

}

async createNinja(createNinjaDto: CreateNinjaDto) {
    const res = await this.ninjaModel.create(createNinjaDto);
    return res;
}
    async removeNinja(id: string): Promise<any> {
        const res=await this.ninjaModel.remove(id);
    }

}


