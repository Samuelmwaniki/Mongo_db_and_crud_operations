import { Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Weapon {
    STARS = 'stars',
    NUNCHUCKS = 'nunchucks'
}

export class Ninja {
    @Prop()
    name: string;

    @Prop()
    weapon: Weapon;
}

export const NinjaSchema = SchemaFactory.createForClass(Ninja);