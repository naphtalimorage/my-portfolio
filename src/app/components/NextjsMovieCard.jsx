import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Image from "next/image";
  
  export default function NextMovieCard() {
    return (
      <Card className="w-80">
        <CardHeader shadow={false} floated={false} className="h-44">
          <img
            src="/movie.png"
            alt="card-image"
            className="h-full w-full object-cover "
          />
        </CardHeader>
        <CardBody>
          <div className=" flex items-center justify-between">
            <Typography color="blue-gray" className="font-semibold">
              Nextjs Movie App
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            A web app built with Next.js consuming TMDB API to help movies, Tv shows and series fanatics to have current information of the trending, popular, upcoming, on air and many other films.
          </Typography>
        </CardBody>
        <CardFooter className="grid grid-cols-1 lg:grid-cols-2 gap-2">
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