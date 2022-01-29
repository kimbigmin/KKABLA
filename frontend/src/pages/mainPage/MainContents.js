import HotPostsBoard from "./HotPostsBoard";
import GeneralPostsBoard from "./GeneralPostsBoard";
import ReviewedCamp from "./ReviewedCamp";

export default function MainContents(){
  return(
    <>
      <HotPostsBoard/>
      <GeneralPostsBoard/>
      <ReviewedCamp/>
    </>
  );
} ;