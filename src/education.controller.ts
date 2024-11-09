import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller()
export class EducationController {
  @Get(":id")
  getLetter(@Param('id') id) {
    return String.fromCharCode(1039 + Number(id));
  }

  @Post()
  arrayInfo(@Body() array) {

    return {
      sum: array.reduce((acc, v) => acc+v),
      min: array.sort((a,b) => a-b)[0],
    };

  }

  /* Ожидаю такую структуру
   {
     "word": "слово"
   }
   */

  @Put()
  toUpperCaseMethod(@Body() body) : string {
    return body.word.toUpperCase();
  }

  @Delete()
  deleteWord(@Body() body) {
    return body.words.filter(el=>el!==body.remove);
  }

}