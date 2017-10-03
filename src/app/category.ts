import { Application } from './application';

export class Category{
    audience_target: string;
    icon_img:string;
    header_title:string;
    description:string;    
    key_color : string;
    applications : Application[];
}