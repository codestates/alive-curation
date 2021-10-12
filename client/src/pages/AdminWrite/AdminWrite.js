import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AdminWrite = () => {
  const history = useHistory();
  const submit = () => {
    history.push("/");
  };

  return (
    <>
      <div>
        <div>여기는 관리자 글쓰기 페이지 입니다.</div>
        <input type="text" placeholder="책 제목" />
        <input type="text" placeholder="작가이름" />
        <input type="text" placeholder="책 소개" />
        <input type="text" placeholder="추천내용" />
        <button onClick={submit}>글올리기</button>
      </div>
    </>
  );
};

export default AdminWrite;
