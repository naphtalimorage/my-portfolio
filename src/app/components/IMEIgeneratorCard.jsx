import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

export default function IMEIgeneratorCard() {
  return (
    <Card className=" w-60 h-auto md:h-[450px] lg:h-full lg:w-80">
      <CardHeader shadow={false} floated={false} className=" lg:h-44">
        <img
          src="/imei.png"
          alt="card-image"
          className="h-full w-full object-cover "
        />
      </CardHeader>
      <CardBody className="mb-2   md:mb-4  lg:mb-6">
        <div className=" flex items-center justify-between">
          <Typography color="blue-gray" className="font-semibold text-sm md:text-base">
            IMEI Generator
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 "
        >
          A web  app built with react that helps users to generate a random IMEI which is valid and also it checks whether an IMEI is valid or invalid which enhance their productivity and time management.        </Typography>
      </CardBody>
      <CardFooter className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <Button
          ripple={false}
          fullWidth={true}
          onClick={() => window.location.href = "https://naphtalimorage.github.io/imei-generator-webapp/"}
          className=" bg-purple-900/10 text-purple-500 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Live link
        </Button>

        <Button
          ripple={false}
          fullWidth={true}
          className="bg-purple-900/10 text-purple-500  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 "
          onClick={() => window.location.href = "https://github.com/naphtalimorage/imei-generator-webapp"}
        >
          Source code
        </Button>
      </CardFooter>   
    </Card>
  );
}