/* eslint-disable */
import React from "react";
import Comment from './Comment';
import { useState } from "react";
import '../component/CommentList.css'

function CommentList() {

  const styles = {
    btn: {
      width: '200px',
      height: '30px',
      marginLeft: '20px'
    },

    ipt: {
      marginLeft: '20px'
    }
  }


  const [comments, setComments] = useState([
    {
      name: "김승빈",
      comment: "안녕하세요. 김승빈 입니다.",
    },
    {
      name: "인호성",
      comment: "리액트 재밌다~!",
    },
    {
      name: "박유림",
      comment: "리액트 재미없어!!",
    },
  ]);

  const onInputAdd = (e) => {
    e.preventDefault();
    const nameInput = e.target.elements.nameInput;
    const commentInput = e.target.elements.commentInput;
  
    nameInput.value && commentInput.value ? (() => {
        const newComment = {
          name: nameInput.value,
          comment: commentInput.value,
        };

        setComments([...comments, newComment]);

        nameInput.value = "";
        commentInput.value = "";
      })()
    : null;
  };

  const onDelete = (i) => {
    setComments(comments.slice(0, i).concat(comments.slice(i + 1)));
    console.log(i)
  };


  return (
    <div>
      {comments.map((comment, i) => (
        <Comment key={i} i={i} name={comment.name} comment={comment.comment} onDelete={() => {onDelete(i)}} />
      ))}
      <form onSubmit={onInputAdd}>
        <label htmlFor="nameInput">name : </label>
        <input id="nameInput" type="text" name="name"/>
        <label style={styles.ipt} htmlFor="commentInput">comment : </label>
        <input id="commentInput" type="text" name="comment"/>
        <button type="submit" style={styles.btn}>글 추가하기</button>
      </form>

    </div>
  );
}

export default CommentList