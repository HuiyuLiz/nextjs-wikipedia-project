import Link from "next/link";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { wikipediaDataSchema } from "@/lib/models";

type itemCardProps = z.infer<typeof wikipediaDataSchema>;

const ItemCard = (props: itemCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex flex-col items-center">
          {props.thumbnail && (
            <Avatar>
              <AvatarImage
                src={props.thumbnail.source}
                alt={props.title}
                width={props.thumbnail.width}
                height={props.thumbnail.height}
                loading="lazy"
              />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
          )}
          <Link
            className="text-base mt-6 no-underline hover:underline hover:underline-offset-4"
            href={`https://en.wikipedia.org/?curid=${props.pageid}`}
            target="_blank"
          >
            {props.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{props.extract}</p>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
