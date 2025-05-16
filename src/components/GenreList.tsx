import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";
import { useState } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const selectGenreHandler = (genre: Genre) => {
    onSelectGenre(genre);
    setSelectedGenre(genre);
  };

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres?.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropedImageUrl(genre.image_background)}
            />
            <Button
              variant="link"
              fontSize="large"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={selectGenreHandler.bind(this, genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
