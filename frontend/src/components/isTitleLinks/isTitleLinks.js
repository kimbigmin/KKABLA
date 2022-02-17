import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function isTitleLinks(isLogin,post,boardTitle){
  //17글자가 넘는 제목은 17글자까지만 자르고 '...' 추가
  const limitLen= boardTitle === 'searchResultBoard' ? 30 : 15;
  const tailTxt=" ...";

  //날짜 YY-DD 식으로 출력
  const createdTime=new Date(post.createdAt)
  const month=(createdTime.getMonth()+1).toString();
  const date=createdTime.getDate().toString();
  const fillZeroMonth = month.length<2 ? '0'+month: month;
  const fillZeroDate = date.length<2 ? '0'+date: date;
  
  const boardType = post.type === 'free' ? "자유" : 
  post.type === "develop" && "개발" 
  return (
    <TitleWrapper key={post._id}> 
          <Link
              to={`/board/${post.type}/${post._id}`}
              state={{ 
                isLogin: isLogin,
                dataFromBoard : post,
              }}
              style={{
                display:'flex',
                justifyContent: 'space-between',
                
                textDecoration: 'none',
                color: 'black',
               }}
          > 
            {(boardTitle === "hotPostsBoard" && post.title !=="")  && (<BoardType type={post.type}>{boardType}</BoardType>)}
            <h2>{post.title.length<limitLen ? 
            post.title : (post.title.substr(0,limitLen)+tailTxt)}</h2>
              
          </Link>
          {post.createdAt !== "" && <span>{`${fillZeroMonth}-${fillZeroDate}`}</span>}
    </TitleWrapper>
  );
}


const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  align-items: center;
  cursor: pointer;

  h2 {
    display: flex;
    font-size: 1rem;
    line-height:0.8rem;
    align-items: center;
  }

  span {
    font-size: 0.9rem;
  }
`;


const BoardType= styled.div`
  // color: #f5f5f5;
  ${(props=> props.type==='free' ? `color: #b5b5b5` : `color: #6a9eff`)};
  ${props=> props.type==='free' ? `border: 1px solid #b5b5b5` : `border: 1px solid #6a9eff`};
  line-height:0.8rem;
  margin-right: 0.5rem;
  border-radius:1px;
  padding:0.2rem 0.3rem;
`;