import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function MovieappCard() {
    return (
      <Card className="w-60 h-auto  md:h-[450px] lg:h-full lg:w-80">
        <CardHeader shadow={false} floated={false} className="h-44">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="mb-2  md:mb-4  lg:mb-6">
          <div className=" flex items-center justify-between">
            <Typography color="blue-gray" className="font-semibold">
              Movie Web App
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            A web application that generates a random valid IMEI and also checks and validate IMEI given
          </Typography>
        </CardBody>
        <CardFooter className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
          <Button
            ripple={false}
            fullWidth={true}
            className=" bg-purple-900/10 text-purple-500 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 "
          >
            Live link
          </Button>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-purple-900/10 text-purple-500  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 "
            
          >
            Source code
          </Button>
        </CardFooter>
      </Card>
    );
  }