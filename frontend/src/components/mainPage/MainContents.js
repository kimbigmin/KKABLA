import HotBootCampBoard from "./HotBootCampBoard";
import GeneralPostsBoard from "./postBoards/GeneralPostsBoard";
import PostsBoard from "./PostsBoard";
export default function MainContents(){
  return(
    <>
      <HotBootCampBoard/>
      <PostsBoard/>  
    </>
  );
} ;