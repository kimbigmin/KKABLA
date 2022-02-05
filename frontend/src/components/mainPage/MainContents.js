import HotBootCampBoard from "./HotBootCampBoard";
import GeneralPostsBoard from "./postBoards/GeneralPostsBoard";
import PostsBoard from "./PostsBoard";
import { Container } from '@mui/material';

export default function MainContents(){
  return(
    <Container>
      <HotBootCampBoard/>
      <PostsBoard/>  
    </Container>
  );
} ;
