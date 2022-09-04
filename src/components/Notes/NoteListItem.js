import React from "react";
import styled from "styled-components";
import showFormattedDate from "../../utils/showFormattedDate";
import NoteListItemMenu from "./NoteListItemMenu";

const NoteListItem = ({ id, title, body, createdAt, archived }) => {
  return (
    <>
      <Article id={id}>
        <div>
          <ArticleContentTitle>{title}</ArticleContentTitle>
          <ArticleContentDate>
            <TimeIcon className="material-icons" aria-hidden="true">
              access_time
            </TimeIcon>
            {showFormattedDate(createdAt)}
          </ArticleContentDate>
        </div>
        <ArticleContentText>{body}</ArticleContentText>
        <NoteListItemMenu id={id} isArchived={archived} />
      </Article>
    </>
  );
};

const Article = styled.article`
  display: grid;
  grid-template-rows: .3fr 1fr .15fr;
  margin-bottom: 18px;
  box-shadow: 0 4px 8px 0 rgba(52, 73, 94, 0.2);
  border-radius: 10px;
  overflow: hidden;
  color: #000;
  background-color: #fcdde8;
  padding: 2% 6%;
`;

const ArticleContentTitle = styled.h3`
  margin-bottom: 0;
`;

const ArticleContentText = styled.p`
  text-align: left;
  font-size: 1rem;
  word-wrap: anywhere;
`;

const ArticleContentDate = styled.p`
  font-size: 0.85rem;
`;

const TimeIcon = styled.i`
  font-size: 16px;
  position: relative;
  top: 3px;
  margin-right: 5px;
`;

export default NoteListItem;
