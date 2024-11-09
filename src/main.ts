import { NestFactory } from "@nestjs/core";
import { isLogLevelEnabled } from "@nestjs/common/services/utils";
import { EducationModule } from "./education.module";

async function start(){

  const PORT = 5000;
  const app = await NestFactory.create(EducationModule);

  await app.listen(PORT, () => console.log(`Server start on port = ${PORT}`));

}


start()